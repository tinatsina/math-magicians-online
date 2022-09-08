import React from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {};
  }

  onClickHandler = (e) => {
    const result = calculate(this.state, e.target.innerHTML);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      // Destructuring the state
      <div className="calculator-container">
        <table>
          <thead>
            <tr>
              {/* Display the output */}
              <th colSpan="4">
                {total}
                {operation}
                {next}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button type="button" onClick={this.onClickHandler}>AC</button></td>
              <td><button type="button" onClick={this.onClickHandler}>+/-</button></td>
              <td><button type="button" onClick={this.onClickHandler}>%</button></td>
              <td><button type="button" onClick={this.onClickHandler} className="right-column">÷</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={this.onClickHandler}>7</button></td>
              <td><button type="button" onClick={this.onClickHandler}>8</button></td>
              <td><button type="button" onClick={this.onClickHandler}>9</button></td>
              <td><button type="button" onClick={this.onClickHandler} className="right-column">x</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={this.onClickHandler}>4</button></td>
              <td><button type="button" onClick={this.onClickHandler}>5</button></td>
              <td><button type="button" onClick={this.onClickHandler}>6</button></td>
              <td><button type="button" onClick={this.onClickHandler} className="right-column">-</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={this.onClickHandler}>1</button></td>
              <td><button type="button" onClick={this.onClickHandler}>2</button></td>
              <td><button type="button" onClick={this.onClickHandler}>4</button></td>
              <td><button type="button" onClick={this.onClickHandler} className="right-column">+</button></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="button" onClick={this.onClickHandler}>0</button></td>
              <td><button type="button" onClick={this.onClickHandler}>.</button></td>
              <td><button type="button" onClick={this.onClickHandler} className="right-column">=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
