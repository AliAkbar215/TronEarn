import { toast } from "react-toastify";
import { environment } from "../../environment";


export const RegisterAction = (referrerAddress) => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;

  let getRefAddress = localStorage.getItem("TRON_EARN_REF");
  let getDirectFromUrl;

  let url = window.location.href;

  if (url.includes("?ref=")) {
    let getAddress = url.split("?ref=")[1];
    let final = getAddress.slice(0, 1);
    getDirectFromUrl = final;
  }

  if (userWalletAddress) {
    contract
      .register(
        getDirectFromUrl ? getDirectFromUrl : getRefAddress ? getRefAddress : 1
      )
      .send({
        feeLimit: 100_000_000,
        callValue: state().UserReducer.tronWeb.toSun(900),
      })
      .then(() => {
        toast.success("registered successfully!");
      })
      .catch((err) => {
        toast.error("something went wrong!");
      });
  }

  // if (userWalletAddress) {
  //   await state()
  //     .UserReducer.contract.getStationInfo(
  //       state().UserReducer.userWalletAddress,
  //       1
  //     )
  //     .call()
  //     .then(async (val) => {
  //       if (val[0]) {
  //         toast.error("user already exist please do autoLogin!");
  //       } else {
  //         await state()
  //           .UserReducer.contract.Level1(
  //             getDirectFromUrl
  //               ? getDirectFromUrl
  //               : getRefAddress
  //               ? getRefAddress
  //               : environment.defaultRefAddress
  //           )
  //           .send({
  //             feeLimit: 100_000_000,
  //             callValue: state().UserReducer.tronWeb.toSun(900),
  //           })
  //           .then(async (val) => {
  //             toast.success("confirmed please try to autologin");
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error("something went wrong!");
  //     });
  // }
};

export const AutoLoginAction = () => async (dispatch, state) => {
  // console.log("clicked",state().UserReducer.userWalletAddress);
  if (state().UserReducer.userWalletAddress) {
    await state()
      .UserReducer.contract.getStationInfo(
        state().UserReducer.userWalletAddress,
        1
      )
      .call()
      .then(async (val) => {
        if (val[0]) {
          dispatch({
            type: "USER_AUTHENTICATED",
          });
        } else {
          toast.error("user not found please do register!");
        }
        localStorage.setItem("isAuth", val[0]);
      })
      .catch((err) => {
        toast.error("something went wrong!");
      });
  }
};

export const ViewAction = (id) => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;

  contract
    .idtoaddress(id)
    .call()
    .then((val) => {
      if (
        tronWeb.address.fromHex(val) != "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"
      ) {
        dispatch({
          type: "USER_WALLET_ADDRESS",
          payload: tronWeb.address.fromHex(val),
        });

        dispatch({
          type: "USER_AUTHENTICATED",
        });
        dispatch({
          type: "CLICKED_FOR_VIEW",
        });
        localStorage.setItem("isAuth", true);
        localStorage.setItem("clickedForView", tronWeb.address.fromHex(val));
      }
      // console.log("here is the value", tronWeb.address.fromHex(val));
    });
};

export const CheckCurrentUser = (defaultAddress, tronweb, auth) => async (
  dispatch
) => {
  tronweb
    .contract()
    .at(environment.contractAddress)
    .then(async (contract) => {
      // let getT = tronweb.trx
      //   .getTransactionInfo(
      //     "9ec68aba8c082c61173cbfb8bbf4582afa15d086b50b6f45a81e7689ab303722"
      //   )
      //   .then((val) => {
      //     console.log("here we go===========>", val);
      //   });

      // console.log("================>", getT);

      contract
        .getStationInfo(defaultAddress, 1)
        .call()
        .then((val) => {
          if (val[0]) {
            dispatch({
              type: "AUTH",
              payload: auth,
            });
          } else {
            dispatch({
              type: "AUTH_FAILED",
            });
          }
        });
    });
};

const binaryTree = {
  name: "",
  children: [
    {
      name: "",

      children: [
        {
          name: "",
        },
        {
          name: "",
        },
      ],
    },
    {
      name: "",

      children: [
        {
          name: "",
        },
        {
          name: "",
        },
      ],
    },
  ],
};

