import React from "react";
import "../home/Home.css";
import Header from "../../components/header/Header";
import Ads from "../../components/ads/Ads";
import Carousel from "../../components/carousel/Caraousel";
import Recomend from "../../components/container-recomend/Recomend";
import Kategori from "../../components/kategori-bar/Kategori";
import KontainerKategori from "../../components/container-kategori/KontainerKategori";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="container-fluid">
        <Carousel />
        <Ads />
        <Recomend />
        <Kategori />
        <KontainerKategori kategori="Action" />
        <KontainerKategori kategori="Adventure" />
        <KontainerKategori kategori="Arcade" />
        <KontainerKategori kategori="Casual" />
        <KontainerKategori kategori="Fighting" />
        <KontainerKategori kategori="Horror" />
        <KontainerKategori kategori="Multiplayer" />
        <KontainerKategori kategori="Puzzle" />
        <KontainerKategori kategori="Racing" />
        <KontainerKategori kategori="RPG" />
        <KontainerKategori kategori="Shooter" />
        <KontainerKategori kategori="Simulation" />
        <KontainerKategori kategori="Sport" />
        <KontainerKategori kategori="Strategy" />
      </div>
    </div>
  );
}

export default Home;
