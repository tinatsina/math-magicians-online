import React from 'react';
import '../styles/Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (e) => {
    console.log(e.target.innerHTML);
  }

  render() {
    return (
      <div className="calculator-container">
        <table>
          <thead>
            <tr>
              <th colSpan="4">0</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button type="button">AC</button></td>
              <td><button type="button">+/-</button></td>
              <td><button type="button">%</button></td>
              <td><button type="button" className="right-column">÷</button></td>
            </tr>
            <tr>
              <td><button type="button">7</button></td>
              <td><button type="button">8/-</button></td>
              <td><button type="button">9</button></td>
              <td><button type="button" className="right-column">x</button></td>
            </tr>
            <tr>
              <td><button type="button">4</button></td>
              <td><button type="button">5</button></td>
              <td><button type="button">6</button></td>
              <td><button type="button" className="right-column">-</button></td>
            </tr>
            <tr>
              <td><button type="button">1</button></td>
              <td><button type="button">2</button></td>
              <td><button type="button">4</button></td>
              <td><button type="button" className="right-column">+</button></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="button">0</button></td>
              <td><button type="button">.</button></td>
              <td><button type="button" className="right-column">=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
