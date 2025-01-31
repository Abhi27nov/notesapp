import React, { useState } from "react";
import { Link } from "react-router-dom";
import MacroeconomicsSlideshow from "./MacroeconomicsSlideshow"; // Import slideshow component
import "./FinancialKnowledge.css";

function FinancialKnowledge() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="financial-knowledge-container">
      <h1>Financial Knowledge</h1>

      {/* Hyperlink Container */}
      <div className="topics-container">
        <div className="category">
          <h2>1) Economics:</h2>
          <Link to="#" onClick={() => setSelectedTopic("Macroeconomics")}>
            (i) Macroeconomics
          </Link>
          <Link to="#" onClick={() => setSelectedTopic("Microeconomics")}>
            (ii) Microeconomics (Coming Soon)
          </Link>
        </div>

        <div className="category">
          <h2>2) Corporate Finance:</h2>
          <Link to="#">(i) Capital Budgeting (Coming Soon)</Link>
          <Link to="#">(ii) Capital Financing (Coming Soon)</Link>
        </div>
      </div>

      {/* Render Slideshow Instead of PDF */}
      <div className="content-container">
        {selectedTopic === "Macroeconomics" ? (
          <MacroeconomicsSlideshow />
        ) : (
          <p className="placeholder-text">Click on a topic to view content.</p>
        )}
      </div>
    </div>
  );
}

export default FinancialKnowledge;
