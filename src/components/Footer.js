import React from 'react';
import "./style.scss";
import { Component } from "react";
//import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <>
            <div className='nav' id='footer'>
                <ul>
                    <li><a>Meet Our Team</a></li>
                    <li><a>Join Our Team</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Privacy Policy</a></li>
                </ul>
            </div>
        </>
    );
}

export default Footer;