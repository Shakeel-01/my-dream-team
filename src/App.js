import logo from './logo.svg';
import './App.css';
import playerData from './fakeData/playerData.json'
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Team from './components/Team/Team';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([])
  useEffect(() => {
    setPlayers(playerData);
    console.log(playerData);
  }, [])

  const handleAddPlayer = (player) => {
    const newTeam = [...team, player]
    setTeam(newTeam);
  }

  return (
    <div className="players-list App">

      <div className=" players">

      
       {
          players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.email}></Player>)
        }
       
      </div>
      <div className="my-team">
        <h1>My Team</h1>
        <h3>player added: {team.length}</h3>
        <Team  team={team}></Team>
      </div>



    </div>
  );
}

export default App;
