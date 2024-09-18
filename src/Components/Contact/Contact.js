import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "./Contact.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Required for screen readers to work correctly

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Contact Us', path: '/contact' }
];

const Contact = () => {
  const [otpDisplay, setOtpDisplay] = useState("hidden");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    domain:"Precision Grow"
  });
  const [status, setStatus] = useState({ success: false, error: null });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const script = document.getElementById("otpless-sdk");
    if (script) {
      const callback = (userinfo) => {
        const mobileMap = userinfo.identities.find(
          (item) => item.identityType === "MOBILE"
        )?.identityValue;
        console.log("User Info:", { mobile: mobileMap });
      };
      window.OTPlessSignin = new window.OTPless(callback);
    }
  }, []);

  const phoneAuth = () => {
    const phone = formData.phone;
    if (!phone) {
      alert("Please enter your number");
      return;
    }
    setOtpDisplay("visible");
    setIsOtpRequested(true);
    window.OTPlessSignin.initiate({
      channel: "PHONE",
      phone: phone,
      countryCode: "+91",
    });
  };

  const verifyOTP = () => {
    window.OTPlessSignin.verify({
      channel: "PHONE",
      phone: formData.phone,
      otp: otpValue,
      countryCode: "+91",
    })
    .then((response) => {
      if (response.success) {
        setIsOtpVerified(true);
        console.log("OTP Verified Successfully");
      } else {
        alert("Incorrect OTP");
        setIsOtpVerified(false);
      }
    })
    .catch((error) => {
      console.error("Error verifying OTP:", error);
      setIsOtpVerified(false);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: null });

    if (!isOtpVerified) {
      alert("Please verify the OTP before submitting the form.");
      return;
    }

    try {
      const response = await axios.post(
        "https://ecbsf-backend.azurewebsites.net/api/contact/send",
        formData
      );

      if (response.status === 200) {
        setStatus({ success: true, error: null });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setOtpValue("");
        setIsOtpVerified(false);
        setIsOtpRequested(false);
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setStatus({ error: "Something went wrong. Please try again later.", success: false });
    }
  };

  return (
    <div>
      <Banner 
        title="Contact Us" 
        backgroundImage='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/hero_4.webp' 
        breadcrumbItems={breadcrumbItems}
      />
      <div className="con-in">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-left">
                <form onSubmit={handleSubmit} className="cont-frm">
                  <h5>Have Questions</h5>
                  <h2 className="mb-4">Send Us A Message</h2>
                  <div className="dbl-field">
                    <div className="field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <button
                      className="requestOtp"
                      type="button"
                      onClick={phoneAuth}
                    >
                      Request OTP
                    </button>
                    {isOtpRequested && (
                      <div className={`otp-${otpDisplay}`}>
                        <input
                          id="otp-input"
                          placeholder="Enter OTP"
                          value={otpValue}
                          onChange={(e) => setOtpValue(e.target.value)}
                        />
                        <button type="button" onClick={verifyOTP}>
                          Verify OTP
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="message">
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="button-area">
                    {isOtpVerified ? (
                      <button className="text-white rounded" type="submit">
                        Send Message
                      </button>
                    ) : (
                      <p>Please verify OTP to submit the form.</p>
                    )}
                  </div>
                  {status.error && <div className="error-message">{status.error}</div>}
                  {status.success && <div className="sent-message">Your message has been sent. Thank you!</div>}
                </form>
              </div>
              <div className="col-lg-6" data-aos="fade-right">
                <div className="contact-style-one-info cont">
                  <h2>Contact Information</h2>
                  <ul>
                    <li>
                      <div className="content">
                        <h5 className="title">Regd Office:</h5>
                        <p><Link to="">B-155, Ground Floor, Vashi Plaza, Sector-17, Vashi, Mumbai, 400703</Link></p>
                      </div>
                      <div className="content">
                        <h5 className="title">Project Office:</h5>
                        <p><Link to="">61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012</Link></p>
                      </div>
                    </li>
                    <li>
                      <h5 className="title">Phone</h5>
                      <p><strong>INDIA:</strong> <a href="tel:912248888888">+91 22 48888888</a> / <a href="tel:912246165798">46165798</a></p>
                      <p><strong>MOBILE:</strong> <a href="tel:918097283444">+91 8097283444</a></p>
                    </li>
                    <li>
                      <h5 className="title">Email</h5>
                      <p><a href="mailto:mail@precisiongrow.co.in">mail@precisiongrow.co.in</a><br />
                         <a href="mailto:mail@precisiongrow.eu">mail@precisiongrow.eu</a></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for success message */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Success Message"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully.</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default Contact;
