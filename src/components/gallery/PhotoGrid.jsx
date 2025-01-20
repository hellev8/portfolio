import React from "react";
import "../../styles/PhotoGrid.css";

const PhotoGrid = ({ photos, onPhotoClick, onClose }) => {
    //let random = Math.floor(Math.random() * 10) + 1;
    return (
        <div className="photo-grid"
        >
            <button className="close-album-btn" onClick={onClose}>
                ×
            </button>
            <div className="grid-container">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="grid-item"
                        onClick={() => onPhotoClick(photo)}
                    >
                        <img src={photo.src} alt={photo.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGrid;
