import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import images from "../assets/photos.json";
import { words } from "../utils/constants";
import { getTranslation } from "../utils/translations/i18n";

const Home = ({ language }) => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [randomWord, setRandomWord] = useState("");

    useEffect(() => {
        const getRandomIndex = (array) => {
            return Math.floor(Math.random() * array.length);
        };

        const randomImageIndex = getRandomIndex(images);
        setCurrentImage(images[randomImageIndex]);

        const randomWordIndex = getRandomIndex(words);
        setRandomWord(getTranslation(words[randomWordIndex], language));
    }, [language]);

    return (
        <div
            className="home"
            style={{ backgroundImage: `url(${currentImage.src})` }}
        >
            <div className="home-content">
                <a href="/albums" className="name name-link">
                    <h1 className="name">{randomWord}</h1>
                </a>
            </div>
        </div>
    );
};

export default Home;
