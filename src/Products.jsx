import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Products.css';

function Products() {
  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-tabs">
        <Link to="structured-products" className="tab-link">Structured Products</Link>
        <Link to="indices" className="tab-link">Indices/Custom Portfolios</Link>
        <Link to="base-financial-instruments" className="tab-link">Base Financial Instruments</Link>
      </div>
      <div className="products-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
