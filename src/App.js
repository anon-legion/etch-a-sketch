import './App.css';
import Grids from './components/grid.js';
import randomRGB from './scripts/randomColor';

const hoverFunction = (e) => {
  const [r, g, b] = randomRGB();
  e.target.style.background = `rgb(${r},${g},${b})`;
}

function App() {

  return (
    <div className="App">
      <div className="App-grid">
        <Grids size={16} hoverEffect={hoverFunction} />
      </div> 
    </div>
  );
}

export default App;
