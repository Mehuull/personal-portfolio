import React from "react";
import "./Projects.css"; // Make sure to copy the CSS into this file
import Cakeshop from "../../assets/CAKESHOP.png";
import Fruto from "../../assets/FRUTO.png";
import FoodieChamp from "../../assets/FOODIECHAMP WEBSITE.png";
import projectimg from "../../assets/projectsvector2.png";
import myportfolio from "../../assets/myportfolio.png";
import elearning from "../../assets/E-LEARNING.png";
import Weatherapp from "../../assets/wheatherapp.png";

const projects = [
  {
    id: 1,
    title: "Rasilla",
    description:
      "rasilla-ice-creams webpage layout using html,css and javascript.",
    image: Cakeshop,
  },
  {
    id: 2,
    title: "Fruto-Naturals",
    description:
      "Fruit-juise and Milkshake bar webdesign using html,css and javascript.",
    image: Fruto,
  },
  {
    id: 3,
    title: "FoodieChamp",
    description:
      "Fully animated A Food Restaurant Website using html,css and javascript.",
    image: FoodieChamp,
  },
  
  {
    id: 4,
    title: "E-Learning",
    description: "Online learning platform using React(frontend)",
    image: elearning,
  },
  {
    id: 5,
    title: "MEHᏬL",
    description: "personal portfolio website using reactjs",
    image: myportfolio,
  },
  {
    id: 6,
    title: "Simple Weather App",
    description: "Wheather app for fatching weather data from weather API",
    image: Weatherapp,
  },
];

const Projects = () => {
  return (
    <div className="main">
      <div
        className="Heading-container"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="Heading-image">
          <img src={projectimg} alt="" />
        </div>
        <div className="Heading">
          <h1>Projects</h1>
        </div>
      </div>

      <h3 data-aos="fade-down" data-aos-duration="1000">
      | I am skilled in using modern web development technologies to build and deploy responsive web applications. I focus on integrating innovative tools and frameworks to create user-friendly and efficient solutions.
      </h3>
      <ul className="cards">
        {projects.map((project) => (
          <li key={project.id} className="cards_item">
            <div className="card" data-aos="fade-down" data-aos-duration="2000">
              <div className="card_image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card_content">
                <h2 className="card_title">{project.title}</h2>
                <p className="card_text">{project.description}</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="made_by">Made with 🧡 By MEHᏬL RANA</h3>
    </div>
  );
};

export default Projects;
