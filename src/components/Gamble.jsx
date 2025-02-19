import React from "react";
import "./Gamble.css";
import Square from "./Square";

const Gamble = () => {
    const numberOfSquares = 25;

  return (
    <div className="gamble-container">
      <div className="g-setting">
        <div className="manual-g">Manual</div>
        <div className="amount-select">
          <div className="amount-cal">
            Bet Amount
            <div className="final-cal">$</div>
            {/* need to apply state here */}
          </div>
          <div className="bet-amount">
            <input type="text" />
            <div className="mul-btn">1/2</div>
            <div className="mul-btn">2x</div>
          </div>
        </div>
        <div className="mines-select-container">
          Mines
          <div className="mine-select">
            <select className="dropdown" value>
              {[...Array(24)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="bet-btn">BET</div>
      </div>
      <div className="gamble">
        <div className="square-grid">
          {Array.from({ length: numberOfSquares }).map((_, index) => (
        <Square key={index} />
      ))}
        </div>
      </div>
    </div>
  );
};

export default Gamble;
