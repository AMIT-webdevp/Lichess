import React from 'react';
import GameItem from './GameItem';

const GameList = ({ games }) => {
  return (
    <ul>
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </ul>
  );
};

export default GameList;