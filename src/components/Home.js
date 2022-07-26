import React from "react";
import "../style.scss";
import { Card, CardImg, CardText, CardBody, CardTitle, RenderCard } from 'reactstrap';

function Home(props) {
  return (

    <div className="container" id="homepage">
        <div className="row">
                <h1>Home</h1>
            <div className="col">
                Updates
            </div>
            <div className="col">
                Features
            </div>
        </div>                                                  
    </div>
  );
}

export default Home;
