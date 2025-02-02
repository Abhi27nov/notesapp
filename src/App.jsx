import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Resources from './Resources';
import StructuredProducts from './StructuredProducts';
import Indices from './Indices';
import BaseFinancialInstruments from './BaseFinancialInstruments';
import FinancialKnowledge from "./components/FinancialKnowledge";
import FinancialResearch from './FinancialResearch';

function App() {
  return (
    <Router>
      <div>
        {/* Always render Navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path="structured-products" element={<StructuredProducts />} />
            <Route path="indices" element={<Indices />} />
            <Route path="base-financial-instruments" element={<BaseFinancialInstruments />} />
          </Route>
          <Route path="/resources" element={<Resources />}>
            <Route path="financial-knowledge" element={<FinancialKnowledge />} />
            <Route path="financial-research" element={<FinancialResearch />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
