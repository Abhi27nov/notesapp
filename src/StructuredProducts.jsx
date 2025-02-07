import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import './StructuredProducts.css';
import payoffData from './data/payoffData.json';

function StructuredProducts() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [isGoClicked, setIsGoClicked] = useState(false);
  const [showBarrier, setShowBarrier] = useState(true); // Toggle state for barrier

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setSelectedProduct('');
    setIsGoClicked(false);
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
    setIsGoClicked(false);
  };

  const handleGoClick = () => {
    setIsGoClicked(true);
  };

  const handleBarrierToggle = () => {
    setShowBarrier((prev) => !prev);
  };

  const productData =
    selectedClass && selectedProduct && isGoClicked ? payoffData[selectedClass][selectedProduct] : null;

  const chartData = productData ? productData.payoffs : null;
  const descriptionData = productData ? productData.description : null;

  return (
    <div className="structured-products-page">
      <h1>Structured Products</h1>

      <div className="dropdown-section">
        <h2>Select a Class and Product</h2>
        <div className="dropdowns-container">
          <div className="dropdown-group">
            <label htmlFor="class-select">Parent Class: </label>
            <select id="class-select" value={selectedClass} onChange={handleClassChange}>
              <option value="" disabled>-- Select a Class --</option>
              {Object.keys(payoffData).map((className) => (
                <option key={className} value={className}>{className}</option>
              ))}
            </select>
          </div>

          {selectedClass && (
            <div className="dropdown-group">
              <label htmlFor="product-select">Product: </label>
              <select id="product-select" value={selectedProduct} onChange={handleProductChange}>
                <option value="" disabled>-- Select a Product --</option>
                {Object.keys(payoffData[selectedClass]).map((productName) => (
                  <option key={productName} value={productName}>{productName}</option>
                ))}
              </select>
            </div>
          )}

          {selectedClass && selectedProduct && (
            <button
              className="go-button"
              onClick={handleGoClick}
              disabled={!selectedClass || !selectedProduct}
            >
              Go
            </button>
          )}
        </div>
      </div>

      {isGoClicked && (
        <div className="content-section">
          <div className="chart-container">
            {chartData ? (
              <>
                {/* Chart Header and Barrier Toggle in Same Line */}
                <div className="chart-header">
                  <h3>{selectedClass} - {selectedProduct}</h3>
                  <div className="toggle-container">
                    <label className="toggle-label">Barrier</label>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={showBarrier} 
                        onChange={handleBarrierToggle} 
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>

                <ResponsiveContainer width="95%" height="90%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="underlying"
                      label={{
                        value: 'Underlying Performance (%)',
                        position: 'insideBottom',
                        dy: 7,
                      }}
                      domain={[-100, 100]}
                      type="number"
                    />
                    <YAxis
                      label={{
                        value: 'Product Return (%)',
                        angle: -90,
                        position: 'insideLeft',
                      }}
                      domain={[-100, 100]}
                    />
                    <Tooltip />

                    {/* Static Legend - "Payoff" is always visible, "Barrier" appears/disappears dynamically */}
                    <Legend 
                      verticalAlign="top" 
                      align="center" 
                      height={36} 
                      payload={[
                        { value: 'Payoff', type: 'line', id: 'payoff', color: '#8884d8' },
                        ...(showBarrier ? [{ value: 'Barrier', type: 'line', id: 'barrier', color: 'red' }] : [])
                      ]}
                    />

                    {/* Payoff Line (Always Visible) */}
                    <Line 
                      type="monotone" 
                      dataKey="payoff" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                      name="Payoff"
                    />

                    {/* Barrier Line (Appears Based on Toggle) */}
                    {showBarrier && productData.payoffs.some(item => item.barrier !== undefined) && (
                      <Line
                        type="monotone"
                        dataKey="barrier"
                        stroke="red"
                        activeDot={{ r: 8 }} 
                        name="Barrier"
                      />
                    )}
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
      )}
    </div>
  );
}

export default StructuredProducts;
