import "./card.css"
import star from "../assets/images/star.png"

export default function Card(props){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`./src/assets/images/${props.item.coverImg}`} alt="Katie Zaferes Photo" className="card-img" />
            <div className="card-stats">
                <img src={star} alt="Rating Star" className="card-star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) •&nbsp;</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <h2 className="card-title">{props.item.title}</h2>
            <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}