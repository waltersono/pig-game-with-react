import React, { useReducer, useEffect } from "react";
import CustomButton from "./components/custom-button.component";
import PlayerCard from "./components/player-card.component";

import Dice from "./components/dice.component";

const GAME_INITIAL_STATE = {
  activePlayer: 0,
  score: [0, 0],
  currentScore: [0, 0],
  diceNumber: 0,
};

const rollDiceAction = {
  type: "ROLL_DICE",
};

const holdScoreAction = {
  type: "HOLD_SCORE",
};

const restartGameAction = {
  type: "RESTART",
};

const handleRollDice = (state) => {
  let { activePlayer, score, currentScore, diceNumber } = state;

  diceNumber = Math.trunc(Math.random() * 6) + 1;

  if (diceNumber === 1) {
    currentScore[activePlayer] = 0;

    activePlayer = activePlayer === 1 ? 0 : 1;
  }

  if (diceNumber !== 1) {
    const currentScoreArr = currentScore;

    currentScoreArr[activePlayer] = currentScoreArr[activePlayer] + diceNumber;

    currentScore = currentScoreArr;
  }

  return { activePlayer, score, currentScore, diceNumber };
};

const handleHoldScore = (state) => {
  let { activePlayer, score, currentScore, diceNumber } = state;

  score[activePlayer] = score[activePlayer] + currentScore[activePlayer];

  currentScore[activePlayer] = 0;

  activePlayer = activePlayer === 1 ? 0 : 1;

  return { activePlayer, score, currentScore, diceNumber };
};

const handleRestartGame = () => {
  return {
    activePlayer: 0,
    score: [0, 0],
    currentScore: [0, 0],
    diceNumber: 0,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ROLL_DICE":
      return {
        ...handleRollDice(state),
      };
    case "HOLD_SCORE":
      return {
        ...handleHoldScore(state),
      };
    case "RESTART": {
      return {
        ...handleRestartGame(),
      };
    }
    default:
      return state;
  }
};

const didPlayerWin = (state, previousPlayer) => {
  return state.score[previousPlayer] >= 50;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, GAME_INITIAL_STATE);

  useEffect(() => {
    const previousPlayer = state.activePlayer === 1 ? 0 : 1;

    if (didPlayerWin(state, previousPlayer)) {
      alert(`Player ${previousPlayer} wins`);

      dispatch(restartGameAction);
    }
  }, [state.activePlayer]);

  return (
    <main>
      <PlayerCard
        playerNumber="0"
        activePlayer={state.activePlayer}
        currentScore={state.currentScore}
        score={state.score}
      />
      <PlayerCard
        playerNumber="1"
        activePlayer={state.activePlayer}
        currentScore={state.currentScore}
        score={state.score}
      />

      <Dice diceNumber={state.diceNumber} />
      <CustomButton
        modifier="btn--new"
        onClick={() => dispatch(restartGameAction)}
      >
        🔄 New game
      </CustomButton>
      <CustomButton
        modifier="btn--roll"
        onClick={() => dispatch(rollDiceAction)}
      >
        🎲 Roll dice
      </CustomButton>
      <CustomButton
        modifier="btn--hold"
        onClick={() => dispatch(holdScoreAction)}
      >
        📥 Hold
      </CustomButton>
    </main>
  );
};

export default App;
