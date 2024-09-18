import React from "react";
import Banner from "../Banner/Banner";
import "./Contact.css";
import { Link } from "react-router-dom";

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Contact Us', path: '/contact' }
];
const Contact = () => {
  return (
    <div>
      <Banner 
        title="Contact Us" 
        backgroundImage='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/hero_4.webp' 
        breadcrumbItems={breadcrumbItems}
      />
      <div className="con-in">
        <div className="sahpe-right-bottom">
          <img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/16.png' alt="Image Not Found" />
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-left">
                <form id="contactForm" className="cont-frm" action="" method="post">
                  <h5>Have Questions</h5>
                  <h2 className="mb-4">Send Us A Message</h2>
                  <div className="dbl-field">
                    <div className="field">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="field">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                  <div className="dbl-field">
                    <div className="field">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone"
                      />
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="field">
                      <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="Enter your website"
                      />
                      <i className="fas fa-globe"></i>
                    </div>
                  </div>
                  <div className="message">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message"
                      required
                    ></textarea>
                    <i className="fa-solid fa-message"></i>
                  </div>
                  <div className="button-area">
                    <button className="text-white rounded" type="submit">
                      Get In Touch
                    </button>
                    <span></span>
                  </div>
                  <p id="statusMessage"></p>
                </form>
              </div>
              <div className="col-lg-6" data-aos="fade-right">
                <div className="contact-style-one-info cont">
                  <h2>Contact Information</h2>
                  <ul>
                    <li>
                      <div className="content">
                        <h5 className="title">
                          <i className="fas fa-building"></i> Regd Office:
                        </h5>
                        <p className="coleft">
                          <Link to="">
                            B-155, Ground Floor, Vashi Plaza, Sector-17, Vashi, Mumbai, 400703
                          </Link>
                        </p>
                      </div>
                      <div className="content coleft">
                        <h5 className="title">Project Office:</h5>
                        <p>
                          <Link to="">
                            61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012
                          </Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5 className="title">
                          <i className="fas fa-phone-alt"></i> Phone
                        </h5>
                        <ul className="country-flag">
                          <li>
                            <div className="icon-flag">
                              <img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/india-flag.webp' width="38px" alt="India" />
                            </div>
                            <div className="content">
                              <p className="pb-2">
                                <strong>INDIA</strong>
                              </p>
                              <strong>Phone:</strong>
                              <p>
                                <a href="tel:912248888888">+91 22 48888888</a> / <a href="tel:912246165798">46165798</a>
                              </p>
                              <strong>Mobile:</strong>
                              <a href="tel:918097283444">+91 8097283444</a>
                            </div>
                          </li>
                          <li>
                            <div className="icon-flag">
                              <img src='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/us.png' width="38px" alt="us" />
                            </div>
                            <div className="content">
                              <p className="pb-2">
                                <strong>USA</strong>
                              </p>
                              <strong>Phone:</strong>
                              <a href="tel:0014242390105">+1 424-239-0105</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h5 className="title">
                          <i className="fas fa-envelope"></i> Email
                        </h5>
                        <p className="coleft">
                          <a href="mail@precisiongrow.co.in">mail@precisiongrow.co.in</a>
                          <br />
                          <a href="mail@precisiongrow.eu">mail@precisiongrow.eu</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mapp">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.87005805164!2d72.99598247596525!3d19.069449952176747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14bdd5000f5%3A0x2a58de08ba99c869!2sTech%20Visit!5e0!3m2!1sen!2sin!4v1725365345046!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
