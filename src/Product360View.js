// src/components/Product360View.js
import React, { useState } from 'react';
import './Product360View.css';

const Product360View = () => {
  const totalImages = 36;
  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const imageUrls = Array.from({ length: totalImages }, (_, index) => `/phone/image${index + 1}.png`);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const moveX = event.clientX - startX;
      const stepSize = 10; // Adjust the step size for rotation sensitivity
      const currentStep = Math.floor(moveX / stepSize);
      let newIndex = (currentImage + currentStep) % totalImages;
      if (newIndex < 0) {
        newIndex = totalImages + newIndex;
      }
      setCurrentImage(newIndex);
    }
  };

  return (
    <div
      className="product-360-view"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <img src={imageUrls[currentImage]} alt={`360-degree view ${currentImage + 1}`} draggable="false"/>
    </div>
  );
};

export default Product360View;
