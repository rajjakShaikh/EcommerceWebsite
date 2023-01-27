import React from "react";
import Header from "./Header";
import "./headingStyle.css";
import Footer from "./Footer";


function Contact() {
  return (
    <>
    <div className="contact_page">
      <Header />
  

     
      <div className="mainbox">
        <h1>Contact Us</h1>
        <h4 class="hint-text">
          We'd love to hear from you, please drop us a line if you've any query
          related to our products or services.
        </h4>

        <div className="form">
          <label htmlFor="fname"> Name </label>
          <input type="text" placeholder="enter your name " required /> <br />
          <label for="inputEmail">Email</label>
          <input
            type="email"
            required
            placeholder="eg rahill77@gmail.com"
          />{" "}
          <br />
          <label for="text">Message</label>
          <input
            type="text"
            className="msg"
            required
            placeholder="Type here..."
          />{" "}
          <br /> <br /> <br />
          <button> Send Message </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;
