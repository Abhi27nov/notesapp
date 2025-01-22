import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';
import payoffData from './data/payoffData.json';

function App() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setSelectedProduct('');
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const productData =
    selectedClass && selectedProduct ? payoffData[selectedClass][selectedProduct] : null;

  const chartData = productData ? productData.payoffs : null;
  const descriptionData = productData ? productData.description : null;

  return (
    <div className="app-container">
      <div className="dropdown-section">
        <h2>Select a Class and Product</h2>
        <div className="dropdowns-container">
          <div className="dropdown-group">
            <label htmlFor="class-select">Parent Class: </label>
            <select id="class-select" value={selectedClass} onChange={handleClassChange}>
              <option value="" disabled>
                -- Select a Class --
              </option>
              {Object.keys(payoffData).map((className) => (
                <option key={className} value={className}>
                  {className}
                </option>
              ))}
            </select>
          </div>

          {selectedClass && (
            <div className="dropdown-group">
              <label htmlFor="product-select">Product: </label>
              <select id="product-select" value={selectedProduct} onChange={handleProductChange}>
                <option value="" disabled>
                  -- Select a Product --
                </option>
                {Object.keys(payoffData[selectedClass]).map((productName) => (
                  <option key={productName} value={productName}>
                    {productName}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      <div className="content-section">
        <div className="chart-container">
          {chartData ? (
            <>
              <h3>{selectedProduct} Payoff Chart</h3>
              <ResponsiveContainer width="95%" height="90%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="underlying"
                    label={{ value: "Underlying Performance (%)", position: "insideBottom", dy: 7 }}
                    domain={[-100, 100]}
                    type="number"
                  />
                  <YAxis
                    label={{ value: "Payoff (%)", angle: -90, position: "insideLeft" }}
                    domain={[0, 200]}
                  />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Line type="monotone" dataKey="payoff" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </>
          ) : (
            <p>Please select a product to view its payoff chart.</p>
          )}
        </div>

        <div className="description-container">
          {descriptionData ? (
            <>
              <h3>Product Description</h3>
              <ul className="description-list">
                {descriptionData.map((point, index) => (
                  <li key={index} className="description-item">{point}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Select a product to view its description.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
