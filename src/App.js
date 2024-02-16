import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameList from './components/GameList';

/*
const App = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://lichess.org/api/stream/games/{streamId}');
        setGames(response.data.games);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.players.some((player) =>
      player.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Lichess Games</h1>
      <input
        type="text"
        placeholder="Search by player id"
        value={searchTerm}
        onChange={handleSearch}
      />
      <GameList games={filteredGames} />
    </div>
  );
  */
  function App() {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchGames = async () => {
              try {
                const body=`TJxUmbWK,4OtIh2oh,ILwozzRZ`;
              const response = await axios.post(
                'https://lichess.org/api/games/export/_ids', 
               body,
                {
                  headers: {
                    'Content-Type': 'application/text',
                    'Authorization': 'Bearer lip_YBKaHxq394J7RqF309Hn'
                  }
                }
              );
              setGames(response.data);
            } catch (error) {
              console.error('Error fetching games:', error);
            }
          };
              
        fetchGames();
    }, []);

    // const filteredGames = games.filter(game => {
    //     // Filter games by player names
    //     return game.players.some(player => player.username.toLowerCase().includes(searchTerm.toLowerCase()));
    // });

    return (
        <div className="App">
            <h1>Lichess Game Tracker</h1>
            <input
                type="text"
                placeholder="Search by player id"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
             {/* <ul>
                {filteredGames.map(game => (
                    <li key={game.id}>
                        <div>Player 1: {game.players[0].username}</div>
                        <div>Player 2: {game.players[1].username}</div>
                        <div>Status: {game.status}</div>
                    </li>
                ))}
            </ul>  */}
        </div>
    );
};

export default App;