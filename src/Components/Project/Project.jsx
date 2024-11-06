import React, { useState, useEffect } from 'react';
import './Project.css';

const Project = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [slideIndex, setSlideIndex] = useState(0);

  const galleryImages = [
    './assets/ntpl_proj1.jpeg',
    './assets/ntpl_proj2.jpeg',
    './assets/ntpl_proj3.jpeg',
    './assets/ntpl_proj4.jpeg',
    './assets/ntpl_proj1_1.jpeg',
    './assets/ntpl_proj2_2.jpeg',
    './assets/ntpl_proj3_3.jpeg',
    './assets/ntpl_proj4_4.jpeg',
  ];

  const Galeryimage = [
    './assets/ntplproj1.jpeg',
    './assets/ntplproj2.jpeg',
    './assets/ntplproj3.jpeg',
    './assets/ntplproj4.jpeg',
  ];

  const openLightbox = (imgSrc) => {
    setCurrentImage(imgSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
  };

  const showSlide = (index) => {
    const totalSlides = Galeryimage.length;
    setSlideIndex((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % Galeryimage.length);
  };

  const prevSlide = () => {
    showSlide(slideIndex - 1);
  };


  return (
    <div>
      <header className="header">
        <div className="header-content"></div>
      </header>

      <section className="gallery">
        <h2>Image Gallery</h2>
        <div className="gallery-container">
          {galleryImages.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src}
                alt={`Image ${index + 1}`}
                onClick={() => openLightbox(src)}
              />
            </div>
          ))}
        </div>

        <div className="gallery-description">
          <h3>Explore Our Work</h3>
          <p>
            Discover our curated selection of images showcasing the beauty and
            innovation of our projects. Each image represents our commitment to
            quality and excellence in every endeavor. We invite you to delve
            into the visual journey of our work, illustrating our dedication to
            creating impactful solutions.
          </p>
          <p>
            Whether you're looking for inspiration or just browsing, we hope you
            enjoy the experience and find something that resonates with you!
          </p>
        </div>
      </section>

      <div className="carousel-container1">
        <div className="carousel-slide1" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          {Galeryimage.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {lightboxOpen && (
        <div id="lightbox" className="lightbox" onClick={closeLightbox}>
          <img id="lightbox-img" src={currentImage} alt="Lightbox Image" />
        </div>
      )}
    </div>
  );
};

export default Project;
