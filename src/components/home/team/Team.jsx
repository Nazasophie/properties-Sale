import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Our dedicated team of agents. Each member brings a wealth of knowledge, experience, and a passion for helping you find your dream home or investment property. <br> Our team is committed to guiding you through every step of the real estate process, ensuring that your experience is smooth, stress-free, and ultimately rewarding."
          />

          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <button className="btn3">{val.list} Listings</button>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location-dot"></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button>
                      <a href={`tel:0810807479`}>
                        <i className="fa fa-envelope"></i>
                        Message
                      </a>
                    </button>
                    <button className="btn4">
                      <a href={`tel:0810807479`}>
                        <i className="fa fa-phone-alt"></i>
                        Call
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
