import React, { useState, useEffect } from "react";
import "../../styles/PhotoView.css";

const PhotoView = ({ photoIndex, photos, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(photoIndex);

    useEffect(() => {
        setCurrentIndex(photoIndex);
    }, [photoIndex]);

    if (currentIndex === null || !photos[currentIndex]) {
        return <div>No photo available</div>; // Fallback UI
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <div className="photo-view">
            {/* Titolo */}
            <div className="info-group">
                <p className="photo-info title">{photos[currentIndex].title}</p>
            </div>

            {/* Contenitore immagine */}
            <div className="photo-container">
                {/* Pulsante Chiudi */}
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>

                {/* Freccia sinistra */}
                <button className="nav-btn prev-btn" onClick={handlePrev}>
                    ◀
                </button>

                {/* Immagine */}
                <img
                    src={photos[currentIndex].src}
                    alt={photos[currentIndex].title}
                    className="photo"
                />

                {/* Freccia destra */}
                <button className="nav-btn next-btn" onClick={handleNext}>
                    ▶
                </button>
            </div>

        </div>
    );
};

export default PhotoView;
