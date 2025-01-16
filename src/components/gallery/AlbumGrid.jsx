import React from "react";
import "../../styles/Albums.css";

const AlbumGrid = ({ albums, onAlbumClick }) => {
    return (
        <div className="album-grid">
            {albums.map((album) => (
                <div
                    className="album-card"
                    key={album.id}
                    onClick={() => onAlbumClick(album.id)}
                >
                    <img src={album.cover} alt={album.title} className="album-image" />
                    <h3 className="album-title">{album.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default AlbumGrid;
