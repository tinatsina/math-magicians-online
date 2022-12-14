import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import Calculator from './Calculator';
import HomePage from './HomePage';
import MathQuote from './MathQuote';

const NavigationBar = () => (
  <nav>
    <h1 className="navbar-logo">MATH MAIGICIANS</h1>
    <ul className="navbar-list">
      <li><Link to="MathQuote">MathQuote</Link></li>
      <li><Link to="Calculator">Calculator</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="Calculator" element={<Calculator />} />
      <Route path="MathQuote" element={<MathQuote />} />
    </Routes>
  </nav>
);

export default NavigationBar;
