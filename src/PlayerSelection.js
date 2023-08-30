// PlayerSelection.js
import React, { useState } from 'react';

const PlayerSelection = ({ onStartGame }) => {
    const [selectedFigure, setSelectedFigure] = useState(null);

    const handleFigureSelect = (figure) => {
        setSelectedFigure(figure);
    };

    const handleStartGame = () => {
        if (selectedFigure) {
            onStartGame(selectedFigure);
        }
    };

    return (
        <div>
            <h1>Select Your Figure</h1>
            <div>
                <button onClick={() => handleFigureSelect('dog')}>Dog</button>
                <button onClick={() => handleFigureSelect('cat')}>Cat</button>
                <button onClick={() => handleFigureSelect('ship')}>Ship</button>
                <button onClick={() => handleFigureSelect('shoe')}>Shoe</button>
            </div>
            <button onClick={handleStartGame}>Start Game</button>
        </div>
    );
};

export default PlayerSelection;
