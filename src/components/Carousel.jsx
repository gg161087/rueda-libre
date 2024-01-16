import React, { useState } from 'react';

export const Carousel = ({ bikes }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showImage = () => {
        if (bikes.length === 0) {
            return null;
        }

        const currentBike = bikes[currentIndex];

        return (
            <div>
                <img src={currentBike.image} alt={currentBike.model} />
                <div className="caption">
                    <p>{currentBike.brand}</p>
                    <p>{currentBike.model}</p>
                    <p>{currentBike.price}</p>
                </div>
            </div>
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bikes.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + bikes.length) % bikes.length);
    };

    return (
        <div id="carousel">
            <div id="carousel-container">
                <div className="titulo-carrusel">
                    <h2>Mirá las bicis que tenemos para vos:</h2>
                </div>
                <div id="carousel-images">{showImage()}</div>
                <div id="carousel-controls">
                    <button id="prevBtn" onClick={prevImage}>
                        Anterior
                    </button>
                    <button id="nextBtn" onClick={nextImage}>
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};