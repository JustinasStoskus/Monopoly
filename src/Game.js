// Game.js
import React, { useState } from 'react';
import GameBoard from './GameBoard';

const Game = ({ selectedFigure }) => {
    const [currentPlayer, setCurrentPlayer] = useState(selectedFigure);

    return (
        <div>
            <h1>Monopoly Game</h1>
            <GameBoard currentPlayer={currentPlayer} />
        </div>
    );
};

export default Game;
