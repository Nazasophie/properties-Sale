import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to="/contact" className="btn5">  {/* Link to the Contact page */}
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="Beulah Real Estate Logo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month.</p>

              <div className="input flex">
                <input type="text" placeholder="Beulahrealestate@gmail.com" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2021 RentUP. Designed By devChi.</span>
      </div>
    </>
  );
};

export default Footer;

