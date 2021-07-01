import React from 'react'
import "./ButtonSpesification.css"

export default function ButtonSpefication(props) {
    return (
        <>
             <a href={props.link} className="btn button-spesification">{props.value}</a>
        </>
    )
}
