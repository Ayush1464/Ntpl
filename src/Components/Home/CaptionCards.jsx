import React from "react";
import "./CaptionCards.css"; // Ensure you have the appropriate CSS

const CaptionCards = () => {
  const cards = [
    {
      icon: "fas fa-code",
      caption: "Software Development",
      description:
        "Our expert developers create scalable, high-performance software, ensuring seamless integration and adaptability for your organization’s growth.",
      imgSrc: "./assets/sd.png",
    },
    {
      icon: "fas fa-desktop",
      caption: "UI / UX Service",
      description:
        "Craft captivating user experiences with our UI/UX design services. Our skilled designers focus on usability and visual aesthetics to create intuitive, user-friendly interfaces that keep your customers engaged and satisfied.",
      imgSrc: "./assets/ui.png",
    },
    {
      icon: "fas fa-mobile-alt",
      caption: "Mobile Apps",
      description:
        "Stay ahead of the curve with our cutting-edge mobile app development services. We build native, hybrid, and cross-platform applications for iOS, Android, and other platforms, delivering superior performance and user experiences.",
      imgSrc: "./assets/mobileapp.png",

    },
    {
      icon: "fas fa-comments",
      caption: "IT Consulting",
      description:
        "Optimize your IT infrastructure with our comprehensive consulting services. Our experienced consultants help you evaluate, strategize, and implement best-in-class solutions, driving efficiency and maximizing your return on investment.",
      imgSrc: "./assets/it.png",
    },
  ];

  return (
    <div className="main-container1">
      {cards.map((card, index) => (
        <div className="card-item" key={index}>
          <div className="icon-style">
            <img src={card.imgSrc} alt={card.caption} />
          </div>
          <div className="title-caption">{card.caption}</div>
          <div className="description-text">{card.description}</div>
        </div>
      ))}
    </div>
  );
};

export default CaptionCards;
