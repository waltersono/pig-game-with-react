import React from "react";
import dice1 from "./../assets/dice-1.png";
import dice2 from "./../assets/dice-2.png";
import dice3 from "./../assets/dice-3.png";
import dice4 from "./../assets/dice-4.png";
import dice5 from "./../assets/dice-5.png";
import dice6 from "./../assets/dice-6.png";

const getDice = (currentScore) => {
  switch (currentScore) {
    case 1:
      return dice1;
    case 2:
      return dice2;
    case 3:
      return dice3;
    case 4:
      return dice4;
    case 5:
      return dice5;
    case 6:
      return dice6;
    default:
      return dice1;
  }
};

const Dice = ({ diceNumber }) => {
  let dice = getDice(diceNumber);
  return <img src={dice} alt="Playing dice" className="dice" />;
};

export default Dice;
