import React from "react";
import ButtonDownload from "../../button/button-download/ButtonDownload";
import "./ContainerDownload.css";
export default function ContainerDownload() {
  return (
    <div className="container-download mt-4">
      <h1>Downloads</h1>
      <img src="https://www.pcinvasion.com/wp-content/uploads/2020/04/Assassins-Creed-Valhalla-12.jpg" alt="" />
      <button className="tombol-download tombol-1">Gdrive</button>
      <button className="tombol-download tombol-2">Gdrive</button>
      <button className="tombol-download tombol-3">Gdrive</button>
      <button className="tombol-download tombol-4">Gdrive</button>
    </div>
  );
}
