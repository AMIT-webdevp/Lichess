import React from 'react';

const GameItem = ({ game }) => {
  const { players, status } = game;
  const playerNames = players.map((player) => player.username).join(' vs ');

  return (
    <li>
      <div>{playerNames}</div>
      <div>Status: {status}</div>
    </li>
  );
};

export default GameItem;