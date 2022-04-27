import React from "react";
import "./About.css";
import Chef from "../../asset/chef.png";

function About() {
  return (
    <section className="about">
      <div className="heading">
        <h1 className="top-text">
          <span>about</span> us
        </h1>
      </div>
      <div className="content">
        <div className="word">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            inventore officia recusandae odio tenetur soluta deserunt, dolore
            voluptates quaerat quibusdam nihil suscipit! Maiores nemo dolorem
            natus dolores iure minus saepe!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            velit, nobis tempora omnis amet eaque commodi voluptatibus possimus
            debitis. Dolor excepturi iure commodi animi nam voluptatibus sint
            quidem inventore dolores?
          </p>
          <a className="button">Learn more</a>
        </div>

        <div>
          <img src={Chef} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
