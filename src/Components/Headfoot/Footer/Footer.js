import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
    <Link to="https://wa.me/+918097283444?text=Welcome To Precision Grow" class="whatsapp_btn circle-50" data-title="whatsapp" target="_blank"><i class="fa-brands fa-whatsapp"></i></Link>
    <div class="support"> 
            <p className="text-center">We Make Farming Better With Remote Sensing  Data For Partnership Contact Us At <a href="mailto:mail@precisiongrow.co.in"><span class="hglt">mail@precisiongrow.co.in</span></a></p>
            <p className="p-0 m-0 text-center">For Support Contact Us For <a href="mailto:support@precisiongrow.co.in"><span class="hglt">support@precisiongrow.co.in</span></a></p>
            </div>
      <footer className="footer" style={{backgroundImage:'https://webpagecdnstorage.blob.core.windows.net/precisiongrow/16.png'}}>
        <div className="foot-newsletter">
            
        </div>
        <div className="container">
          <h2 className="text-whitee 
          text-center mb-5">
            Agriculture Meets Technology with
            Precision Grow
          </h2>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="widget1">
                <div className="footerlogo">
                  <img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/foot-logo.png' className="img-fluid mb-4 rounded" loading="lazy" alt="" />
                </div>
                <h5>Powered By</h5>
                <img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/sap-b1.webp
                ' alt="sap icon" className="w-50 rounded mb-4"/>
                <div className="socialLinks">
                  <ul>
                    <li>
                      <Link to="https://www.facebook.com/PrecisionGrow/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/i/flow/login?redirect_after_login=%2Fprecision_grow">
                      <i class="fa-brands fa-square-x-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/company/precision-grow/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/precisiongrow_/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g">
                        <i class="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://precisiongrowindia.blogspot.com/">
                        <i class="fa-brands fa-blogger-b"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://precisiongrow.co.in/">
                        <i class="fa-brands fa-flickr"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://soundcloud.com/precision-grow?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                        <i class="fa-brands fa-soundcloud"></i>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 footer-here-is">
              <h5>Get in Touch and Start Your Journey to Success</h5>
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="col-md-10 text-white">
                  <ul>
                    <li><h6>Regd. Office :</h6></li>
                    <li>
                    Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi,
                    Mumbai, Mumbai City, Maharashtra, 400703
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="col-md-10 text-white">
                  <ul>
                    <li><h6>Project Office :</h6></li>
                    <li>
                      61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel,
                      Mumbai, 400012
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row mt-5 text-white">
                <div class="col-lg-6 mb-5 col-md-12">
                  <ul>
                    <li>
                      <img
                        class="imgh"
                        src="https://precisiongrow.co.in/assets/img/icon/india-flag.webp"
                        alt=""
                        loading="lazy"
                      />
                      <span style={{color:'#f5d400',textDecoration:'underline'}}>India</span>
                    </li>
                    <li>
                      <span>PHONE</span> : +91 22 48888888 / 46165798
                    </li>
                    <li>
                      <span>MOBILE</span> : +91 8097283444
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-md-12 mb-5">
                  <ul>
                    <li>
                      <img
                        class="imgh"
                        src="https://precisiongrow.co.in/assets/img/icon/us.png"
                        alt=""
                        loading="lazy"
                      />
                      <span style={{color:'#f5d400',textDecoration:'underline'}}>USA</span>
                    </li>
                    <li>
                      <span>PHONE</span> : +1 424-239-0105
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 offset-md-2 col-lg-2 offset-lg-1">
              <div className="widget4">
                <h5>Explore</h5>
                <ul>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/ecrop">Products</Link>
                  </li>
                  <li>
                    <Link to="/crop_monitoring">Sustainability</Link>
                  </li>
                  <li>
                    <Link to="https://precisiongrowindia.blogspot.com/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/FaqPage">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/refund_policy">Policy</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-certified text-center">
                <div class="row">
                    <ul>
                        <li><img class="logo-certi" src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/nasscom.png' alt="nasscom"/></li>
                        <li><img class="logo-certi" src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/Assocham_India.png'alt="Assocham_India"/></li>
                        <li><img class="logo-certi" src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/cii.png' alt="cii"/></li>
                        <li><img class="logo-certi" src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/ficci.png' alt="ficci"/></li>
                        <li><img class="logo-certi" src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/ifoam.png' alt="ifoam"/></li>
                    </ul>

                </div>
            </div>
        </div>
        <div className="copyRightArea">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center text-md-left mb-3 mb-md-0">
                <p>
                  &copy; 2024. All Rights Reserved by <span>Precision Grow (A Unit of
                  Tech Visit IT Pvt Ltd)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="shape-right-bottom">
            <img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/7.png' alt="Image Not Found"/>
        </div>
      </footer>
    </>
  );
}
export default Footer;
