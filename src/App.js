import React, { useState } from 'react';
import PlayerSelection from './PlayerSelection';
import Game from './Game';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedFigure, setSelectedFigure] = useState(null);

  const handleStartGame = (figure) => {
    setSelectedFigure(figure);
    setGameStarted(true);
  };

  return (
      <div>
        {gameStarted ? (
            <Game selectedFigure={selectedFigure} />
        ) : (
            <PlayerSelection onStartGame={handleStartGame} />
        )}
      </div>
  );
};

export default App;
