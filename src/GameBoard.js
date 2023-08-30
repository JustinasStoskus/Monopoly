// GameBoard.js
import React from 'react';
import MonopolyBoard from './MonopolyBoard';

const GameBoard = ({ currentPlayer }) => {
    return (
        <div>
            <h2>Current Player: {currentPlayer}</h2>
            <MonopolyBoard />
        </div>
    );
};

export default GameBoard;

