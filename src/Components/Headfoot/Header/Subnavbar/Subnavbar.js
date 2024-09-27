import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Subnavbar.css'; // Import the CSS file
import Topbar from '../Topbar/Topbar';

const Subnavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Topbar />
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div id="topIcon" className="icon-fixed">
          <img
            src="https://webpagecdnstorage.blob.core.windows.net/precisiongrow/great-place-to-work.png"
            alt="Great Place to Work"
          />
        </div>
        <div className="container-fluid">
          <img
            className="logo"
            loading="lazy"
            src="https://webpagecdnstorage.blob.core.windows.net/precisiongrow/logo.webp"
            alt="logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" ref={dropdownRef}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/services"
                  id="servicesDropdown"
                  role="button"
                  aria-expanded={openDropdown === 'services'}
                  onClick={() => handleDropdownToggle('services')}
                >
                  Services
                </Link>
                <ul
                  className={`shadow dropdown-menu ${
                    openDropdown === 'services' ? 'show' : ''
                  }`}
                  aria-labelledby="servicesDropdown"
                >
                  <li className="dropdown-submenu">
                    <Link
                      className="dropdown-item dropdown-toggle"
                      to="/farmmanagement"
                    >
                      Satellite Monitoring
                    </Link>
                    <ul
                      className={`shadow dropdown-menu ${
                        openDropdown === 'satellite' ? 'show' : ''
                      }`}
                    >
                      <li>
                        <Link className="dropdown-item" to="/crop_monitoring">
                          Crop Monitoring
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/fish_monitoring">
                          Fish Monitoring
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/farmboundary">
                      Farm Boundary
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/precision_grow_ai">
                      Precision Grow AI
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/regenerative_agriculture"
                    >
                      Regenerative Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product_traceability">
                      Product Traceability
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cropadvisory">
                      Crop Advisory
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/wildfire_solution">
                      Wildfire Solution
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/agri_insurance">
                      Agri Insurance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/agri_loan">
                      Agri Loan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/agri_drone">
                      Agri Drone
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="productsDropdown"
                  role="button"
                  aria-expanded={openDropdown === 'products'}
                  onClick={() => handleDropdownToggle('products')}
                >
                  Products
                </Link>
                <ul
                  className={`shadow dropdown-menu ${
                    openDropdown === 'products' ? 'show' : ''
                  }`}
                  aria-labelledby="productsDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/ecrop">
                      e-Crop (Smart Farming With Electronic Crop)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/biosence">
                      BioSense
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ecoloo">
                      ECOLOO
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  
                  id="sustainabilityDropdown"
                  role="button"
                  aria-expanded={openDropdown === 'sustainability'}
                  onClick={() => handleDropdownToggle('sustainability')}
                >
                  Sustainability
                </Link>
                <ul
                  className={`shadow dropdown-menu ${
                    openDropdown === 'sustainability' ? 'show' : ''
                  }`}
                  aria-labelledby="sustainabilityDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/overview">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/glossary">
                      Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="https://greengdp.in/"
                      target="_blank"
                    >
                      Green GDP
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="https://precisiongrowindia.blogspot.com/"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faqpage" target="_blank">
                  FAQ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/refund_policy"
                  id="policyDropdown"
                  role="button"
                  aria-expanded={openDropdown === 'policy'}
                  onClick={() => handleDropdownToggle('policy')}
                >
                  Policy
                </Link>
                <ul
                  className={`shadow dropdown-menu ${
                    openDropdown === 'policy' ? 'show' : ''
                  }`}
                  aria-labelledby="policyDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/refund_policy">
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/terms_conditions">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/privacy_policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item ecp-box">
                <Link
                  className="nav-link ex-link1 rounded"
                  to="https://ecroptoday.co.in/"
                  target="_blank"
                >
                  E-CROPTODAY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link rounded p-0"
                  to="https://sdgindiaindex.niti.gov.in/#/"
                >
                  <img
                    src="https://webpagecdnstorage.blob.core.windows.net/precisiongrow/sdg-india.png"
                    alt="sdg index"
                    className="sdg-img"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Subnavbar;
