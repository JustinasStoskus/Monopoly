import React, { useState } from 'react';

const Dice = ({ onRoll }) => {
    const [diceValue, setDiceValue] = useState(1);

    const rollDice = () => {
        const newValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newValue);
        onRoll(newValue);
    };

    return (
        <div>
            <p>Dice: {diceValue}</p>
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    );
};

export default Dice;
