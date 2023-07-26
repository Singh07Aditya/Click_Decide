import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

function Main() {
  const [roll, setRoll] = useState(0);
  const [roll1, setRoll1] = useState(0);

  // setRoll((s) => Math.round(Math.random() * 6 + 1));
  // setRoll1((s1) => Math.round(Math.random() * 6 + 1));

  function handleClick() {
    setRoll((s) => Math.round(Math.random() * 5 + 1));
    setRoll1((s1) => Math.round(Math.random() * 5 + 1));
  }
  return (
    <div className="container">
      {roll === 0 && roll1 === 0 ? (
        <div className="dice">
          <h2> Welcome to Click Decide </h2>
        </div>
      ) : (
        <div className="dice">
          <h2>
            {roll === roll1
              ? "Match Draw"
              : roll > roll1
              ? "player 1 won "
              : "player 2 won"}
          </h2>
          <p>player 1</p>
          <img src={` images/dice${roll}.png`} alt="dice " />
          <p>player 2</p>
          <img src={` images/dice${roll1}.png`} alt="dice " />{" "}
        </div>
      )}

      <button className="btn" onClick={handleClick}>
        {" "}
        Play
      </button>
    </div>
  );
}
