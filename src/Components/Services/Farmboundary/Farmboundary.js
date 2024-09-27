import React from "react";
import Banner from "../../Banner/Banner";
import Titletag from "../../Titletag/Titletag";
import ListCompTitle from "../../ListComponent/ListCompTitle";
import iconimg1 from "../../../assets/API-Ready-High-Accuracy.png";
import iconimg2 from "../../../assets/High-Accuracy.png";
import iconimg3 from "../../../assets/PredictablePricing.png";
import "./Farmboundary.css";
import farmboundary from "../../../assets/farmboundary.mp4";
import farmbimg from '../../../assets/farmboundary.png'
const Farmboundary = () => {
  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Farm Boundary" },
  ];
  const items = [
    {
      title: "Increased Efficiency",
      detail:
        "By understanding the exact boundaries of your farm, you can better plan planting, irrigation, and resource allocation.",
    },
    {
      title: "Cost-Effective Solutions",
      detail:
        "Eliminate guesswork and prevent resource waste with precise boundary detection, leading to more efficient farm operations.",
    },
    {
      title: "Sustainability",
      detail:
        "Optimize land use and contribute to sustainable farming practices by managing your farm’s resources more effectively.",
    },
  ];
  const items1 = [
    {
      title: "Accurate Boundary Mapping",
      detail:
        "Utilizing satellite imagery and advanced algorithms, we deliver highly accurate farm boundary data to assist in precise land management.",
    },
    {
      title: "Customizable for Any Scale:",
      detail:
        "Whether you manage small plots or large-scale agricultural land, our solutions adapt to your needs, offering tailored results based on the specific dimensions and characteristics of your property.",
    },
    {
      title: "Easy Integration",
      detail:
        "Our boundary detection data is easily integrated with existing farm management software and tools, making it simple to incorporate into your current workflows.",
    },
    {
      title: "Compliance and Documentation",
      detail:
        "Stay compliant with local regulations by having clearly defined and documented farm boundaries, ensuring smooth legal processes and proper land ownership records.",
    },
  ];
  const items5 = [
    {
      title: "8+ Years of Historical Data",
      detail:
        "We offer historical field data dating back to 2015, along with in-season data including seeded acres, providing valuable insights for long-term planning and analysis.",
    },
    {
      title: "0.95 IoU Score:",
      detail:
        "Our Field Delineation Model boasts an Intersection over Union (IoU) accuracy score of 0.94-0.96, ensuring highly reliable field boundary data.",
    },
    {
      title: "200M+ Hectares",
      detail:
        "We have delineated over 200 million hectares of agricultural fields and seeded acres using Sentinel-2 imagery at 1m resolution, offering unparalleled accuracy and coverage.",
    },
    {
      title: "4 Query Types",
      detail:
        "Our field boundary data is available via API, allowing seamless integration into your products and systems.",
    },
  ];
  const items6 = [
    {
      title: "Pre-Production:",
      detail:
        "Companies involved in fungicides, herbicides, pesticides, and plant breeding rely on accurate boundaries for variable rate technology (VRT) applications.",
    },
    {
      title: "Processing & Storage",
      detail:
        "Grain traders, mills, and logistical networks use current-season boundaries and seeded acres to forecast grain inventory volumes.",
    },
    {
      title: "Wholesale & Retail Market",
      detail:
        "Grain buyers, food processors, and carbon credit organizations depend on precise boundary data for carbon and sustainability mapping.",
    },
    {
      title: "Autonomy & Robotics",
      detail:
        "Autonomous agricultural machinery requires accurate boundaries for dependable operation, offering a scalable alternative to costly RTK systems.",
    },
    {
      title: "Distribution & Logistics",
      detail:
        "Farm Management System (FMS) providers need scalable solutions, and manual field boundary digitization is time-consuming and prone to errors.",
    },
    {
      title: "Crop Insurance & Subsidies",
      detail:
        "Crop insurers and national agencies conducting manual field inspections face costly and time-consuming processes that can be improved with accurate boundary data.",
    },
  ];
  return (
    <div>
      <Banner
        title="Farm Boundary"
        backgroundImage="https://webpagecdnstorage.blob.core.windows.net/precisiongrow/aerial-drone.webp"
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
      <div className="abt-outer">
        <section>
          <div className="container">
            <Titletag
              title="Farm Boundary Detection by Precision Grow"
              bgImage="https://webpagecdnstorage.blob.core.windows.net/precisiongrow/hero_44.webp"
              className="pt-5"
            />
            <p className="txt1">
              At <span>Precision Grow</span>, we offer cutting-edge Farm
              Boundary Detection services designed to help farmers and
              agribusinesses optimize land management with precision and
              accuracy. Our advanced satellite-based technology provides an
              exact mapping of farm boundaries, ensuring that every inch of land
              is accounted for and efficiently utilized.
            </p>
          </div>
        </section>
        <div className="red-outer-div">
          <div class="shapehere"></div>
          <section>
            <div className="container pt-5">
              <div className="row">
                <div className="col-lg-6">
                  <h1
                    style={{ color: "#d8e800", textShadow: "3px 1px 2px #000" }}
                  >
                    Key features
                  </h1>
                  <ListCompTitle items={items1} />
                </div>
                <div className="col-lg-6">
                  <h1
                    style={{
                      color: "#d8e800",
                      textShadow: "3px 1px 2px #000 ",
                    }}
                  >
                    Benefits
                  </h1>
                  <ListCompTitle items={items} />
                </div>
                <blockquote className="quote-container">
                  <p className="para11">
                    With{" "}
                    <b style={{ color: "yellow" }}>
                      Precision Grow's Farm Boundary Detection services
                    </b>
                    , you can gain better control over your land, maximize its
                    potential, and achieve greater agricultural success. Let us
                    help you take the guesswork out of boundary management, so
                    you can focus on what matters most growing your farm.
                  </p>
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="farmbounday1">
        <section>
          <div class="container mt-5">
            <h1 style={{ color: "#2d3e3e" }} className="text-center">
              Global Coverage
            </h1>
            <p>
              At Precision Grow, we're continuously expanding our services to
              new regions, including France, Spain, Brazil, the US, Australia,
              Germany, and over 30 more countries. Our goal is to provide
              comprehensive global agricultural solutions.
            </p>
            <div class="row">
              <div class="col-md-4 mb-3">
                <div class="card text-center">
                  <div class="card-body">
                    <img
                      src={iconimg3}
                      alt="Predictable Pricing"
                      class="mb-3"
                      style={{ width: "80px", height: "auto" }}
                    />
                    <h4 class="card-title">Predictable Pricing</h4>
                    <p class="card-text">
                      We offer a flexible pricing system with discounts based on
                      usage volume. The more data requests you make, the lower
                      the cost, ensuring affordability as your usage grows.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-3">
                <div class="card text-center">
                  <div class="card-body">
                    <img
                      src={iconimg1}
                      alt="API-Ready High Accuracy"
                      class="mb-3"
                      style={{ width: "80px", height: "auto" }}
                    />
                    <h4>API-Ready High Accuracy</h4>
                    <p class="card-text">
                      Our services are fully integrated with simple API
                      endpoints, providing full access to documentation for easy
                      integration into your existing systems.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-3">
                <div class="card text-center">
                  <div class="card-body">
                    <img
                      src={iconimg2}
                      alt="High Accuracy"
                      class="mb-3"
                      style={{ width: "80px", height: "auto" }}
                    />
                    <h4 class="card-title">High Accuracy</h4>
                    <p class="card-text">
                      Our data is 12-15% more accurate than existing cadastral
                      maps like LPIS in the EU and CLU in the US, using AI
                      solutions with a 10m resolution. This high level of
                      accuracy makes Precision Grow the go-to choice for precise
                      farm management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="ecrop-outer3 farmB3">
        <div className="shapehere"></div>
        <video autoPlay muted loop className="bg-video">
          <source src={farmboundary} type="video/mp4" />
        </video>
        <div className="overlay-contentF">
          <h1>How Our Field Delineation Model Works</h1>
          <p>
            We accurately delineate field boundaries and measure seeded acres
            during the growing season using super-resolved Sentinel-2 imagery at
            1m per pixel resolution. With RGB + NIR 4-band technology, we
            provide the most up-to-date data, delivered through our API or as
            Shape, KML, or GeoJSON files. This data is essential for in-season
            analysis and planning.
          </p>
        </div>
      </div>
      <div className="farmoB3">
        <div className="container">
          <h2 className="greentitle text-center mb-4 fs-1">
            Schedule a Tour with Our Experts
          </h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <ListCompTitle items={items5} />
            </div>
          </div>
        </div>
      </div>
      <div class="overview-outer1">
        <section>
          <div class="container aos-init aos-animate" data-aos="fade-up">
            <h1>Field Boundary Data Delivery</h1>
            <p>
            We deliver field boundary data via API, complete with detailed documentation for easy integration. Field boundaries are provided as GeoJSON for a given point, bounding box (bbox), or field ID. You can obtain a field ID from a low-resolution API endpoint, which allows you to display low-resolution polygons for users to select fields and then receive high-resolution boundary data.
            </p>
            <p>
            Our API offers multiple endpoints for agricultural solutions:
            </p>
            <ul>
              <li><p>●	<b>Data Availability:</b> For a specific bounding box (bbox).</p></li>
              <li><p>●	<b>Low-Resolution Boundaries:</b> Automatically delineated for a given bbox or as MVT vector tiles for selection purposes</p></li>
              <li><p>●	<b>High-Resolution Boundaries:</b> Automatically delineated for a given bbox, point, or field ID.</p></li>
              <li><p>●	<b>Deep Resolution:</b> Enhanced Sentinel-2 imagery, improving the resolution from 10m to 1m using our proprietary technology.</p></li>
            </ul>
            <h1>Explore Field Boundaries</h1>
            <p>Discover 25+ regions with thousands of field boundaries already mapped, and request coverage for your area of interest if it's not listed.</p>
          </div>
        </section>
      </div>
      <div className="farmoB4">
        <div className="container">
          <p className="ptxt">Check Demo Regions</p>
          <h2 className="greentitle my-3">Why Accurate Field Boundaries Matter</h2>
          <p>Accurate field boundary and seeded acreage data benefit the entire agricultural value chain. With over 570 million farmers and growers worldwide, precise boundary data helps improve yields and reduce input costs across the industry.</p>
          <div className="row">
            <div className="col-lg-7">
            <ListCompTitle items={items6} />
            </div>
            <div className="col-lg-5">
            <img src={farmbimg} alt="fimg"/>
            </div>
          </div>
        </div>
  <div className="container">
  <blockquote class="quote-container">
          <p><b style={{color: 'yellow'}}>Edit, Split, and Merge Boundaries</b></p>
          <p class="para11">As a bonus, Precision Grow offers a user-friendly editor allowing you to modify field boundaries by splitting, merging, or adding/removing sections, providing greater flexibility for farm management.</p></blockquote>
  </div>
      </div>
      
    </div>
  );
};

export default Farmboundary;
