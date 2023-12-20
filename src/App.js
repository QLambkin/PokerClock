import "./App.scss";
import Clock from "./Components/Clock/Clock";
import Structure from "./Components/Structure/Structure";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col title">
          <p>BRICKMAS 2: ELECTRIC BOOGALOO</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Structure />
        </div>
        <div className="col">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;

// Live clock
// Display Round
// Blinds and ante
// Tournament structure
// Progress bar for each round
// Button that starts and stops the round
// Ability to jump to any round
// Prize Pool
// Payouts for first second and third
