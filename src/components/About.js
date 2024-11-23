import React from "react";
import Bird from "../images/bird image.jpg";


const About = () =>{
    return (
        <div className="about">
            <h1>About me</h1>
            <img src={Bird} alt="BIRD IMAGE"></img>
            <p>lorem ipsum dolor sit amet, aonmeture </p>
        </div>
    )
}
export default About;