 import React from "react";
import Navbar from "../Navbar";

const SaveJobs = () => {

  const savedJob = JSON.parse(localStorage.getItem("Job"));

  const jobs = savedJob ? [savedJob] : [];

  return (
    <div>
      <Navbar />

      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Saved Jobs</h2>
          </div>
        </div>

        <div className="job-section">
          <div className="job-page">

            {jobs.length === 0 ? (
              <h2 style={{ textAlign: "center" }}>No Saved Jobs</h2>
            ) : (
              jobs.map(({ logo, company, position, location, role }, index) => {
                return (
                  <div className="job-list" key={index}>
                    <div className="job-card">

                      <div className="job-name">

                        <img
                          src={
                            logo.length > 20
                              ? logo
                              : require(`../../Assets/images/${logo}`)
                          }
                          alt="logo"
                          className="job-profile"
                        />

                        <div className="job-detail">
                          <h4>{company}</h4>

                          <h3>{position}</h3>

                          <div className="category">
                            <p>{location}</p>
                            <p>{role}</p>
                          </div>

                        </div>

                      </div>

                      <div className="job-posting"></div>

                    </div>
                  </div>
                );
              })
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveJobs;