import React from "react";
import "./Cards.css";

export const Card = (props) => {
  return (
    <div className="card flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.poster} className="card-img-top" alt="/" />
        </div>
        <a href="detail">
          <div className="flip-card-back">
            <p>
              <font color="#E0A43B">Title : </font>
              {props.title}
            </p>
            <p>
              <font color="#E0A43B">Genre : </font>
              {props.genre}
            </p>
            <p>
              <font color="#E0A43B">Developer : </font>
              {props.developer}
            </p>
            <p>
              <font color="#E0A43B">Publisher : </font>
              {props.publisher}
            </p>
            <p>
              <font color="#E0A43B">Release Date : </font>
              {props.release_date}
            </p>
            <p>
              <font color="#E0A43B">File Size : </font>
              {props.file_size}
            </p>
            <p>
              <font color="#E0A43B">Mirrors : </font>
              {props.mirrors}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
Card.defaultProps = {
  title: "Valorant",
  genre: "FPS",
  developer: "Riot Games",
  publisher: "Riot Games",
  release_date: "June 2, 2020",
  file_size: "14.4GB",
  mirrors: "Google Drive, Mediafire, Uptobox, Torrent",
};