export const UserDataAction = (defaultAddress, tronweb) => async (dispatch) => {
  // console.log("called", auth);
  if (defaultAddress) {
    tronweb
      .contract()
      .at(environment.contractAddress)
      .then(async (contract) => {
        //user wallet address
        dispatch({
          type: "USER_WALLET_ADDRESS",
          payload: defaultAddress,
        });

        let DownLinde = [];
        contract
          .getdirects(defaultAddress)
          .call()
          .then(async (val) => {
            // console.log("this is  getdirects");
            dispatch({
              type: "DOWNLINE_COUNT",
              payload: val.arr,
            });

            //binary tree
            await contract
              .users(defaultAddress)
              .call()
              .then((val) => {
                binaryTree.name = val.registrationid.toNumber();
              });

            if (val.arr.length) {
              for (let a = 1; a >= 0; a--) {
                // console.log("=====>",a);
                let cond = a === 1 ? 0 : 1;
                // console.log(cond);
                if (val.arr[cond]) {
                  await contract
                    .users(tronweb.address.fromHex(val.arr[cond]))
                    .call()
                    .then((user) => {
                      binaryTree.children[
                        a
                      ].name = user.registrationid.toNumber();
                    });
                }

                if (val.arr.length) {
                  await contract
                    .getdirects(tronweb.address.fromHex(val.arr[1]))
                    .call()
                    .then(async (value) => {
                      if (value.arr[a]) {
                        await contract
                          .users(tronweb.address.fromHex(value.arr[a]))
                          .call()
                          .then((user) => {
                            binaryTree.children[0].children[
                              cond
                            ].name = user.registrationid.toNumber();
                          });
                      }
                    });

                  if (val.arr[0]) {
                    await contract
                      .getdirects(tronweb.address.fromHex(val.arr[0]))
                      .call()
                      .then(async (value) => {
                        if (value.arr[a]) {
                          await contract
                            .users(tronweb.address.fromHex(value.arr[a]))
                            .call()
                            .then((user) => {
                              binaryTree.children[1].children[
                                cond
                              ].name = user.registrationid.toNumber();
                            });
                        }
                      });
                  }
                }
              }
            }

            dispatch({
              type: "BINARY_TREE",
              payload: binaryTree,
            });

            // console.log("=====>",binaryTree);
          });

        contract
          .users(defaultAddress)
          .call()
          .then((val) => {
            dispatch({
              type: "WITHDRAW_ABLE",
              payload: tronweb.fromSun(val.withdrawable),
            });

            dispatch({
              type: "USERS_ID",
              payload: val.registrationid.toNumber(),
            });

            dispatch({
              type: "USERS_ID_FOR_INCOME",
              payload: val.registrationid.toNumber(),
            });

            dispatch({
              type: "LEVEL_REWARD",
              payload: tronweb.fromSun(val.LevelReward),
            });
            dispatch({
              type: "MATRIX_INCOME",
              payload: tronweb.fromSun(val.MatrixReward),
            });
            dispatch({
              type: "DIRECT_REFERRALS",
              payload: val.referredUsers.toNumber(),
            });
            dispatch({
              type: "LEVEL_INCOME",
              payload: tronweb.fromSun(val.LevelReward),
            });

            dispatch({
              type: "DIRECT_INCOME",
              payload: tronweb.fromSun(val.getdirects),
            });

          });

          // users to show the direct income
          await contract
          .users(defaultAddress)
          .call()
          .then((val)=>{
            // console.log("==========refIcome",val);
            dispatch({
              type:"REF_INCOME",
              dispatch:tronweb.fromSun(val.refincome)

                 })
          })

        //getUserDownline 
        await contract
          .getUserDownlineCount(defaultAddress)
          .call()
          .then((val) => {
            //  console.log("=========valofarr",val.arr[0].toNumber());
            const vaToNumber = val.arr.map(a => a.toNumber())
            const getUserDownLine = vaToNumber.reduce(
              (accumulator, currentValue) => accumulator + currentValue );
             
              dispatch({
                type:"GET_USERDOWNLINE",
                payload:getUserDownLine
              })
              
          });

        //contract
        dispatch({
          type: "CONTRACT",
          payload: contract,
        });

        //tronweb
        dispatch({
          type: "TRONWEB",
          payload: tronweb,
        });

        // business stations
        for (let i = 1; i <= 7; i++) {
          await contract
            .getStationInfo(defaultAddress, i)
            .call()
            .then((val) => {
              dispatch({
                type: `STATION_${i}`,
                payload: val[0],
              });
            });
        }

        //smart matrix

        //smart level 1
        await contract
          .getStationInfo(defaultAddress, 8)
          .call()
          .then((val) => {
            dispatch({
              type: "SMART_MATRIX_LEVEL_ONE",
              payload: val[0],
            });
          });

        //smart level 2
        await contract
          .getStationInfo(defaultAddress, 9)
          .call()
          .then((val) => {
            dispatch({
              type: "SMART_MATRIX_LEVEL_TWO",
              payload: val[0],
            });
          });

        //silver matrix

        //sliver level 1
        await contract
          .getStationInfo(defaultAddress, 10)
          .call()
          .then((val) => {
            dispatch({
              type: "SILVER_MATRIX_LEVEL_ONE",
              payload: val[0],
            });
          });

        //silver level 2
        await contract
          .getStationInfo(defaultAddress, 11)
          .call()
          .then((val) => {
            dispatch({
              type: "SILVER_MATRIX_LEVEL_TWO",
              payload: val[0],
            });
          });

        // gold matrix

        //gold level 1
        await contract
          .getStationInfo(defaultAddress, 12)
          .call()
          .then((val) => {
            dispatch({
              type: "GOLD_MATRIX_LEVEL_ONE",
              payload: val[0],
            });
          });

        //gold level 2
        await contract
          .getStationInfo(defaultAddress, 13)
          .call()
          .then((val) => {
            dispatch({
              type: "GOLD_MATRIX_LEVEL_TWO",
              payload: val[0],
            });
          });

        // Royal matrix

        //Royal level 1
        await contract
          .getStationInfo(defaultAddress, 14)
          .call()
          .then((val) => {
            dispatch({
              type: "ROYAL_MATRIX_LEVEL_ONE",
              payload: val[0],
            });
          });

        //Royal level 2
        await contract
          .getStationInfo(defaultAddress, 15)
          .call()
          .then((val) => {
            dispatch({
              type: "ROYAL_MATRIX_LEVEL_TWO",
              payload: val[0],
            });
          });

        // Crown matrix

        //Crown level 1
        await contract
          .getStationInfo(defaultAddress, 16)
          .call()
          .then((val) => {
            dispatch({
              type: "CROWN_MATRIX_LEVEL_ONE",
              payload: val[0],
            });
          });

        //Crown level 2
        await contract
          .getStationInfo(defaultAddress, 17)
          .call()
          .then((val) => {
            dispatch({
              type: "CROWN_MATRIX_LEVEL_TWO",
              payload: val[0],
            });
          });
      });
  }
};


export const smartMatrixAction = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .SMARTMATRIX(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(5000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const smartMatrixLevel2Action = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .SMARTMATRIX2(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(10000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const silverMatrixAction = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .SILVERMATRIX(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(50000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const silverMatrixLevel2Action = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .SILVERMATRIX2(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(100000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const goldMatrixAction = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .GOLDMATRIX(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(100000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const goldMatrixLevel2Action = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .GOLDMATRIX2(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(200000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const royalMatrixAction = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .ROYALMATRIX(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(500000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const royalMatrixLevel2Action = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .ROYALMATRIX2(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(1000000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const crownMatrixAction = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .CROWNMATRIX(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(5000000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const crownMatrixLevel2Action = () => async (dispatch, state) => {
  const { contract, userWalletAddress, tronWeb } = state().UserReducer;
  await contract
    .CROWNMATRIX2(userWalletAddress)
    .send({
      feeLimit: 100_000_000,
      callValue: state().UserReducer.tronWeb.toSun(10000000),
    })
    .then(() => {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb));
    });
};

export const LogoutAction = () => async (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
  localStorage.removeItem("isAuth");
  localStorage.removeItem("clickedForView");
  window.location.reload();
};
