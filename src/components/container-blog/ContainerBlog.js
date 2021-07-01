import React from 'react'
import ContainerCardBlog from '../container-card-blog/ContainerCardBlog'
import "./ContainerBlog.css"

export default function ContainerBlog() {
    return (
        <div className="container wrap-blog">
            <h5>Breaking News</h5>
            <hr />
            <ContainerCardBlog />
            <ContainerCardBlog />
            <ContainerCardBlog />
            <ContainerCardBlog />
            <ContainerCardBlog />
        </div>
    )
}
