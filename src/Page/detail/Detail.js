import React from "react";
import "./Detail.css";
import CarouselVideo from "../../components/carousel-video/CarouselVideo";
import ContainerDesc from "../../components/container-desc/ContainerDesc";
import Header from "../../components/header/Header";
import ContainerContent from "../../components/container-content/ContainerContent";

function Detail(props) {
  return (
    <div className="Detail">
      <Header />
      <CarouselVideo video="/Assets/Video/video.mp4" title="Assassin's Creed Valhalla"/>
      <div className="wrap-class" />
      <div className="bg-color">
      <div className="container">
      <ContainerDesc />
      <hr/>
      <ContainerContent />



      </div>
      </div>
      
    </div>
  );
}

export default Detail;