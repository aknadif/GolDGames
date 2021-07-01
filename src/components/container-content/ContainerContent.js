import React from 'react'
import ContainerBlog from '../container-blog/ContainerBlog'
import "./ContainerContent.css"

export default function ContainerContent() {
    return (
        <div className="row container-content">
            <div class="col-9">
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
            </div>
            <div class="col-3">
                <ContainerBlog />
            </div>
        </div>
    )
}
