import React, { useState, useRef } from 'react';
import './Slider.css';

const Slider = () => {
  const images = [
    './assets/hero.jpeg',
    './assets/hero.jpeg',
    './assets/hero.jpeg',
    './assets/hero.jpeg',
    './assets/hero.jpeg',
    './assets/hero.jpeg',
    './assets/hero.jpeg',
    './assets/hero.jpeg',
  ];

  const [clickedIndex, setClickedIndex] = useState(0);
  const sliderRef = useRef(null); // Ref for the slider container

  // Scroll to the clicked image
  const handleImageClick = (index) => {
    const newIndex = index; // Get the clicked index directly
    setClickedIndex(newIndex);

    if (sliderRef.current) {
      const clickedImage = sliderRef.current.children[newIndex];
      const containerWidth = sliderRef.current.clientWidth;

      // Calculate the offset to scroll
      const offsetLeft =
        clickedImage.offsetLeft - (containerWidth / 2) + (clickedImage.clientWidth / 2);

      sliderRef.current.scrollTo({
        left: offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='slider'>
      <div className='slider-images' ref={sliderRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${clickedIndex === index ? 'enlarged' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
