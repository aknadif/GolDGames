import React from "react";
import ContainerBlog from "../blog/ContainerBlog";
import ContainerRatings from "../ratings/ContainerRatings";
import "./ContainerContent.css";

export default function ContainerContent() {
  return (
    <div className="row container-content">
      <div className="col-9">
        <div className="row">
          <div className="col-3">
            <div className="row d-flex">
              <div className="col-1">
                <div className="vl-content"></div>
              </div>
              <div className="col-10">
                <h6>Title</h6>
                <p>Assassin's Creed Valhalla</p>
                <h6 className="enter">Genre</h6>
                <p>Action, RPG, Advanture</p>
                <h6 className="enter">Developer</h6>
                <p>Ubisoft</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row d-flex">
              <div className="col-1">
                <div className="vl-content"></div>
              </div>
              <div className="col-10">
                <h6>Publisher</h6>
                <p>Ubisoft</p>
                <h6 className="enter">Platform</h6>
                <p>Windows</p>
                <h6 className="enter">Languages</h6>
                <p>English</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row d-flex">
              <div className="col-1">
                <div className="vl-content"></div>
              </div>
              <div className="col-10">
                <h6>Release Date</h6>
                <p>Nov 10 ,2020</p>
                <h6 className="enter">File Size</h6>
                <p>42.69 GB / Split 9 Partst</p>
                <h6 className="enter">Mirrors</h6>
                <p>OneDrive, Google Drive, MediaFire, Dropbox, Utorrent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-img">
          <div className="row">
            <div className="col-6 text-center img-top">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XY_tyASNGBqakXcTLN0eHQHaEK%26pid%3DApi&f=1" />
            </div>
            <div className="col-6 text-center img-top">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OGMz101XJnNt5IAPc3qQOwHaEK%26pid%3DApi&f=1" />
            </div>
          </div>
          <div className="text-center img-bottom">
            <img src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2020/11/09/ac-valhalla-guide-hub-header-image_feature.jpg" />
          </div>
        </div>
      </div>
      <div className="col-3">
        <ContainerBlog />
        <ContainerRatings />
      </div>
    </div>
  );
}
