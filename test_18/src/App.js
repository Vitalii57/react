import './App.css';
import Converter from './components/Converter';
import { useState } from 'react';

function App() {
  const [ bgcolor, setBgcolor ] = useState('#ffffff')
  const updateBackgroundColor = (color) => setBgcolor(color);
  return (
    <div
      className="App"
      style={{backgroundColor: `${bgcolor}`}}>
      <Converter applyColor={ updateBackgroundColor } />
    </div>
  );
}

export default App;