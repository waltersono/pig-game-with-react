import React from "react";

const PlayerCard = ({ playerNumber, activePlayer, currentScore, score }) => (
  <section
    className={`player player--${playerNumber} ${
      playerNumber == activePlayer ? "player--active" : ""
    }`}
  >
    <h2 className="name" id={`name--${playerNumber}`}>
      Player {playerNumber}
    </h2>
    <p className="score" id={`score--${playerNumber}`}>
      {score[playerNumber]}
    </p>
    <div className="current">
      <p className="current-label">Current</p>
      <p className="current-score" id={`current--${playerNumber}`}>
        {currentScore[playerNumber]}
      </p>
    </div>
  </section>
);

export default PlayerCard;
