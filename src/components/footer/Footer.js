import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="Footer-container">
          <div className="Footer-logo">Restaurant</div>
          <div className="social-icon">
            <div className="social-item">
              <img
                src="https://img.icons8.com/color/144/000000/facebook-new.png"
                alt=""
              />
            </div>
            <div className="social-item">
              <img
                src="https://img.icons8.com/color/144/000000/whatsapp--v1.png"
                alt=""
              />
            </div>
            <div className="social-item">
              <img
                src="https://img.icons8.com/fluent/144/000000/telegram-app.png"
                alt=""
              />
            </div>
            <div className="social-item">
              <img
                src="https://img.icons8.com/fluent/144/000000/twitter.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link">
          <p>Links</p>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Product</ul>
          <ul>Contact</ul>
        </div>
        <div className="newsLetter">
          <p>newsletter</p>
          <input type="text"></input>
          <div className="subscribe">
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
