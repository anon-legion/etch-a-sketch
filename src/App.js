import './App.css';
import Grids from './components/grid.js';

function App() {

  return (
    <div className="App">
      <div className="App-grid">
        <Grids size={16} />
      </div> 
    </div>
  );
}

export default App;
