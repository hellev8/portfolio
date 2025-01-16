import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import images from "../assets/photos.json";
const Home = () => {

    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setCurrentImage(randomImage);
    }, []);

    return (
        <div
            className="home"
            style={{ backgroundImage: `url(${currentImage.src})` }}
        >
            <div className="home-content">
                <h1 className="name">Reali.</h1>
                <p className="photo-details">{currentImage.title} - {currentImage.description}</p>
            </div>
        </div>
    );
};

export default Home;
