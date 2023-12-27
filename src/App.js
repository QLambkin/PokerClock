import "./App.scss";
import Clock from "./Components/Clock/Clock";
import Structure from "./Components/Structure/Structure";

function App() {
  return (
    <div className="page">
      <div className="row">
        <div className="col title">
          BRICKMAS 2: ELECTRIC BOOGALOO
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 order-2 order-md-1 structure">
          <Structure />
        </div>
        <div className="col order-1 order-md-2 clock">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;

// Progress bar for each round
// Prize Pool
// Payouts for first second and third