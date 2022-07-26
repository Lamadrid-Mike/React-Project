import React from "react";
import FaceLogo from "../logos/fbook.png";
import InstaLogo from "../logos/insta.png";
import TwitterLogo from "../logos/twitter.png";

//import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <>
      <footer id="footer">
        <div className="logos">
          <img src={FaceLogo} />
          <img src={TwitterLogo} />
          <img src={InstaLogo} />
        </div>
        <ul className="links" id="footerLinks">
          <li>
            <a>Meet Our Team</a>
          </li>
          <li>
            <a>Join Our Team</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
        </ul>
        <div className="copyRights">
          <p>&copy; Created by Ryan and Mike 2022</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
