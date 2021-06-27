import React from "react";
import "./Carousel.css";
import CP from "../../assets/img/CP2077.png";
import sc2 from "../../assets/img/sc2.jpg";
import Hades from "../../assets/img/Hades.jpg";
import cplogo from "../../assets/img/cplogo.png";

const Carousel = () => {
  return (
    <div className="container-fluid carousel mt-4">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={CP} className="d-block w-100" alt="/" />
            <div className="carousel-caption d-md-block">
              <img src={cplogo} alt="" />
              <h2>
                The Modern <br /> World
              </h2>
              <button className="btn btn-warning">Details</button>
            </div>
          </div>
          <div className="carousel-item ">
            <img src={sc2} className="d-block w-100" alt="/" />
            <div className="carousel-caption sc2 d-md-block">
              <h2>
                Modern <br /> Warfare Shooter
              </h2>
              <button className="btn btn-warning">Details</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Hades} className="d-block w-100" alt="/" />
            <div className="carousel-caption d-md-block">
              <h2>
                Battle Out <br /> Off Hell
              </h2>
              <button className="btn btn-warning">Details</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
