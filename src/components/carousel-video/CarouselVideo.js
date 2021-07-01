import React from 'react'
import "./CarouselVideo.css"
import { BsCaretLeft } from 'react-icons/bs';
import ACVLogo from '../../assets/img/ACVLogo.png'
import ButtonDownload from '../button/button-download/ButtonDownload';
import ButtonSpesification from '../button/button-spesification/ButtonSpefication';

export default function CarouselVideo(props) {
    return (
        <div className="CarouselVideo">
            <div className="fullscreen-bg">
                <video loop muted autoPlay  className="fullscreen-bg__video">
                    <source src={props.video} type="video/mp4" />
                </video>
            </div>
            <div className="content">
                <div className="d-flex flex-row container ">
                <div><a href="/" className="btn btn-back"> <BsCaretLeft className="icon-back" /> Back</a></div>
                <div><div className="vl"></div></div>
                <div className="flex-fill"><h4>{props.title}</h4></div>
                <div className="me-auto">
                    <form>
                    <input type="text" name="search" placeholder="Search"/>
                    </form>
                </div>
                </div>
            <hr className="line-horizontal"/>
            <img src={ACVLogo} className="carousel-logo" />
            <div className="d-flex justify-content-evenly">
            <ButtonDownload link="/" value="Download"/>
            <ButtonSpesification link="/" value="Spesification"/>
            </div>
            </div>
        </div>
    )
}
