import React from "react";
import "./Spesification.css";
export default function Spesification(props) {
  return (
    <div className="container-spesification">
      <div className="container-content-spesification">
        <h1>PC</h1>
        <hr />
        <div className="row">
          <div className="col-6 mt-4">
            <h4>Minimum</h4>
            <div className="row">
              <div className="col-1">
                <h5>DirectX</h5>
                <h5>OS</h5>
                <h5>CPU</h5>
                <h5>GPU</h5>
                <h5>RAM</h5>
                <h5>HDD</h5>
              </div>
              <div className="col-1">
                <div className="vl" />
              </div>
              <div className="col-10">
                <h6>{props.minimumdirectx}</h6>
                <h6>{props.minimumos}</h6>
                <h6>{props.minimumcpu}</h6>
                <h6>{props.minimumgpu}</h6>
                <h6>{props.minimumram}</h6>
                <h6>{props.minimumhdd}</h6>
              </div>
              <h5 className="mt-4">Additional Notes :</h5>
              <h6>Requires GPU with DirectX 12 (Feature level 12_0) Support</h6>
            </div>
          </div>
          <div className="col-6 mt-4">
            <h4>Recommended</h4>
            <div className="row">
              <div className="col-1">
                <h5>DirectX</h5>
                <h5>OS</h5>
                <h5>CPU</h5>
                <h5>GPU</h5>
                <h5>RAM</h5>
                <h5>HDD</h5>
              </div>
              <div className="col-1">
                <div className="vl" />
              </div>
              <div className="col-10">
                <h6>{props.recommenddirectx}</h6>
                <h6>{props.recommendos}</h6>
                <h6>{props.recommendcpu}</h6>
                <h6>{props.recommendgpu}</h6>
                <h6>{props.recommendram}</h6>
                <h6>{props.recommendhdd}</h6>
              </div>
              <h5 className="mt-4">Additional Notes :</h5>
              <h6>Requires GPU with DirectX 12 (Feature level 12_0) Support</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Spesification.defaultProps = {
  minimumdirectx: "DirectX 10",
  minimumos: "Windows 10 64-Bit Only",
  minimumcpu: "AMD Ryzen 3 1200 3.1 Ghz/ Intel i5 4460 3.2 Ghz",
  minimumgpu: "AMD R9 380 4 GB/ Geforce GTX 960 4 GB",
  minimumram: "8GB Dual Channel Mode",
  minimumhdd: "50 GB HDD (SSD Recommended)",
  recommenddirectx: "DirectX 12",
  recommendos: "Windows 10 64-Bit Only",
  recommendcpu: "AMD Ryzen 3 1200 3.1 Ghz/ Intel i5 4460 3.2 Ghz",
  recommendgpu: "AMD R9 380 4 GB/ Geforce GTX 960 4 GB",
  recommendram: "8GB Dual Channel Mode",
  recommendhdd: "50 GB HDD (SSD Recommended)",
};
