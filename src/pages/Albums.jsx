import React, { useState } from "react";
import AlbumGrid from "../components/gallery/AlbumGrid";
import PhotoGrid from "../components/gallery/PhotoGrid";
import PhotoView from "../components/gallery/PhotoView";
import "../styles/Albums.css";
import albums from "../assets/albums.json";

const Albums = () => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    const handleAlbumClick = (albumId) => {
        const album = albums.find((a) => a.id === albumId);
        setSelectedAlbum(album);
    };

    const handlePhotoClick = (photo) => {
        const photoIndex = selectedAlbum.photos.findIndex((p) => p.id === photo.id);
        setSelectedPhotoIndex(photoIndex);
    };

    const handleClosePhotoView = () => {
        setSelectedPhotoIndex(null);
    };

    const handleCloseAlbumView = () => {
        setSelectedAlbum(null);
    };

    return (
        <div className="albums">
            {selectedPhotoIndex !== null ? (
                <PhotoView
                    photoIndex={selectedPhotoIndex}
                    photos={selectedAlbum.photos}
                    onClose={handleClosePhotoView}
                />
            ) : selectedAlbum ? (
                <PhotoGrid
                    photos={selectedAlbum.photos}
                    onPhotoClick={handlePhotoClick}
                    onClose={handleCloseAlbumView}
                />
            ) : (
                <AlbumGrid albums={albums} onAlbumClick={handleAlbumClick} />
            )}
        </div>
    );
};

export default Albums;
