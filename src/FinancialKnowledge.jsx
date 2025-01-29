import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { pdfjs } from "react-pdf"; // Ensure correct import
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./FinancialKnowledge.css";

// Correct worker version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js`;

function FinancialKnowledge() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Dummy PDF file (Replace with actual GitHub link)
  const pdfFiles = {
    Macroeconomics: "https://github.com/Abhi27nov/notesapp/blob/dev/assets/macroeconomics.pdf",
    Microeconomics: null,
    "Capital Budgeting": null,
    "Capital Financing": null,
    "Liquidity Management": null,
    "Financial Ratios": null,
    Equity: null,
    Debt: null,
    Currency: null,
    Commodity: null,
    "Alternate Investment": null,
    Derivatives: null,
    "Structured Products": null,
  };

  return (
    <div className="financial-knowledge-container">
      <h1>Financial Knowledge</h1>

      {/* Hyperlink Container */}
      <div className="topics-container">
        <div className="category">
          <h2>1) Economics:</h2>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles.Macroeconomics)}>
            (i) Macroeconomics
          </Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles.Microeconomics)}>
            (ii) Microeconomics
          </Link>
        </div>

        <div className="category">
          <h2>2) Corporate Finance:</h2>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles["Capital Budgeting"])}>
            (i) Capital Budgeting
          </Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles["Capital Financing"])}>
            (ii) Capital Financing
          </Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles["Liquidity Management"])}>
            (iii) Liquidity Management
          </Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles["Financial Ratios"])}>
            (iv) Financial Ratios
          </Link>
        </div>

        <div className="category">
          <h2>3) Financial Markets:</h2>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles.Equity)}>(i) Equity</Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles.Debt)}>(ii) Debt</Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles.Currency)}>(iii) Currency</Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles.Commodity)}>(iv) Commodity</Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles["Alternate Investment"])}>
            (v) Alternate Investment
          </Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles.Derivatives)}>(vi) Derivatives</Link>
          <Link to="#" onClick={() => setSelectedPdf(pdfFiles["Structured Products"])}>
            (vii) Structured Products
          </Link>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="pdf-viewer-container">
        {selectedPdf ? (
          <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
            <Viewer fileUrl={selectedPdf} />
          </Worker>
        ) : (
          <p className="pdf-placeholder">Click on a topic to view the PDF.</p>
        )}
      </div>
    </div>
  );
}

export default FinancialKnowledge;
