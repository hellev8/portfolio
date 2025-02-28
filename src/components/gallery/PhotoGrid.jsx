import React from "react";
import "../../styles/PhotoGrid.css";

const PhotoGrid = ({ photos, onPhotoClick, onClose }) => {
    return (
        <div className="photo-grid">
            <button className="close-album-btn" onClick={onClose}>
                ×
            </button>
            <div className="grid-container">
                {photos.map((photo) => {
                    const isHorizontal = photo.width > photo.height;
                    return (
                        <div
                            key={photo.id}
                            className="grid-item"
                            onClick={() => onPhotoClick(photo)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className={isHorizontal ? "horizontal-image" : ""}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PhotoGrid;
