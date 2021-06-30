import React from 'react'
import "./CarouselVideo.css"

export default function CarouselVideo(props) {
    return (
        <div className="CarouselVideo">
            <div className="fullscreen-bg">
                <video loop muted autoPlay  className="fullscreen-bg__video">
                    <source src={props.video} type="video/mp4" />
                </video>
            </div>

            <div className="content">
                <div className="d-flex flex-row ">
                <div><a href="/" className="btn btn-primary">Back</a></div>
                <div><div className="vl"></div></div>
                <div className="flex-fill"><h4>Assassin's Creed Valhalla</h4></div>
                <div className="me-auto">
                    <form>
                    <input type="text" name="search" placeholder="Search.."/>
                    </form>
                </div>
                </div>
            </div>
            <hr className="line-horizontal"/>
        </div>
    )
}
