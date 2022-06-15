import React from "react";
//import Katie from "../images/katie-zaferes.png";
import Star from "../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`/experience-images/${props.img}`} className="card--image" alt={props.alt}/>
            <div>
                <p>Sold Out</p>
            </div>
            <div className="card--stats">
                <img src={Star} alt="star icon" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
// <img src={require('./katie-zaferes.png').default}className="card--image"/>
// <img src={Katie} alt={props.alt} className="card--image"/>