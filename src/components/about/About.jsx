import React from "react";
import { Link } from "react-router-dom";  // Make sure to import Link
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Our Agency Story" subtitle="Check out our company story and work process" />
            <p>Beulah Real Estate is a premier real estate firm specializing in luxury residential and commercial properties. Known for its commitment to excellence...</p>
            <p>Beulah Real Estate offers a curated selection of high-end homes, elegant apartments, and prime commercial spaces in some of the most sought-after locations. With a focus on quality, innovation, and client satisfaction, Beulah Real Estate is dedicated to helping clients find their perfect property, whether it's a dream home, a lucrative investment, or a prime business location. Combining deep market knowledge with personalized service, Beulah Real Estate ensures a seamless and rewarding experience for buyers, sellers, and investors alike.</p>
            <Link to="/about" className="btn2">
              More About Us
            </Link>
          </div>
          <div className="right row">
            <img src={img} alt="About Us" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

