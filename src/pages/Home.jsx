import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import images from "../assets/photos.json";

const Home = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [randomWord, setRandomWord] = useState("");
    const words = ["halo", "how are you?", "what's happening?", "todo bien?", "Stronzo.", "cornuda", "asshole","vaffanculo"];

    useEffect(() => {
        const getRandomIndex = (array) => {
            return Math.floor(Math.random() * array.length);
        };

        const randomImageIndex = getRandomIndex(images);
        setCurrentImage(images[randomImageIndex]);

        const randomWordIndex = getRandomIndex(words);
        setRandomWord(words[randomWordIndex]);
    }, []);

    return (
        <div
            className="home"
            style={{ backgroundImage: `url(${currentImage.src})` }}
        >
            <div className="home-content">
                <h1 className="name">{randomWord}</h1>
            </div>
        </div>
    );
};

export default Home;
