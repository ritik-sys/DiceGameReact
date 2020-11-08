
import './App.css';
import Dice from './components/Dice';
import RollDie from './components/RollDie';
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-info mb-5">
        <span class="navbar-brand mb-0 h1">Dice Game</span>
      </nav>
      <Dice>
      </Dice>
    </div>
  );
}

export default App;
