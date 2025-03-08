import React from "react";
import "./Education.css";
import EducationIMG from "../../assets/Educationimage.png";
import SDJlogo from "../../assets/SDJlogo.jpeg";
import TTVlogo from "../../assets/T&TV.png";

const Education = () => {


  return (
    <>
      <div
        className="Heading-container"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="Heading-image">
          <img src={EducationIMG} alt="" />
        </div>
        <div className="Heading">
          <h1>Education and Qualifications</h1>
        </div>
      </div>

      <div className="education-container">
        <h1 data-aos="fade-down" data-aos-duration="2000">
          Degree Received
        </h1>

        {/**container1  */}
        <div className="sub-container">
          <div className="education-logo" data-aos="flip-left"
            data-aos-duration="3000">
            <img src={SDJlogo} alt="SDJ Logo" />
          </div>

          <div className="education-card" data-aos="fade-left"
            data-aos-duration="3000" >
            <div className="education-header">
              <h2>SDJ International College, Vesu, Surat.</h2>
              <p className="education-duration">Sep 2023 - 2027</p>
            </div>
            <h3>Bachelor of Computer Application (BCA) </h3>
            <div className="education-content">
              <ul>
                <li>
                  ⚡ I'm studying programming languages like C, C++, python,
                  Java and computer science topics IoT, Algorithms etc.
                </li>
                <li>⚡ Developing Web Developing Skills </li>
                <li>
                  Having prior Knowledge of concepts like OOPs , Data-structure
                  and Database(Basics).
                </li>
                <li>⚡ And building Projects</li>
              </ul>
            </div>
            <div className="education-footer">
              <a
                href="https://www.sdjic.org"
                target="_self"
                className="visit-button"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>

        {/**container2  */}
        <div className="sub-container">
          <div className="education-logo"data-aos="flip-left"
            data-aos-duration="3000">
            <img src={TTVlogo} alt="T&TV Logo" />
          </div>

          <div className="education-card"  data-aos="fade-left"
            data-aos-duration="3000" >
            <div className="education-header">
              <h2> T. & T. V. Sarvajanik Vidyalaya</h2>
              <p className="education-duration">July 2021 - 2023</p>
            </div>
            <h3>Secondary and Higher Secondary Education </h3>
            <div className="education-content">
              <ul>
                <li>
                  ⚡ i have completed my higher studies with commerce
                  field,Having Prior Knowledge of Accounting and Statistics.
                </li>
                <li>🥈 2st Rank in 11th </li>
                <li>🥇 A2 Grade in 12th </li>
                <li>
                  ⚡ Apart From this i have studies basic concept of computer
                  science like c, java, Object-orient and Database.
                </li>
              </ul>
            </div>
            <div className="education-footer">
              <a
                href="https://www.ttvvidyalaya.org/"
                target="_self"
                className="visit-button"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <h3 className="made_by">Made with 🧡 By MEHᏬL RANA</h3>
      </div>
    </>
  );
};

export default Education;
