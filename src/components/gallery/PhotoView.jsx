import React, {useState, useEffect, useRef} from "react";
import { useSwipeable } from "react-swipeable";
import "../../styles/PhotoView.css";

const PhotoView = ({ photoIndex, photos, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(photoIndex);
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
        // Aggiungi la classe no-scroll al body quando il componente è montato
        document.body.classList.add("no-scroll");
        return () => {
            // Rimuovi la classe no-scroll dal body quando il componente è smontato
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
        setCurrentIndex(index);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    if (currentIndex === null || !photos[currentIndex]) {
        return <div>No photo available</div>; // Fallback UI
    }
    return (
        <div className="photo-view" {...handlers}>
            {/* Titolo */}
            <div className="info-group">
                <p className="photo-info title">{photos[currentIndex].title}</p>
                {/*<p className="photo-description">{photos[currentIndex].description}</p>*/}
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

            {/* Carosello */}
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
