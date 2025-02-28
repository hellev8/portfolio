import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import "../../styles/PhotoView.css";

const PhotoView = ({ photoIndex, photos, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(photoIndex);
    const [isScrolling, setIsScrolling] = useState(false);
    const thumbnailRefs = useRef([]);

    useEffect(() => {
        setCurrentIndex(photoIndex);
    }, [photoIndex]);

    useEffect(() => {
        if (thumbnailRefs.current[currentIndex]) {
            thumbnailRefs.current[currentIndex].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }, [currentIndex]);

    useEffect(() => {
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const handleThumbnailClick = (index) => {
        if (!isScrolling) {
            setCurrentIndex(index);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setIsScrolling(true);
            handleNext();
            setTimeout(() => setIsScrolling(false), 300);
        },
        onSwipedRight: () => {
            setIsScrolling(true);
            handlePrev();
            setTimeout(() => setIsScrolling(false), 300);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    if (currentIndex === null || !photos[currentIndex]) {
        return <div>No photo available</div>;
    }

    return (
        <div className="photo-view">
            <div className="info-group">
                <p className="photo-info title">{photos[currentIndex].title}</p>
            </div>
            <div className="photo-container">
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>
                <button className="nav-btn prev-btn" onClick={handlePrev}>
                    ◀
                </button>
                <img
                    src={photos[currentIndex].src}
                    alt={photos[currentIndex].title}
                    className="photo"
                    {...handlers}
                />
                <button className="nav-btn next-btn" onClick={handleNext}>
                    ▶
                </button>
            </div>
            <div className="carousel">
                {photos.map((photo, index) => (
                    <div key={photo.id} className="thumbnail-container">
                        <img
                            src={photo.src}
                            alt={photo.title}
                            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleThumbnailClick(index)}
                            ref={(el) => (thumbnailRefs.current[index] = el)}
                        />
                        {index === currentIndex && (
                            <div className="photo-index-overlay">
                                <p>{`${currentIndex + 1}/${photos.length}`}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoView;
