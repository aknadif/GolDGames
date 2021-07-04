import React from "react";
import "./ContainerRatings.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const criticsrecomended = 80;
export default function ContainerRatings() {
  return (
    <div className="container wrap-ratings">
      <h5>Ratings</h5>
      <hr />
      <div className="row">
        <div className="col-6">
          <div className="ratings-round">
            <CircularProgressbar
              strokeWidth="4"
              value={criticsrecomended}
              text={`${criticsrecomended}%`}
              styles={buildStyles({ pathColor: `rgba(223, 156, 39, ${criticsrecomended / 100})`, textColor: "#F1F1F1", trailColor: "#262625", backgroundColor: "#262625" })}
            />
            <h3>Critics Recommended</h3>
          </div>
        </div>
        <div className="col-6">
          <div className="ratings-round">
            <CircularProgressbar
              strokeWidth="4"
              value={criticsrecomended}
              text={`${criticsrecomended}%`}
              styles={buildStyles({ pathColor: `rgba(223, 156, 39, ${criticsrecomended / 100})`, textColor: "#F1F1F1", trailColor: "#262625", backgroundColor: "#262625" })}
            />
            <h3>Top Critics Average</h3>
          </div>
        </div>
      </div>
      <div className="ratings-round bottom">
        <CircularProgressbar
          strokeWidth="4"
          value={criticsrecomended}
          text={`${criticsrecomended}%`}
          styles={buildStyles({ pathColor: `rgba(223, 156, 39, ${criticsrecomended / 100})`, textColor: "#F1F1F1", trailColor: "#262625", backgroundColor: "#262625" })}
        />
        <h3>Open Critics Rating</h3>
      </div>
    </div>
  );
}
