import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './FinancialKnowledge.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FinancialKnowledge = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const pdfFiles = {
    macroeconomics: 'https://raw.githubusercontent.com/your-github-repo/path-to/Macroeconomics.pdf',
  };

  const openPdfViewer = (topic) => {
    setSelectedTopic(topic);
    setCurrentPage(1);
  };

  return (
    <div className="financial-knowledge-container">
      <h1>Financial Knowledge</h1>
      <div className="topics-container">
        <h2>Topics:</h2>
        <div className="topic-section">
          <h3>1) Economics:</h3>
          <ul>
            <li>
              <button className="pdf-button" onClick={() => openPdfViewer('macroeconomics')}>
                Macroeconomics
              </button>
            </li>
            <li><a href="#">Microeconomics</a></li>
          </ul>
        </div>
        <div className="topic-section">
          <h3>2) Corporate Finance:</h3>
          <ul>
            <li><a href="#">Capital Budgeting</a></li>
            <li><a href="#">Capital Financing</a></li>
            <li><a href="#">Liquidity Management</a></li>
            <li><a href="#">Financial Ratios</a></li>
          </ul>
        </div>
        <div className="topic-section">
          <h3>3) Financial Markets:</h3>
          <ul>
            <li><a href="#">Equity</a></li>
            <li><a href="#">Debt</a></li>
            <li><a href="#">Currency</a></li>
            <li><a href="#">Commodity</a></li>
            <li><a href="#">Alternative Investment</a></li>
            <li><a href="#">Derivatives</a></li>
            <li><a href="#">Structured Products</a></li>
          </ul>
        </div>
      </div>

      {selectedTopic && pdfFiles[selectedTopic] && (
        <div className="pdf-viewer-container">
          <div className="pdf-navigation">
            <button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}>
              ← Prev
            </button>
            <span>
              Page {currentPage} of {numPages}
            </span>
            <button disabled={currentPage >= numPages} onClick={() => setCurrentPage(currentPage + 1)}>
              Next →
            </button>
          </div>
          <Document file={pdfFiles[selectedTopic]} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
            <Page pageNumber={currentPage} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default FinancialKnowledge;
