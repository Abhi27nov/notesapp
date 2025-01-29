import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Resources.css';

function Resources() {
  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <div className="sub-tabs-container">
        <Link to="/resources/financial-knowledge" className="sub-tab">
          Financial Knowledge
        </Link>
        <Link to="/resources/financial-research" className="sub-tab">
          Financial Research
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Resources;
