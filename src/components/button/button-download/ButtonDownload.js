import React from 'react'
import "./ButtonDownload.css"

export default function ButtonDownload(props) {
    return (
        < >
            <a href={props.link} className="btn btn-download">{props.value}</a>
        </>
    )
}


