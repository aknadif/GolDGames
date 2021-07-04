import React from "react";
import "./Detail.css";
import CarouselVideo from "../../components/carousel-video/CarouselVideo";
import ContainerDesc from "../../components/container/desc/ContainerDesc";
import Header from "../../components/header/Header";
import ContainerContent from "../../components/container/content/ContainerContent";
import Spesification from "../../components/container/spesification/Spesification";
import ContainerDownload from "../../components/container/download/ContainerDownload";
import ContainerComment from "../../components/container/comment/ContainerComment";
import ContainerFooter from "../../components/container/footer/ContainerFooter";

function Detail() {
  return (
    <div className="Detail">
      <Header />
      <CarouselVideo video="/Assets/Video/video.mp4" title="Assassin's Creed Valhalla" />
      <div className="wrap-class" />
      <div className="bg-color">
        <div className="container detail">
          <ContainerDesc />
          <hr />
          <ContainerContent />
          <h2>Spesification</h2>
          <Spesification />
          <ContainerDownload />
          <ContainerComment />
        </div>
        <ContainerFooter />
      </div>
    </div>
  );
}

export default Detail;
