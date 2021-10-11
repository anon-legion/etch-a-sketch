import React, {useState} from 'react';
import './App.css';
import Grids from './components/grid.js';
import randomRGB from './scripts/randomColor';

const hoverFunction = (e) => {
  const [r, g, b] = randomRGB();
  e.target.style.background = `rgb(${r},${g},${b})`;
  e.target.style.animation = 'hover-effect 700ms ease-in';
}


function App() {

  const [gridSize, setGridSize] = useState(() => 16);
  const [duration, setDuration] = useState(() => 3);
  const [inputParam, setInputParam] = useState(() => ({
    newSize: gridSize,
    newDuration: duration
  }));

  const handleOnChange = (e) => {
    setInputParam(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    });
  }

  return (
    <div className="App">
      <div className="App-settings">
        <label htmlFor='inputSize'>Grid size:</label>
        <input type='number' id='inputSize' name='newSize' value={inputParam.newSize} onChange={handleOnChange} min={2} max={256}/>
        <label htmlFor='inputDuration'>Trail duration:</label>
        <input type='number' id='inputDuration' name='newDuration' value={inputParam.newDuration} onChange={handleOnChange} min={-1} max={9}/>
      </div>
      <div className="App-grid">
        <Grids size={gridSize} hoverEffect={hoverFunction} trailDuration={duration * 1000}/>
      </div> 
    </div>
  );
}

export default App;
