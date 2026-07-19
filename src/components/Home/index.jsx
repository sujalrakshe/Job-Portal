 import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="banner-img">

        <div className="hero-content">

          <div className="badge">
             #1 Job Portal
          </div>

          <div className="title">
            <h3>
              Find the <span> Dream Job</span> Today
              <br />
              In the <span>Right Companies</span>
            </h3>

            <div className="small-tagline">
              <p>Got fired..!!  faster with top companies</p>
            </div>
          </div>

         

          {/* Buttons */}

          <div className="button-group">

            <Link className="primary-btn" to="/jobs">
              Browse Jobs
            </Link>

            <Link className="secondary-btn" to="/post-job">
              Post a Job
            </Link>

          </div>

        </div>

      </div>

      <div className="company-heading">
        Trusted by Top Companies
      </div>

      <div className="social-media">

        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg"   alt="facebook"
  data-testid="images" />

        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg"  alt="google"
  data-testid="images" />

        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg"   alt="youtube"
  data-testid="images" />

        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg"  alt="linkedin"
  data-testid="images" />

      </div>

    </>
  );
};

export default Home;