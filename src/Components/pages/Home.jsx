import React from "react";
import "./Home.css";
import profileImage from "../../assets/profile.png";
import Webdevelopment from "../../assets/Webdevelopment.png";
import HTMLlogo from "../../assets/HTML-logo.jpg";
import CSSlogo from "../../assets/CSS-logo.jpg";
import JSlogo from "../../assets/javascript-logo.png";
import FullStackimage from "../../assets/FullStackimage.png";
import UIUX from "../../assets/UI-UXImage.png";
import ReactLogo from "../../assets/ReactLogo.jpg";
import NextJsLogo from "../../assets/NodeJsLogo.jpeg";
import BootstrapLogo from "../../assets/bootstraplogo.png";
import MongoDBLogo from "../../assets/MongoDBLogo.png";
import ExpressJsLogo from "../../assets/ExpressLogo.png";
import CanvaLogo from "../../assets/CanvaLogo.png";
import FigmaLogo from "../../assets/FigmaLogo.png";




const Home = () => {
  return (
    <>
      <div className="home-container" data-aos="fade-down"
            data-aos-duration="2500">
        <div className="home-content">
          <p className="greeting">Hello, I'm</p>
          <h2 className="name">Mehul Rana</h2>
          <h2 className="role">Full-Stack Developer</h2>
          <p className="description">
            With knowledge in web development and design, I offer 
            the best projects resulting in quality work.
          </p>

          <div class="social-buttons">
            <a
              href="https://github.com/Mehuull"
              class="social-button social-button--github"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>

            <a
              href="hhttps://www.linkedin.com/in/mehul-rana-904b54340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              class="social-button social-button--linkedin"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://www.instagram.com/m3huul_10/#"
              class="social-button social-button--instagram"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=919586298992"
              class="social-button social-button--whatsapp"
              aria-label="WhatsApp"
            >
              <i class="fab fa-whatsapp"></i>
            </a>

            <a
              href="https://linktr.ee/mehuul"
              class="social-button social-button--Email"
              aria-label="Email"
            >
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>

          <button className="resume">see my resume</button>
        </div>

        <div className="home-image">
          <img src={profileImage} alt="Mehul Rana" />
        </div>
      </div>

      <div className="profession-title">
        <div className="first" data-aos="fade-down" data-aos-duration="2000">
          <span>| Creative Service</span>
          <h3>What i can do for service clients you?</h3>
        </div>
        <div className="second" data-aos="fade-down" data-aos-duration="2000">
          <p>
            I specialize in Full Stack Web Development, crafting responsive and
            dynamic websites with seamless user experiences. From designing
            elegant UI/UX interfaces to developing robust front-end and back-end
            solutions, I deliver projects that combine creativity, performance,
            and quality.
          </p>
        </div>
      </div>

      <div className="profession-container">
        {/**========== profession-card-1 ========== */}
        <div className="profession-card" id="profession-card1">
          <div className="profession-content">
            <h1
              class="title-main"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              Web Development
            </h1>

            <div class="icons" data-aos="fade-right" data-aos-duration="3000">
              <img src={HTMLlogo} alt="HTML5" class="icon" />
              <img src={CSSlogo} alt="CSS3" class="icon" />
              <img src={JSlogo} alt="JavaScript" class="icon" />
            </div>
            <ul class="features" data-aos="fade-right" data-aos-duration="3000">
              <li>
                <i class="fa-solid fa-bolt"></i> Building dynamic and responsive
                websites
              </li>
              <li>
                <i class="fa-solid fa-bolt"></i> Skilled in HTML, CSS, and
                JavaScript for front-end development
              </li>
              <li>
                <i class="fa-solid fa-bolt"></i> Expertise in adding smooth
                animations and transitions
              </li>
            </ul>
          </div>

          <div className="profession-image">
            <img
              src={Webdevelopment}
              alt=""
              data-aos="fade-left"
              data-aos-duration="3000"
            />
          </div>
        </div>

        {/**============== profession-card-2 ================ */}
        <div className="profession-card" id="profession-card2">
          <div className="profession-content">
            <h1
              class="title-main"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              Full Stack Development
            </h1>

            <div class="icons" data-aos="fade-right" data-aos-duration="3000">
              <img src={ReactLogo} alt="HTML5" class="icon" />
              <img src={NextJsLogo} alt="CSS3" class="icon" />
              <img src={BootstrapLogo} alt="JavaScript" class="icon" />
              <img src={ExpressJsLogo} alt="HTML5" class="icon" />
              <img src={MongoDBLogo} alt="CSS3" class="icon" />
              <img src={JSlogo} alt="JavaScript" class="icon" />
            </div>
            <ul class="features" data-aos="fade-right" data-aos-duration="3000">
              <li>
                <i class="fa-solid fa-bolt"></i>I create dynamic, responsive,
                and user-friendly websites using HTML, CSS, JavaScript, and
                modern frameworks like React and TailwindCSS.
              </li>
              <li>
                <i class="fa-solid fa-bolt"></i> On the back end, I build robust
                and scalable applications with Node.js and Express.js, ensuring
                smooth communication between the server and client.
              </li>
              <li>
                <i class="fa-solid fa-bolt"></i> I handle databases efficiently
                using MongoDB and MySQL, managing data securely and effectively.
              </li>
            </ul>
          </div>

          <div className="profession-image">
            <img
              src={FullStackimage}
              alt="Full-stack-image"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
          </div>
        </div>

        {/**========== profession-card-3 ========== */}
        <div className="profession-card">
          <div className="profession-content">
            <h1
              class="title-main"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              UI/UX Designer
            </h1>

            <div class="icons" data-aos="fade-right" data-aos-duration="3000">
              <img src={CanvaLogo} alt="HTML5" class="icon" />
              <img src={FigmaLogo} alt="CSS3" class="icon" />
            </div>
            <ul class="features" data-aos="fade-right" data-aos-duration="3000">
              <li>
                <i class="fa-solid fa-bolt"></i> I Transforms concepts into
                interactive designs for websites and apps.
              </li>
              <li>
                <i class="fa-solid fa-bolt"></i> Designs that look great on any
                device—big screens, small screens, or anything in between.
              </li>
            </ul>
          </div>

          <div className="profession-image">
            <img
              src={UIUX}
              alt="UI/UX image"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
          </div>
        </div>
        <h3 className="made_by">Made with 🧡 By MEHᏬL RANA</h3>
      </div>
    </>
  );
};

export default Home;
