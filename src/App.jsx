import playerData from "./playerData.js";

function BaseballCard(props) {
  return (
    <div className="card">
      <h2>{props.player.name}</h2>
      <img src={props.player.imgUrl} alt={props.player.name} />
    </div>
  );
}

function App() {
  // for each player in player data, call the BaseballCard function
  // the BaseballCard function creates a card div with a playerName
  const cards = playerData.map(player => 
    <BaseballCard player={player} />
  );
  // return that list of elements 
  return <>{cards}</>;
}

export default App;
