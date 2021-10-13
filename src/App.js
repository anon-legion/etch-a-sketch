import React, {useState} from 'react';
import './App.css';
import Grids from './components/grid.js';
import randomRGB from './scripts/randomColor';

const hoverFunction = (e) => {
  const [r, g, b] = randomRGB();
  e.target.style.animation = 'hover-effect 2000ms ease-in';
  e.target.style.background = `rgb(${r},${g},${b})`;
}


function App() {

  const [showGrid, setShowGrid] = useState(() => false);
  const [gridSize, setGridSize] = useState(() => 16);
  const [inputSize, setInputSize] = useState(() => ({
    newSize: gridSize,
  }));
  const [gridStyle, setGridStyle] = useState(() => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
    color: '#DEDEDF',
    width: '100vmin',
    height: '100vmin'
  }))

  const handleOnChange = (e) => {
    setInputSize(prevState => {
      return {...prevState, [e.target.name]: Math.max(Number(e.target.min), Math.min(Number(e.target.value), Number(e.target.max)))}
    });
  }

  const clearOnClick = () => {
    const pixels = document.querySelectorAll('.App-grid div');
    pixels.forEach(pixel => pixel.style.background = '#08060B');
  }
  
  const newOnClick = () => {
    const size = inputSize.newSize;
    setGridStyle(prevState => {
      return {...prevState, gridTemplateColumns: `repeat(${size}, 1fr)`, gridTemplateRows: `repeat(${size}, 1fr)`};
    })
    setGridSize(prevState => size);
  }

  const gridViewOnChange = () => {
    setShowGrid(prevState => !prevState);
  }

  
  return (
    <div className="App">
      <div className="App-settings">
        <label htmlFor='inputSize'>Grid size</label>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
          <h3> <input type='number' id='inputSize' name='newSize' value={inputSize.newSize} min={2} max={128} onChange={handleOnChange}/> x {inputSize.newSize}</h3>
        </div>
        <input type='range' id='inputSize' name='newSize' value={inputSize.newSize} min={2} max={128} onChange={handleOnChange}/>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', gap: '5px'}}>
          <button onClick={clearOnClick}>Clear</button>
          <button onClick={newOnClick}>New</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '2%'}}>
          <label htmlFor='switchGridView'>Grid view</label>
          <label className="switch">
            <input type="checkbox" id='switchGridView' onChange={gridViewOnChange} name='showGrid' value={showGrid}/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="App-grid" style={gridStyle}>
        <Grids size={gridSize} hoverEffect={hoverFunction} />
      </div> 
    </div>
  );
}

export default App;
