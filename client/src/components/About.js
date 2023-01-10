import React from "react";
import mathreeLogo from "../mathreelogo.png";


const About = () => {
  return (
    <div className="about-container">
      <div className="about-layout">
        <h1 className="about_us">About</h1>
        <div>
          <section className="mission_vision">
            <div className="mission_container">
              <p className="mission">MISSION</p>
              <p>
                We aim to make transportation easy to access and also make it convinient for all our customers. Minimize our clients'
                risk, expense and time in acquiring an appropriate a safe ride.
              </p>
            </div>
            <div className="mission_container">
              <p className="mission">VISION</p>
              <p>
                Our vision is strive to make positive contribution towards
                developing a robust systems of transportation which is paramount in
                assisting the relevant civil servants cope with distance and,
                and unnecessary need to connect with the Central Business District unless absolutely needed.
                Our clients we offer a range of routes that can be followed and plan to expand to make it more versatile and eco-friendly.
              </p>
            </div>
          </section>
          <section className="image_values">
            <div>
              <img
                className="about-image"
                src={mathreeLogo}
                alt="Web Logo"
                default
                height={300}
                width={360}
              />
            </div>
            <div className="vision_container">
              <p className="vision">
                WHY US ?
              </p>
              <ul >
                <li> We are fast </li>
                <li>We are secure</li>
                <li>We are offering an alternative that doesn't pass CBD</li>
                <li>We offer one way and two-way packages if interested</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
