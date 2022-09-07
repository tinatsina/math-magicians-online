import React from 'react';
import '../styles/Calculator.css';

const Calculator = () => (
  <div className="calculator-container">
    <table>
      <thead>
        <tr>
          <th colSpan="4">0</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AC</td>
          <td>+/-</td>
          <td>%</td>
          <td className="right-column">÷</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className="right-column">x</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className="right-column">-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className="right-column">+</td>
        </tr>
        <tr>
          <td colSpan="2">0</td>
          <td>.</td>
          <td className="right-column">=</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Calculator;
