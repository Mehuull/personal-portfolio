import React from "react";
import "./About.css";
import profileImage from "../../assets/profile2.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="profile" data-aos="fade-down" data-aos-duration="2000">
        <div class="animated-box in">
          <img src={profileImage} alt="" />
        </div>
        <h1>
          Mehul <span>.</span> Rana
        </h1>
        <h3>A Creative Full Stack Developer</h3>
      </div>

      <div className="about-content">
        <div className="self-summary">
          <h1 data-aos="fade-right" data-aos-duration="2000">
            | who i am?
          </h1>
          <p data-aos="fade-right" data-aos-duration="2200">
            ⚡I'm a creative soul with a knack for technology, currently
            pursuing my Bachelor of Computer Applications (BCA)🎓. Over the
            years, I've won multiple medals in drawing and creativity
            competitions 🏅🎨, which fuels my passion for blending art and
            technology 🖥️✨.
          </p>
          <p data-aos="fade-right" data-aos-duration="2400">
            ⚡I am passionate about blending creativity and technology to
            develop innovative solutions as a Full Stack Developer 💻🔧.
          </p>
          <p data-aos="fade-right" data-aos-duration="2600">
            ⚡ Always been curious to learn something new 🤔📚.
          </p>
          <p data-aos="fade-right" data-aos-duration="3000">
            ⚡ Creative mindset 🎨🧠.
          </p>
          <p data-aos="fade-right" data-aos-duration="3000">
            ⚡ I Love Songs and Music 🎶❤️.
          </p>
        </div>
      </div>

      <div
        className="skill-container"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <h1 className="skill-heading">Technical Skills</h1>

        <div className="technical-bars">
          <div className="bar">
            <i className="bx bxl-html5"></i>
          </div>
          <div className="info">
            <span>HTML</span>
          </div>
          <div className="progress-line progress-html">
            <span></span>
          </div>
        </div>

        <div className="technical-bars">
          <div className="bar">
            <i className="bx bxl-css3"></i>
          </div>
          <div className="info">
            <span>CSS</span>
          </div>
          <div className="progress-line progress-css">
            <span></span>
          </div>
        </div>

        <div className="technical-bars">
          <div className="bar">
            <i className="bx bxl-javascript"></i>
          </div>
          <div className="info">
            <span>JavaScript</span>
          </div>
          <div className="progress-line progress-javascript">
            <span></span>
          </div>
        </div>

        <div className="technical-bars">
          <div className="bar">
            <i className="bx bxl-react"></i>
          </div>
          <div className="info">
            <span>React</span>
          </div>
          <div className="progress-line progress-react">
            <span></span>
          </div>
        </div>

        <div className="technical-bars">
          <div className="bar" id="bar-last">
            <i class="bx bxl-nodejs"></i>
            <span>&</span>
            <i className="expressjs-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
              </svg>
            </i>
          </div>
          <div className="info">
            <span>Node JS & Express JS</span>
          </div>
          <div className="progress-line progress-angular">
            <span></span>
          </div>
        </div>
      </div>
      <h3 className="made_by">Made with 🧡 By MEHᏬL RANA</h3>
    </div>
  );
};

export default About;
