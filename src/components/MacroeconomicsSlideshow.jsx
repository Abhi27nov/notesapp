import React, { useState } from "react";
import "./MacroeconomicsSlideshow.css"; // Ensure CSS is updated

const slides = [
  {
    title: "Introduction to Macroeconomics",
    description: "Macroeconomics deals with the overall economic environment, including GDP, inflation, and unemployment.",
    image: "slide1.jpg",
  },
  {
    title: "Gross Domestic Product (GDP)",
    description: "GDP measures the total market value of goods and services produced in a country over a specific period.",
    image: "slide2.jpg",
  },
  {
    title: "Inflation & Deflation",
    description: "Inflation occurs when prices rise over time; deflation is the opposite, where prices fall.",
    image: "slide3.jpg",
  },
  {
    title: "Unemployment Types",
    description: "Three major types of unemployment: frictional, structural, and cyclical.",
    image: "slide4.jpg",
  },
];

function MacroeconomicsSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slide">
        <img src={`/assets/${slides[currentSlide].image}`} alt="Slide" />
        <div className="slide-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default MacroeconomicsSlideshow;
