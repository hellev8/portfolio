import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <img
                    src="/assets/images/your-photo.jpg"
                    alt="Your portrait"
                    className="about-photo"
                />
                <div className="about-text">
                    <h1>Your Name</h1>
                    <p>
                        I’m a photographer with a passion for capturing the beauty of the world.
                        Skilled in landscapes, portraits, and cityscapes, I aim to tell a story with every shot.
                    </p>
                    <h2>Skills</h2>
                    <ul>
                        <li>Adobe Lightroom & Photoshop</li>
                        <li>Portrait Photography</li>
                        <li>Studio Lighting</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
