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
            <div className="sidebar">
                <p className="photo-info">
                    <strong>Title:</strong> {photos[currentIndex].title}
                </p>
                <p className="photo-info">
                    <strong>Description:</strong> {photos[currentIndex].description}
                </p>
            </div>
            <div className="photo-container">
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>
                <img
                    src={photos[currentIndex].src}
                    alt={photos[currentIndex].title}
                    className="photo"
                />
                <button className="nav-btn prev-btn" onClick={handlePrev}>
                    ◀
                </button>
                <button className="nav-btn next-btn" onClick={handleNext}>
                    ▶
                </button>
            </div>
        </div>
    );
};

export default PhotoView;
