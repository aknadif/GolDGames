import React from "react";
import "./Detail.css";
import CarouselVideo from "../../components/carousel-video/CarouselVideo";
import ContainerDesc from "../../components/container-desc/ContainerDesc";
import Header from "../../components/header/Header";

function Detail(props) {
  return (
    <div className="Detail">
      <Header />
      <CarouselVideo video="/Assets/Video/video.mp4"/>
      <div className="bg-color">
      <ContainerDesc />
      </div>
      
    </div>
  );
}

export default Detail;