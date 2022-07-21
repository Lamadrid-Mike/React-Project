import React from "react";
import { Component } from "react";
import "../style.scss";

function Home() {
    return (
        <div className="container">
            <h1>Home</h1>
            <div className="row">
                <div className="col-md m-1">
                    <p>Test 1</p>
                </div>
                <div className="col-md m-1">
                    <p>Test 2</p>
                </div>
                <div className="col-md m-1">
                    <p>Test 3</p>      
                </div>
            </div>
        </div>
    );
}

export default Home;

