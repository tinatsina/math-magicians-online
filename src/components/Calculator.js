import React, { useState } from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({});

  const onClickHandler = (e) => {
    const result = calculate(calcObj, e.target.innerHTML);
    setCalcObj(result);
  };
  return (
    // Destructuring the state
    <div className="calculator-container">
      <table>
        <thead>
          <tr>
            {/* Display the output */}
            <th colSpan="4">
              {calcObj.total}
              {calcObj.operation}
              {calcObj.next}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button type="button" onClick={onClickHandler}>AC</button></td>
            <td><button type="button" onClick={onClickHandler}>+/-</button></td>
            <td><button type="button" onClick={onClickHandler}>%</button></td>
            <td><button type="button" onClick={onClickHandler} className="right-column">÷</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={onClickHandler}>7</button></td>
            <td><button type="button" onClick={onClickHandler}>8</button></td>
            <td><button type="button" onClick={onClickHandler}>9</button></td>
            <td><button type="button" onClick={onClickHandler} className="right-column">x</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={onClickHandler}>4</button></td>
            <td><button type="button" onClick={onClickHandler}>5</button></td>
            <td><button type="button" onClick={onClickHandler}>6</button></td>
            <td><button type="button" onClick={onClickHandler} className="right-column">-</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={onClickHandler}>1</button></td>
            <td><button type="button" onClick={onClickHandler}>2</button></td>
            <td><button type="button" onClick={onClickHandler}>4</button></td>
            <td><button type="button" onClick={onClickHandler} className="right-column">+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="button" onClick={onClickHandler}>0</button></td>
            <td><button type="button" onClick={onClickHandler}>.</button></td>
            <td><button type="button" onClick={onClickHandler} className="right-column">=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
