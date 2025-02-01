import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FinancialKnowledge.css";

const slides = [
  { title: "Introduction to Macroeconomics", content: "Macroeconomics studies the overall economy, including inflation, GDP, and unemployment." },
  { title: "Gross Domestic Product (GDP)", content: "GDP measures the total value of goods and services produced within a country in a given period." },
  { title: "Inflation & Deflation", content: "Inflation is the rise in prices over time, while deflation is the decrease in prices." },
  { title: "Unemployment Types", content: "Unemployment includes frictional, structural, cyclical, and seasonal unemployment." },
  { title: "Monetary vs. Fiscal Policy", content: "Monetary policy is controlled by central banks, while fiscal policy is controlled by government spending and taxation." }
];

const topics = [
  { 
    category: "Economics", 
    subtopics: ["Macroeconomics", "Microeconomics"] 
  },
  { 
    category: "Corporate Finance", 
    subtopics: ["Capital Budgeting", "Capital Financing", "Liquidity Management", "Financial Ratios"] 
  },
  { 
    category: "Financial Markets", 
    subtopics: ["Equity", "Debt", "Currency", "Commodity", "Alternative Investment", "Derivatives", "Structured Products"] 
  },
  { 
    category: "Investments", 
    subtopics: ["Stocks", "Bonds", "Mutual Funds", "Hedge Funds"] 
  }
];

function FinancialKnowledge() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="financial-knowledge-container">
      <h1>Financial Knowledge</h1>
      
      {/* Dropdown Topics Container */}
      <div className="dropdowns-container">
        {topics.map((topic) => (
          <div key={topic.category} className="dropdown-section">
            <button className="dropdown-button" onClick={() => toggleCategory(topic.category)}>
              {topic.category}
            </button>
            <AnimatePresence>
              {expandedCategory === topic.category && (
                <motion.ul 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="dropdown-list"
                >
                  {topic.subtopics.map((subtopic) => (
                    <li key={subtopic} className="dropdown-item">
                      <a href="#">{subtopic}</a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Animated Slideshow */}
      <div className="slideshow-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].content}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default FinancialKnowledge;
