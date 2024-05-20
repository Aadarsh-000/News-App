import React from 'react';
import newsImage from './assets/newsImage.jpg'

export default function NewsItem({title, description, src, url}) {
    return (
            
            <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{maxWidth: "345px"}}>
                <img src={src ?? newsImage} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,70)}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
            
    )
}
