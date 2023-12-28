import hero from "../assets/images/photo-grid.png";
import "./hero.css"

export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-img">
                <img src={hero} alt="Collage of Images from Airbnb" />
            </div>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}