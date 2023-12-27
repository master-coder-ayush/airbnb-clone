import React from "react"
import "./card.css"
import star from "../assets/images/star.png"

export default function Card(props){
    return (
        <div className="card">
            {/* The problem is in below line👇 */}
            <img src={`../assets/images/${props.img}`} alt="Katie Zaferes Photo" className="card-img" />
            <div className="card-stats">
                <img src={star} alt="Rating Star" className="card-star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}