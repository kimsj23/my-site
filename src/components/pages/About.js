import React from "react";
import "./About.css";
import pic from "../../images/jason.JPG";

function About() {
  return (
    <div className="AboutMain">
      <img src={pic} alt="myself" />
      <h1 className="AboutHeader">About Me</h1>
      <p>
        Hello! Thank you for checking out my personal page. My name is Jason
        Kim. A graduate of Econ/Math at UCLA, I am a former CPA turned Web
        Developer. A self taught developer in the latest front-end tech, with a
        passion for technology and building things in general.
      </p>
      <p>
        I am open to opportunities that can allow me to hone my skills and grow
        as a developer.
      </p>
    </div>
  );
}

export default About;
