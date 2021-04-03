import React from "react";
import svg from "../UI/ui/like.svg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

export default function Header() {
  const ToggleMenues = () => {
    let ele = document.getElementsByClassName("coinz-page-content-fullwidth");
    ele[0].style.opacity = "0.4";
    
    let doc = document.getElementById("coinz-side-menu");
   
    doc.style.display = "block";
    doc.style.left = "0";
  };

  const cloSEbar = () => {
    let ele = document.getElementsByClassName("coinz-page-content-fullwidth");
    ele[0].style.opacity = "1";
    let doc = document.getElementById("coinz-side-menu");

    
    doc.style.display = "none";
    doc.style.left = "-30";
  };

  return (
    <div className="home page-template page-template-templates page-template-template-full-width page-template-templatestemplate-full-width-php page page-id-4446 page-child parent-pageid-10 woocommerce-no-js wpb-js-composer js-comp-ver-5.4.7 vc_responsive">
      <div class="main-wrapper">
      <header id="header-06" class="header">
        <div id="sticky-wrapper" class="sticky-wrapper" >
        <div class="myNavbar">
        <div class="myContainer">
            <a href="#"><img id="navLogo" src="/assets/img/nav_logo.png" alt="" style={{width:"70%"}}/></a>
                <nav>
                    <ul>
                        <li>  
                         <Link
                         className=" btn1 btn-coinz" id="logBtn"
                              to="/login"
                              
                              title="Try Demo"
                            >
                              Login
                            </Link>
                          </li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <div  class="intro-text">
                        <div class="text-center yellowtext fa-3x font-weight-bold mb-3">Welcome to</div>
                        <div class="text-center">
                            <img src="/assets/img/logo-big.png" class="text-center img-fluid" alt= "" />
                        </div>
                      
                        <h1 >The first ever decentralized with unique booster</h1>
                        <p  >The best decentralized system enables you to multiple your TRON in a smart way.
                            Integration of smart contract with block chain technology ensures the genuine and
                            transparent system the genuine and transparent system</p>
                        {/* <div class="btn_video_wrapper text-center">
                            <a href="dashboard/register.html" class="btn btn-default btn-default-style text-center">JOIN
                                US</a>
                        </div> */}

                        <div  class="countdown_time">
                            <h3>Create an account with</h3>
                             
                            <div class="clock-countdown">
                                <div class="coundown-timer d-flex justify-content-center">
                                    <div class="single-counter d-flex flex-column">
                                        <h4><img src="/assets/img/token-pocket.png" /></h4>
                                        <span class="normal">TokenPocket<br /> (Android)</span>
                                    </div>
                                    <div class="single-counter  d-flex flex-column">
                                        <h4><span class="hours count-time gradient-color">
                                            <img src="/assets/img/tronwallet.png" /></span>
                                        </h4>
                                        <span class="normal">Tronwallet <br />(iOS)</span>
                                    </div>

                                    <div class="single-counter  d-flex flex-column">
                                        <h4><span class="hours count-time gradient-color">
                                            <img src="/assets/img/tronlink.png"  alt=" " /></span></h4>
                                        <span class="normal">Tronlink  <br />(Desktop)</span>
                                    </div>
                                </div>
                                <h3>TronPool Contract Address</h3>
                                <div class="count-time_btn">
                                    <a href="https://tronscan.org/#/contract/TFsN8zeTr38rUjbw2z1BBjkUpmTCZj2r96" title="" class="gradient-color" id="contractAddress">TFsN8zeTr38rUjbw2z1BBjkUpmTCZj2r96</a>
                                </div>
                            </div>
                        

                        </div>
                    </div>
                </div>
            </div>
            <span class="shape1 header-shape"><img src="/assets/img/header6_shape_1.png" alt="" /></span>
            <span class="shape2 header-shape"><img src="/assets/img/header6_shape_2.png" alt="" /></span>
            <span class="shape3 header-shape"><img src="/assets/img/header6_shape_3.png" alt="" /></span>
            <span class="shape4 header-shape "><img src="/assets/img/header6_shape_4.png" alt="" /></span>
            <span class="shape5 header-shape"><img src="/assets/img/header6_shape_5.png" alt="" /></span>
            <span class="shape6 header-shape"><img src="/assets/img/header6_shape_6.png" alt="" /></span>

            <span class="bubble1 header-shape"><img src="images/particals_icon/fixed1.png" alt="" /></span>
            <span class="bubble2 header-shape"><img src="images/particals_icon/fixed1.png" alt="" /></span>
            <span class="bubble3 header-shape"><img src="images/particals_icon/fixed2.png" alt="" /></span>
            <span class="bubble4 header-shape"><img src="images/particals_icon/fixed4.png" alt="" /></span>

            <div id="particles1-js" class="particles"><canvas class="particles-js-canvas-el" style={{width: "100%", height: "100%"}}></canvas></div>
    </div>
</header>
    {/* End of Header Section */}

     {/* section */}
     <section id="about_cryptonic_06">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 padding-none text-center">
                    <div class="about_cryptonic-content">
                        <h2 class="wow fadeInUp yellowtext" data-animate="fadeInUp" data-delay="0.2s" style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <span class="yellowtext">Smart contract with block chain technology</span></h2>
                        <p class="wow fadeInUp" data-animate="fadeInUp" data-delay="0.3s" style={{visibility: "visible", animationName: "fadeInUp"}}>Smart contract is a computer
                            protocol intended to digitally facilitate, verify or enforce the negotiation or performance
                            of a contract. Smart contract allow the performance of credible transactions without third
                            parties.</p>
                    </div>
                </div>
            </div>
        </div>
        <span class="shape1 header-shape"><img src="images/shape/home_6/about-light-1.png" alt=""/></span>
        <span class="shape2 header-shape"><img src="images/shape/home_6/about-light-2.png" alt=""/></span>
        <span class="bubble1 header-shape"><img src="images/particals_icon/fixed1.png" alt=""/></span>
        <span class="bubble2 header-shape"><img src="images/particals_icon/fixed2.png" alt=""/></span>
        <span class="bubble3 header-shape"><img src="images/particals_icon/fixed3.png" alt=""/></span>
        <div id="particles3-js" class="particles"></div>
    </section>
    
    <section id="best_feature_06">
      <Fade bottom >

        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="sub-title">
                        <h6 style={{fontSize:"2rem"}} >Features</h6>
                        <h2 style={{color:"#d0d03e"}}>TronPool smart contract features</h2>
                    </div>
                </div>
            </div>
            <div class="row feature_items d-flex justify-content-between">
                <div class="col mx-1">
                    <div class="bluebox">
                        <h3>Low investment high returns</h3>
                        <img src="/assets/img/ethereum.png" class="img-fluid" />
                        <p>Invest a small amount and get income repeatedly through rebirth in all levels</p>
                    </div>
                </div>

                <div class="col mx-1">
                    <div class="bluebox">
                        <h3>Referral not compulsory</h3>
                        <img src="/assets/img/referral.png" class="img-fluid" />
                        <p> No compulsory referral for earnings and withdrawal or any other.</p>
                    </div>
                </div>

                <div class="col mx-1">
                    <div class="bluebox">
                        <h3>One time Algorithm</h3>
                        <img src="/assets/img/algorithm.png" class="img-fluid" />
                        <p>Compensations plan and other derived conditions cannot be changed after launching.</p>
                    </div>
                </div>

                <div class="col mx-1">
                    <div class="bluebox">
                        <h3>Transparent</h3>
                        <img src="/assets/img/transparent.png" class="img-fluid" />
                        <p>All transactions can be verified on the block chain. Every user can verify their individual
                            transactions and statistics of company is completely transparent.
                        </p>
                    </div>
                </div>
                <div class="col mx-1">
                    <div class="bluebox">
                        <h3>Peer to Peer payments</h3>
                        <img src="/assets/img/peertopeer.png" class="img-fluid" />
                        <p> Get your earnings directly into your personal wallet without any interruption</p>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
       
        <span class="shape1 header-shape"><img src="/assets/img/feature-1.png" alt="" /></span>
        <div id="particles4-js" class="particles"></div>
    </section>
          {/* section end */}

        {/* <div id="header">
          <div id="header-ticker-holder" class="hidden-sm hidden-xs">
            <div class="container">
              <div id="header-ticker-wrapper"></div>
            </div>
          </div>
          <div id="header-nav-holder" class="coinzfactory-default">
            <div class="header-nav header-nav-default header-nav-fixed">
              <div class="container">
                <div class="logo-main">
                  <a class="logo-wrapper">
                    <img src="logo.png" class="lgo" />
                  </a>
                </div>

                <div class="pull-right">
                   <div class="coinz-menu-wrapper">
                    <a
                      href="#coinz-side-menu"
                      class="coinz-trigger icon-mobile-menu "
                      id="mobile-menu"
                      onClick={ToggleMenues}
                    >
                      <span class="icon-wrap coinz-middle-line"></span>
                      <span class="icon-wrap coinz-top-line"></span>
                      <span class="icon-wrap coinz-bottom-line"></span>
                    </a>
                  </div>  
                </div>
                <div class="">
                  <ul class="">
                    <li class=" ">
                       <a href="#" className="menu-button-4458 ">
                         <span>Login</span>
                       </a>
                    </li>
                      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children   td-menu-item-4458">
                      <a class="menu-button-4458 ">
                        <span>About Tronsquire</span>
                      </a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4469">
                      <a class="menu-button-4469 ">
                        <span>Faq</span>
                      </a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4495">
                      <a class="menu-button-4495 ">
                        <span>ROAD MAP</span>
                      </a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4495">
                      <a class="menu-button-4495 ">
                        <span>WHITEPAPPERS</span>
                      </a>
                    </li>  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
         */}
        <div class="coinz-content-wrapper">
          <div class="">
            <div class="coinz-page-content-fullwidth  " onClick={cloSEbar}>
              <div class="container">
                <div class="row" style={{ marginTop: "2rem" }}>
                  <div class="mobile-center col-lg-6 col-md-12  vc_col-sm-6">
                    <div class=" ">
                      <Fade top>
                        <div class="wpb_wrapper">
                          <div class="wpb_text_column wpb_content_element  mobile-center">
                            <div class="wpb_wrapper">
                              <h3
                                style={{
                                  color: "#d0d03e",
                                  textTransform: "uppercase",
                                }}
                              >
                                SMART CONTRACT BASED SYSTEM{" "}
                              </h3>
                            </div>
                          </div>
                          <div class="wpb_text_column wpb_content_element  mobile-center">
                            <div class="wpb_wrapper">
                              <h4 style={{ color: "#d0d03e" }}>
                                Marketplace with blockchain infrastructure
                              </h4>
                            </div>
                          </div>
                          <div class="wpb_text_column wpb_content_element  ">
                            <div class="wpb_wrapper">
                              <p style={{ color: "#d1caec" }}>
                                Tronsquire has developed system by using
                                Advanced Technology and Tron Blockchain. System
                                is much Simpler, more Profitable, Secured, and
                                100% Transparent, tron is one of the largest
                                blockchain-based operating systems in the world.{" "}
                              </p>
                            </div>
                          </div>
                          <div class="coinz-button-container coinz-button-align-inline coinz-button-icon-align-left coinz-button-style-default coinz-button-size-small  ">
                            {/* <Link
                              to="/login"
                              class="btn-coinz"
                              title="Try Demo"
                              style={{
                                borderRadius: "100px",
                                textAlign: "left",
                              }}
                            >
                              Login
                            </Link> */}

                          </div>
                          {/* <div class="coinz-button-container coinz-button-align-inline coinz-button-icon-align-left coinz-button-style-default coinz-button-size-small ">
                            <a
                              class="btn-coinz"
                              href="auth/auth_register"
                              target="_blank"
                              title="Token Distribution"
                              style={{
                                borderRadius: "100px",
                                textAlign: "left",
                              }}
                            >
                              Join Us
                            </a>
                          </div> */}
                          {/* <div class="coinz-button-container coinz-button-align-inline coinz-button-icon-align-left coinz-button-style-default coinz-button-size-small ">
                            <a
                              class="btn-coinz"
                              href="auth/view"
                              target="_blank"
                              title="Token Distribution"
                              style={{
                                borderRadius: "100px",
                                textAlign: "left",
                              }}
                            >
                              View
                            </a>
                          </div> */}
                        </div>
                      </Fade>
                    </div>
                  </div>

                  <div
                    class="col-lg-6 col-md-12 order-first   vc_column_container vc_col-sm-6"
                    style={{ position: "relative", bottom: "6rem" }}
                  >
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="wpb_single_image wpb_content_element vc_align_left   header-image-alt">
                          <Fade right>
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey">
                                <img
                                  style={{ minWidth: "550px", paddingTop: 60 }}
                                  src="wp-content/illustration-1(2).svg"
                                  class="vc_single_image-img attachment-full"
                                  alt=""
                                />
                              </div>
                            </figure>
                          </Fade>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="vc_row-full-width "></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  data-vc-stretch-content="true"
                  class="vc_row wpb_row vc_row-fluid  vc_row-no-padding"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="wave_style_5fb75d069edff coinz-wave-bg-bottom devider-position-bottom">
                          <div class="coinz-wave-bg-content-bottom">
                            {/* {svg} */}
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns
                              path
                              class="st0"
                              d="M1598.8,17.3c-127.3,40.6-264.8,62.8-408.9,65.9C1060.6,86,920.9,73.5,774.7,46c-37.5-7.1-74.5-12.4-113-16.4 c-110.4-12.7-223.5-13.3-336-1.8C215.9,39.1,106.5,61.9,0.6,95.5l-0.3,0.1v38.1h1599.2V17.1L1598.8,17.3z"
                            ></svg>
                            <path
                              class="st1"
                              d="M1599.9,54.5c-130.1,34.4-270,50.3-415.8,47.1c-133.7-2.9-274-21.8-417-56.1c-37.1-8.9-73.8-16.1-112-22 C545,5.2,433.5-1.3,323.7,4.1C215.8,9.4,106.9,26.4-0.1,54.5l-0.4,0.1v77.2h1601V54.4L1599.9,54.5z"
                            ></path>
                            {/* </svg> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width vc_clearfix"></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid  vc_row-has-fill"
                ></div>
                <div class="vc_row-full-width "></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid  vc_row-has-fill vc_row-o-equal-height vc_row-flex"
                >
                  <div class="wpb_column  vc_col-sm-12">
                    <div class=" ">
                      <div class="wpb_wrapper">
                        <div class="vc_row wpb_row vc_inner vc_row-fluid  vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                          <div class="wpb_column  vc_col-sm-5 ">
                            <div class=" ">
                              <div class="wpb_wrapper">
                                <Fade left>
                                  {" "}
                                  <div class="wpb_single_image">
                                    <figure class="">
                                      <div class="">
                                        <img
                                          width="735"
                                          height="849"
                                          src="wp-content/tronq.png"
                                          alt=""
                                        />
                                      </div>
                                    </figure>
                                  </div>
                                </Fade>
                              </div>
                            </div>
                          </div>
                          <div class="  vc_col-sm-7">
                            <div class="">
                              <div>
                                <div class="">
                                  <div>
                                    <h2 style={{ color: "#d0d03e" }}>
                                      What is Tronsquire Smart Contract?
                                    </h2>
                                  </div>
                                </div>
                                {/* <style>
                                  #coinz-devider-5fb75d06ac293.coinz-devider-wrapper svg .st0 {
                                    fill: #f53e82 !important;
                                                            }
                                                        </style> */}
                                <div
                                  id="coinz-devider-5fb75d06b1102"
                                  class=" coinz-devider-wrapper coinz-devider-version-3 coinz-devider-align-left"
                                >
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 184 36"
                                    style={{
                                      enableBackground: "new 0 0 184 36",
                                    }}
                                    space="preserve"
                                    
                                  >
                                    <g>
                                      <path
                                        class="st0"  d="M61.6,12c-2.9,0-5.4,2.1-5.8,4.9H-0.5v2h56.3c0.5,2.8,2.9,4.9,5.8,4.9c3.3,0,5.9-2.7,5.9-5.9	C67.5,14.7,64.9,12,61.6,12z" />
                                      <path
                                        class="st0"
                                        d="M183.9,16.9h-56.8c-0.5-2.8-2.9-4.9-5.8-4.9c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9  	c2.9,0,5.4-2.1,5.8-4.9h56.8V16.9z"
                                      />
                                      <path
                                        class="st0"
                                        d="M105.1,10L105.1,10C105.1,10,105.1,9.9,105.1,10c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0,0,0,0
					c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0
					c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0L92.3,1.1
					c0,0-0.1,0-0.1,0C92.1,1,92.1,1,92,1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0s-0.1,0-0.1,0
					c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0L78.5,8.7c0,0,0,0,0,0c0,0,0,0,0,0
					c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0
					c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0
					c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0v15.8c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1
					c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
					c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0l12.2,7.6c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0.1,0c0,0,0,0,0,0
					c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0
					c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0l12.2-7.6c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1
					c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1
					c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0V10C105.1,10,105.1,10,105.1,10z M91.5,4.1l9.4,5.9l-9.4,6.1L82.1,10L91.5,4.1z M80.8,12.7l9.2,6
					v11.9l-9.2-5.7V12.7z M93,18.7l9.2-6v12.2L93,30.7V18.7z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                <div class="wpb_text_column wpb_content_element   ">
                                  <div class="wpb_wrapper">
                                    <p style={{ color: "#d1caec" }}>
                                      Using Tron Blockchain Technology We Have
                                      Created a Business with 100% Transparency
                                      by Using Smart Contract Technology!{" "}
                                    </p>

                                    <p style={{ color: "#d1caec" }}>
                                      The tronsquire Smart Contracts are Public
                                      and Can Be Viewed By Anyone Directly on
                                      the Blockchain!{" "}
                                    </p>

                                    <p style={{ color: "#d1caec" }}>
                                      Most Importantly it Can Never Be Changed!
                                      tronsquire is the King of Smart Contracts
                                      and the best of the best when it comes to
                                      our programming, marketing, and most
                                      importantly our community!
                                    </p>
                                  </div>
                                </div>
                                <div class="coinz-button-container coinz-button-align-left coinz-button-icon-align-right coinz-button-style-default coinz-button-size-small ">
                                  {/* <a class="btn-coinz" onmouseenter="" onmouseleave=""  title="Learn More" style="border-radius: 100px; text-align: left;">Learn More<i class='fa fa-chevron-right'></i></a> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width "></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid  vc_row-has-fill vc_row-o-equal-height vc_row-flex"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="vc_row wpb_row vc_inner vc_row-fluid  vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                          <div class="wpb_column vc_column_container vc_col-sm-7 vc_col-has-fill">
                            <div class="vc_column-inner ">
                              <Fade right>
                                <div
                                  class="wpb_wrapper"
                                  style={{ paddingLeft: "1rem" }}
                                >
                                  <div class="wpb_text_column wpb_content_element  ">
                                    <div class="wpb_wrapper">
                                      <h2 style={{ color: "#d0d03e" }}>
                                        HOW DOES TRONSQUIRE WORK{" "}
                                      </h2>
                                    </div>
                                  </div>

                                  <div
                                    id="coinz-devider-5fb75d06b1102"
                                    class=" coinz-devider-wrapper coinz-devider-version-3 coinz-devider-align-left"
                                  >
                                    <svg
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 184 36"
                                      style={{
                                        enableBackground: "new 0 0 184 36",
                                      }}
                                      space="preserve"
                                    >
                                      <g>
                                        <path
                                          class="st0"
                                          d="M61.6,12c-2.9,0-5.4,2.1-5.8,4.9H-0.5v2h56.3c0.5,2.8,2.9,4.9,5.8,4.9c3.3,0,5.9-2.7,5.9-5.9
					C67.5,14.7,64.9,12,61.6,12z"
                                        />
                                        <path
                                          class="st0"
                                          d="M183.9,16.9h-56.8c-0.5-2.8-2.9-4.9-5.8-4.9c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9  
					c2.9,0,5.4-2.1,5.8-4.9h56.8V16.9z"
                                        />
                                        <path
                                          class="st0"
                                          d="M105.1,10L105.1,10C105.1,10,105.1,9.9,105.1,10c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0,0,0,0
					c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0
					c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0L92.3,1.1
					c0,0-0.1,0-0.1,0C92.1,1,92.1,1,92,1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0s-0.1,0-0.1,0
					c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0L78.5,8.7c0,0,0,0,0,0c0,0,0,0,0,0
					c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0
					c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0
					c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0v15.8c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1
					c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
					c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0l12.2,7.6c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0.1,0c0,0,0,0,0,0
					c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0
					c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0l12.2-7.6c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1
					c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1
					c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0V10C105.1,10,105.1,10,105.1,10z M91.5,4.1l9.4,5.9l-9.4,6.1L82.1,10L91.5,4.1z M80.8,12.7l9.2,6
					v11.9l-9.2-5.7V12.7z M93,18.7l9.2-6v12.2L93,30.7V18.7z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div class="wpb_text_column wpb_content_element  ">
                                    <div class="wpb_wrapper">
                                      <p style={{ color: "#d1caec" }}>
                                        TRON BLOCKCHAIN BASED Verified,100%
                                        Decentralized and worldwide program
                                        allow everyone to join and make
                                        unlimited TRX . All commissions are
                                        distributed real time and instantly
                                        without involving any third party.
                                        tronsquire MATRIX have THREE Types of
                                        Program simultaneously running to
                                        generate maximum profit.{" "}
                                      </p>

                                      <p style={{ color: "#d1caec" }}>
                                        A smart contract is a self-executing
                                        contract with the terms of the agreement
                                        between buyer and seller being directly
                                        written into lines of code. The code and
                                        the agreements contained therein exist
                                        across a distributed, decentralized
                                        blockchain network. The code controls
                                        the execution, and transactions are
                                        trackable and irreversible.
                                      </p>
                                    </div>
                                  </div>
                                  <div class="coinz-button-container coinz-button-align-left coinz-button-icon-align-right coinz-button-style-default coinz-button-size-small ">
                                    {/* <a class="btn-coinz" onmouseenter="" onmouseleave=""  title="Learn More" style="border-radius: 100px; text-align: left;">Learn More<i class='fa fa-chevron-right'></i></a>--> */}
                                  </div>
                                </div>
                              </Fade>
                            </div>
                          </div>
                          <div class="wpb_column vc_column_container vc_col-sm-5 vc_col-has-fill">
                            <Fade left>
                              <div class="vc_column-inner ">
                                <div class="wpb_wrapper">
                                  <div class="coinz-svg-container">
                                    <img src="wp-content/trx.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </Fade>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width "></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid  vc_row-has-fill"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="vc_row wpb_row vc_inner vc_row-fluid ">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="">
                                  <div class="wpb_wrapper">
                                    <h2
                                      style={{
                                        textAlign: "center",
                                        color: "#d0d03e",
                                      }}
                                    >
                                      Benefits
                                    </h2>
                                  </div>
                                </div>

                                <div
                                  id="coinz-devider-5fb75d06b6524"
                                  class=" coinz-devider-wrapper coinz-devider-version-3 coinz-devider-align-centered"
                                >
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 184 36"
                                    style={{
                                      enableBackground: "new 0 0 184 36",
                                    }}
                                    space="preserve"
                                  >
                                    <g>
                                      <path
                                        class="st0"
                                        d="M61.6,12c-2.9,0-5.4,2.1-5.8,4.9H-0.5v2h56.3c0.5,2.8,2.9,4.9,5.8,4.9c3.3,0,5.9-2.7,5.9-5.9
					C67.5,14.7,64.9,12,61.6,12z"
                                      />
                                      <path
                                        class="st0"
                                        d="M183.9,16.9h-56.8c-0.5-2.8-2.9-4.9-5.8-4.9c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9
					c2.9,0,5.4-2.1,5.8-4.9h56.8V16.9z"
                                      />
                                      <path
                                        class="st0"
                                        d="M105.1,10L105.1,10C105.1,10,105.1,9.9,105.1,10c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0,0,0,0
					c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0
					c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0L92.3,1.1
					c0,0-0.1,0-0.1,0C92.1,1,92.1,1,92,1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0s-0.1,0-0.1,0
					c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0L78.5,8.7c0,0,0,0,0,0c0,0,0,0,0,0
					c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0
					c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0
					c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0v15.8c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1
					c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
					c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0l12.2,7.6c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0.1,0c0,0,0,0,0,0
					c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0
					c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0l12.2-7.6c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1
					c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1
					c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0V10C105.1,10,105.1,10,105.1,10z M91.5,4.1l9.4,5.9l-9.4,6.1L82.1,10L91.5,4.1z M80.8,12.7l9.2,6
					v11.9l-9.2-5.7V12.7z M93,18.7l9.2-6v12.2L93,30.7V18.7z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="vc_row wpb_row vc_inner vc_row-fluid"
                          style={{ paddingLeft: "1rem" }}
                        >
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-icon-box coinz-icon-box-centered coinz-icon-box-style-boxed coinz-icon-box-style-boxed-colored-bg ">
                                  <div class="coinz-icon-box-icon">
                                    <i class="vc_li vc_li-banknote"></i>{" "}
                                  </div>
                                  <div class="coinz-icon-box-content">
                                    <h4
                                      style={{
                                        textAlign: "left",
                                        color: "#d0d03e",
                                      }}
                                    >
                                      100% Decentralized
                                    </h4>
                                    <p style={{ color: "#d1caec" }}>
                                      tronsquire is a peer to peer matrix
                                      platform. All payments go directly to the
                                      members! You will NEVER have a company
                                      mismanage your funds!.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-icon-box coinz-icon-box-centered coinz-icon-box-style-boxed coinz-icon-box-style-boxed-colored-bg ">
                                  <div class="coinz-icon-box-icon">
                                    <i class="vc_li vc_li-search"></i>{" "}
                                  </div>
                                  <div class="coinz-icon-box-content">
                                    <h4
                                      style={{
                                        textAlign: "left",
                                        color: "#d0d03e",
                                      }}
                                    >
                                      Fully Automation
                                    </h4>
                                    <p style={{ color: "#d1caec" }}>
                                      tronsquire is fully autonomous and cannot
                                      be hacked as it runs on a fully verified
                                      smart contract.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-icon-box coinz-icon-box-centered coinz-icon-box-style-boxed coinz-icon-box-style-boxed-colored-bg ">
                                  <div class="coinz-icon-box-icon">
                                    <i class="vc_li vc_li-like"></i>{" "}
                                  </div>
                                  <div class="coinz-icon-box-content">
                                    <h4
                                      style={{
                                        textAlign: "left",
                                        color: "#d0d03e",
                                      }}
                                    >
                                      Anonymity
                                    </h4>
                                    <p style={{ color: "#d1caec" }}>
                                      We do not collect any of your personal
                                      information during the signup process.
                                      There is no KYC information collected
                                      ever. This is your business and your
                                      company.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="vc_row wpb_row vc_inner vc_row-fluid"
                          style={{ paddingLeft: "1rem" }}
                        >
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-icon-box coinz-icon-box-centered coinz-icon-box-style-boxed coinz-icon-box-style-boxed-colored-bg ">
                                  <div class="coinz-icon-box-icon">
                                    <i class="vc_li vc_li-megaphone"></i>{" "}
                                  </div>
                                  <div class="coinz-icon-box-content">
                                    <h4
                                      style={{
                                        textAlign: "left",
                                        color: "#d0d03e",
                                      }}
                                    >
                                      100% Transparency
                                    </h4>
                                    <p style={{ color: "#d1caec" }}>
                                      All transactions will be verifiable on the
                                      blockchain. You can view all of the
                                      transactions from ALL members, so you know
                                      exactly how the company is growing.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-icon-box coinz-icon-box-centered coinz-icon-box-style-boxed coinz-icon-box-style-boxed-colored-bg ">
                                  <div class="coinz-icon-box-icon">
                                    <i class="vc_li vc_li-world"></i>{" "}
                                  </div>
                                  <div class="coinz-icon-box-content">
                                    <h4
                                      style={{
                                        textAlign: "left",
                                        color: "#d0d03e",
                                      }}
                                    >
                                      Referral program
                                    </h4>
                                    <p style={{ color: "#d1caec" }}>
                                      tronsquire smart contract set 2 tiers of
                                      referral rewards, which are 5%, 1%. The
                                      referral rewards are distributed to your
                                      balance automatically and you can withdraw
                                      at anytime.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-icon-box coinz-icon-box-centered coinz-icon-box-style-boxed coinz-icon-box-style-boxed-colored-bg ">
                                  <div class="coinz-icon-box-icon">
                                    <i class="vc_li vc_li-fire"></i>{" "}
                                  </div>
                                  <div class="coinz-icon-box-content">
                                    <h4
                                      style={{
                                        textAlign: "left",
                                        color: "#d0d03e",
                                      }}
                                    >
                                      Safe and reliable project
                                    </h4>
                                    <p style={{ color: "#d1caec" }}>
                                      tronsquire runs automatically on the
                                      blockchain and its smart contract is
                                      uploaded to the TRON blockchain. No one is
                                      able to edit or delete the smart
                                      contract,nor influence its autonomous
                                      operation. The dividends are also
                                      automatically paid through the smart
                                      contract.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width "></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  data-vc-stretch-content="true"
                  class="vc_row wpb_row vc_row-fluid  vc_row-no-padding"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="wave_style_5fb75d06bcdae coinz-wave-bg-bottom devider-position-top">
                          <div class="coinz-wave-bg-content-bottom">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 1600 130"
                              style={{ fill: "#28376b" }}
                              space="preserve"
                              preserveAspectRatio="none"
                            >
                              <path
                                style={{ fill: "#28376b" }}
                                class="st0"
                                d="M1598.8,17.3c-127.3,40.6-264.8,62.8-408.9,65.9C1060.6,86,920.9,73.5,774.7,46c-37.5-7.1-74.5-12.4-113-16.4 c-110.4-12.7-223.5-13.3-336-1.8C215.9,39.1,106.5,61.9,0.6,95.5l-0.3,0.1v38.1h1599.2V17.1L1598.8,17.3z"
                              ></path>
                              <path
                                style={{ fill: "#28376b" }}
                                class="st1"
                                d="M1599.9,54.5c-130.1,34.4-270,50.3-415.8,47.1c-133.7-2.9-274-21.8-417-56.1c-37.1-8.9-73.8-16.1-112-22 C545,5.2,433.5-1.3,323.7,4.1C215.8,9.4,106.9,26.4-0.1,54.5l-0.4,0.1v77.2h1601V54.4L1599.9,54.5z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width "></div>

                <div class="vc_row-full-width "></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  data-vc-stretch-content="true"
                  class="vc_row wpb_row vc_row-fluid  vc_row-no-padding"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="wave_style_5fb75d06c35cd coinz-curve-bg-bottom devider-position-bottom">
                          <div class="coinz-curve-bg-content-bottom">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 1600 163"
                              style={{ fill: "#28376b" }}
                              space="preserve"
                              preserveAspectRatio="none"
                            >
                              <path
                                class="st0"
                                d="M835.7,148C530.2,148,244.4,124.5,0,83.5V163h1600V94.8C1372,128.8,1111.9,148,835.7,148z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width "></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class=""
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="vc_row wpb_row vc_inner vc_row-fluid ">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="wpb_text_column wpb_content_element  coinz-section-title">
                                  <div class="wpb_wrapper">
                                    {/* <!--<h2 style="text-align: center; color: #f7d8d8;">Token Allocation</h2>--> */}
                                  </div>
                                </div>

                                <div
                                  id="coinz-devider-5fb75d06c6ddf"
                                  class="  coinz-devider-wrapper coinz-devider-version-3 coinz-devider-align-centered"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width "></div>
                <div
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid  vc_row-has-fill"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="vc_row wpb_row vc_inner ">
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-progress-circle">
                                  <span class="coinz-progress-circle-precentage">
                                    <span class="count"></span>
                                  </span>
                                  <span class="progress-block">
                                    <svg
                                      class="progress-block-circle"
                                      viewBox="-10 -10 220 220"
                                    >
                                      <g
                                        fill="none"
                                        stroke-width="8"
                                        transform="translate(100,100)"
                                      >
                                        <path
                                          d="M 0,-100 A 100,100 0 0,1 86.6,-50"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M 86.6,-50 A 100,100 0 0,1 86.6,50"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M 86.6,50 A 100,100 0 0,1 0,100"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M 0,100 A 100,100 0 0,1 -86.6,50"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M -86.6,-50 A 100,100 0 0,1 0,-100"
                                          stroke="#f55a4e"
                                        />
                                      </g>
                                    </svg>
                                    <svg viewBox="-10 -10 220 220">
                                      <path
                                        d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
                                        stroke-dashoffset="157.25"
                                        stroke="#191b2a"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="wpb_text_column wpb_content_element  ">
                                  <div class="wpb_wrapper">
                                    <h3
                                      class="header-title"
                                      style={{ color: " #d0d03e" }}
                                    >
                                      High Throughput
                                    </h3>
                                    <p style={{ color: "#d1caec" }}>
                                      High throughput is achieved by improving
                                      the TPS in TRON, which has surpassed
                                      Bitcoin and Ethereum, to a daily-use
                                      practical degree.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-progress-circle">
                                  <span class="coinz-progress-circle-precentage">
                                    <span class="count"></span>
                                  </span>
                                  <span
                                    class="progress-block"
                                    data-name=""
                                    data-percent="39%"
                                  >
                                    <svg
                                      class="progress-block-circle"
                                      viewBox="-10 -10 220 220"
                                    >
                                      <g
                                        fill="none"
                                        stroke-width="8"
                                        transform="translate(100,100)"
                                      >
                                        <path
                                          d="M 0,-100 A 100,100 0 0,1 86.6,-50"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M 86.6,-50 A 100,100 0 0,1 86.6,50"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M 86.6,50 A 100,100 0 0,1 0,100"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M 0,100 A 100,100 0 0,1 -86.6,50"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
                                          stroke="#f55a4e"
                                        />
                                        <path
                                          d="M -86.6,-50 A 100,100 0 0,1 0,-100"
                                          stroke="#f55a4e"
                                        />
                                      </g>
                                    </svg>
                                    <svg viewBox="-10 -10 220 220">
                                      <path
                                        d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
                                        stroke-dashoffset="245.31"
                                        stroke="#191b2a"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="wpb_column vc_column_container vc_col-sm-8">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="wpb_text_column wpb_content_element  ">
                                  <div class="wpb_wrapper">
                                    <h3
                                      class="header-title"
                                      style={{ color: " #d0d03e" }}
                                    >
                                      High availability
                                    </h3>
                                    <p style={{ color: "#d1caec" }}>
                                      More reliable network structure, user
                                      asset, intrinsic value and a higher degree
                                      of decentralization consensus come with an
                                      improved rewards distribution mechanism.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-progress-circle">
                                  <span class="coinz-progress-circle-precentage">
                                    <span class="count"></span>
                                  </span>
                                  <span
                                    class="progress-block"
                                    data-name=""
                                    data-percent="10%"
                                  >
                                    <svg
                                      class="progress-block-circle"
                                      viewBox="-10 -10 220 220"
                                    >
                                      <g
                                        fill="none"
                                        stroke-width="8"
                                        transform="translate(100,100)"
                                      >
                                        <path
                                          d="M 0,-100 A 100,100 0 0,1 86.6,-50"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M 86.6,-50 A 100,100 0 0,1 86.6,50"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M 86.6,50 A 100,100 0 0,1 0,100"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M 0,100 A 100,100 0 0,1 -86.6,50"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M -86.6,-50 A 100,100 0 0,1 0,-100"
                                          stroke="#fa0e30"
                                        />
                                      </g>
                                    </svg>
                                    <svg viewBox="-10 -10 220 220">
                                      <path
                                        d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
                                        stroke-dashoffset="62.9"
                                        stroke="#191b2a"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="wpb_column vc_column_container vc_col-sm-8">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="wpb_text_column wpb_content_element ">
                                  <div class="wpb_wrapper">
                                    <h3
                                      class="header-title"
                                      style={{ color: " #d0d03e" }}
                                    >
                                      High-scalability
                                    </h3>
                                    <p style={{ color: "#d1caec" }}>
                                      Applications are given a wider variety of
                                      ways to be deployed in TRON because of its
                                      scalability and highly effective smart
                                      contract. It can support enormous numbers
                                      of users.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                          <div class="wpb_column vc_column_container vc_col-sm-4">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="coinz-progress-circle">
                                  <span class="coinz-progress-circle-precentage">
                                    <span class="count"></span>
                                  </span>
                                  <span
                                    class="progress-block"
                                    data-name=""
                                    data-percent="10%"
                                  >
                                    <svg
                                      class="progress-block-circle"
                                      viewBox="-10 -10 220 220"
                                    >
                                      <g
                                        fill="none"
                                        stroke-width="8"
                                        transform="translate(100,100)"
                                      >
                                        <path
                                          d="M 0,-100 A 100,100 0 0,1 86.6,-50"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M 86.6,-50 A 100,100 0 0,1 86.6,50"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M 86.6,50 A 100,100 0 0,1 0,100"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M 0,100 A 100,100 0 0,1 -86.6,50"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
                                          stroke="#fa0e30"
                                        />
                                        <path
                                          d="M -86.6,-50 A 100,100 0 0,1 0,-100"
                                          stroke="#fa0e30"
                                        />
                                      </g>
                                    </svg>
                                    <svg viewBox="-10 -10 220 220">
                                      <path
                                        d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
                                        stroke-dashoffset="62.9"
                                        stroke="#191b2a"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="wpb_column vc_column_container vc_col-sm-8">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper">
                                <div class="wpb_text_column wpb_content_element  ">
                                  <div class="wpb_wrapper">
                                    <h3
                                      class="header-title"
                                      style={{ color: " #d0d03e" }}
                                    >
                                      Generate Profit
                                    </h3>
                                    <p style={{ color: "#d1caec" }}>
                                      Referral bonus that pays up to 100 levels.
                                      Transparently programmed using a Smart
                                      Contract created on the Tron Blockchain
                                      network. All transactions made are valid.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width "></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid  vc_row-has-fill"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div class="vc_row wpb_row vc_inner vc_row-fluid ">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner ">
                              <div class="wpb_wrapper"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width "></div>
                <div class="coinz-page-comments"></div>
              </div>
            </div>
          </div>
                                      {/* section */}
          <section id="best_feature_06">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                  <Fade left>
                    <div class="sub-title">
                        <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s" style={{visibility: "visible",  animationDuration: "2s", animationDelay: "0.3s", animationName: "fadeInUp" , color:"#d0d03e",textAlign:"center"}}>Booster</h2> 
                         <p class="text-white" style={{textAlign:'center'}}>Unique booster concept enables your autofill income quicker and keep
                            moving the matrix.</p>
                    </div>
                </Fade>
                </div>
            </div>
            <Fade bottom>
            <div class="row">
                <div class="col-md-12 text-center">
                  <img src="/assets/img/booster.png" class="img-fluid" /></div>
            </div>
            </Fade>
        </div>
        <div id="particles6-js" class="particles"></div>
    </section>

          <div class="coinz-page-footer">
            <div
              class="site-info"
              style={{ backgroundImage: "url(wp-content/title-bg.jpg)" }}
            >
              <div class="footer-header">
                <a href="index.php">
                  <img src="wp-content/tron.png" />
                </a>
              </div>
              <div>
                {" "}
                Contract Address:{" "}
                <a
                  class="nav-link"
                  href="https://tronscan.org/#/contract/TDsczBuxHM3YhAwpyRyZgUaCbPTNwcwsPZ/"
                  target="_blank"
                >
                  TDsczBuxHM3YhAwpyRyZgUaCbPTNwcwsPZ
                </a>
              </div>
              <div class="footer-social">
                <a class="link-twitter" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    space="preserve"
                    width="38"
                    height="38"
                  >
                    <circle cx="50" cy="50" r="50"></circle>
                    <path d="M71.3,39.4c-1.6,0.7-3.3,1.2-5,1.4c1.8-1.1,3.2-2.8,3.8-4.8c-1.7,1-3.6,1.7-5.6,2.1c-1.6-1.7-3.9-2.8-6.4-2.8 c-4.8,0-8.8,3.9-8.8,8.8c0,0.7,0.1,1.4,0.2,2c-7.3-0.4-13.7-3.9-18-9.1c-0.8,1.3-1.2,2.8-1.2,4.4c0,3,1.5,5.7,3.9,7.3 c-1.4,0-2.8-0.4-4-1.1c0,0,0,0.1,0,0.1c0,4.2,3,7.8,7,8.6c-0.7,0.2-1.5,0.3-2.3,0.3c-0.6,0-1.1-0.1-1.6-0.2c1.1,3.5,4.3,6,8.2,6.1 c-3,2.3-6.8,3.7-10.9,3.7c-0.7,0-1.4,0-2.1-0.1c3.9,2.5,8.5,3.9,13.4,3.9C58.2,70,67,56.7,67,45.1c0-0.4,0-0.8,0-1.1 C68.7,42.7,70.2,41.2,71.3,39.4L71.3,39.4z"></path>
                  </svg>
                </a>
                <a class="link-facebook" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    space="preserve"
                    width="38"
                    height="38"
                  >
                    <circle cx="50" cy="50" r="50"></circle>
                    <path d="M53.3,71.3V51.9h6.5l1-7.6h-7.5v-4.8c0-2.2,0.6-3.7,3.8-3.7l4,0V29c-0.7-0.1-3.1-0.3-5.9-0.3 c-5.8,0-9.8,3.5-9.8,10v5.6h-6.5v7.6h6.5v19.5H53.3z"></path>
                  </svg>
                </a>

                <a class="link-youtube" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    space="preserve"
                    width="38"
                    height="38"
                  >
                    <circle cx="50" cy="50" r="50"></circle>
                    <path
                      d="M65.701,59.694c-0.422,1.969-1.989,3.416-3.878,3.637c-4.461,0.503-8.983,0.503-13.484,0.503s-9.023,0-13.484-0.503
					c-1.889-0.222-3.456-1.668-3.898-3.637c-0.623-2.793-0.623-5.848-0.623-8.722s0-5.928,0.644-8.722
					c0.441-1.969,1.989-3.416,3.878-3.637c4.461-0.502,8.983-0.502,13.484-0.502s9.023,0,13.484,0.502
					c1.889,0.221,3.456,1.668,3.898,3.637c0.623,2.793,0.623,5.848,0.623,8.722S66.345,56.9,65.701,59.694z M55.453,49.887
					l-10.289-6.431c-0.402-0.261-0.904-0.261-1.307-0.041c-0.401,0.221-0.663,0.663-0.663,1.125v12.861
					c0,0.462,0.262,0.904,0.663,1.125c0.201,0.101,0.402,0.161,0.623,0.161c0.241,0,0.482-0.06,0.684-0.201l10.289-6.431
					c0.382-0.221,0.603-0.643,0.603-1.085S55.835,50.108,55.453,49.887z"
                    />
                  </svg>
                </a>

                <a class="link-linkedin" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    space="preserve"
                    width="38"
                    height="38"
                  >
                    <circle cx="50" cy="50" r="50"></circle>
                    <path d="M39.1,69.1V43.3h-8.6v25.8H39.1z M34.8,39.8c3,0,4.9-2,4.9-4.5c-0.1-2.5-1.9-4.5-4.8-4.5 c-2.9,0-4.9,1.9-4.9,4.5C30,37.8,31.9,39.8,34.8,39.8L34.8,39.8L34.8,39.8z M43.8,69.1h8.6V54.7c0-0.8,0.1-1.5,0.3-2.1 c0.6-1.5,2-3.1,4.4-3.1c3.1,0,4.3,2.4,4.3,5.8v13.8H70V54.3c0-7.9-4.2-11.6-9.9-11.6c-4.6,0-6.7,2.6-7.8,4.3h0.1v-3.7h-8.6 C43.9,45.7,43.8,69.1,43.8,69.1L43.8,69.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="coinz-side-menu" class="coinz-side-menu">
          <div class="coinz-side-top">
            <div class="logo-for-panel">
              <a
                class="blog-logo-image light-logo"
                href="index.html"
                rel="home"
              >
                <img src="wp-content/logo-header.png" />{" "}
              </a>
            </div>
          </div>
          <div class="coinz-side-inner">
            <ul class="coinz-side-inner-menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children   td-menu-item-4445">
                <a class="menu-button-4445 ">
                  <span>Home</span>
                </a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children   td-menu-item-4458">
                <a class="menu-button-4458 ">
                  <span>About Tronsquire</span>
                </a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4469">
                <a class="menu-button-4469 ">
                  <span>Faq</span>
                </a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4495">
                <a class="menu-button-4495 ">
                  <span>ROAD MAP</span>
                </a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4495">
                <a class="menu-button-4495 ">
                  <span>WHITEPAPPERS</span>
                </a>
              </li>
              <li
                id="menu-item-4491"
                class="coinz-cta-v2 menu-item menu-item-type-custom menu-item-object-custom menu-item-4491"
              >
                <a>Whitepaper</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
