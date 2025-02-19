import React, { useState } from "react";
import "./Gamble.css";
import Square from "./Square";

const Gamble = () => {
  const numberOfSquares = 25;
  const [BetAmount, setBetAmount] = useState(0);
  const handleBetAmount = (e) => {
    setBetAmount(e.target.value);
  };
  const [noOfMines, setnoOfMines] = useState(3);
  const handlenoOfMines = (e) => {
    setnoOfMines(e.target.value);
  };
  const MineArray = [];
  while (MineArray.length < noOfMines) {
    let x = Math.floor(Math.random() * 25) + 1;
    if (!MineArray.includes(x)) {
      MineArray.push(x);
      console.log(x);
    }
  }
  console.log(MineArray);

  return (
    <div className="gamble-container">
      <div className="g-setting">
        <div className="manual-g">Manual</div>
        <div className="amount-select">
          <div className="amount-cal">
            Bet Amount
            <div className="final-cal">{BetAmount} $</div>
          </div>
          <div className="bet-amount">
            <input type="text" value={BetAmount} onChange={handleBetAmount} />
            <div className="mul-btn">1/2</div>
            <div className="mul-btn">2x</div>
          </div>
        </div>
        <div className="mines-select-container">
          Mines
          <div className="mine-select">
            <select
              className="dropdown"
              value={noOfMines}
              onChange={handlenoOfMines}
            >
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
          {Array.from({ length: numberOfSquares }).map((_, index) =>
            MineArray.includes(index) ? (
              <Square key={index} Mineprop={true} />
            ) : (
              <Square key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Gamble;
