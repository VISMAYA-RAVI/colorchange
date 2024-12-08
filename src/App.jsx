import './App.css'
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = (color) => {
    setBgColor(color);
  }

  return (
    <>
      <div id="changeColor" style={{backgroundColor: bgColor}}>
        <h1>Click To Change Background Color</h1>
        <div>
          <button className="btn" onClick={() => changeColor('#994896')} style={{backgroundColor:"#994896"}}>purple</button>
          <button className="btn" onClick={() => changeColor('#150B7F')} style={{backgroundColor:"#150B7F"}}>Navy</button>
          <button className="btn" onClick={() => changeColor('#540303')} style={{backgroundColor:"#540303"}}>Maroon</button>
          <button className="btn" onClick={() => changeColor('#7A8C03')} style={{backgroundColor:"#7A8C03"}}>Olive</button>
          <button className="btn" onClick={() => changeColor('#50FA00')} style={{backgroundColor:"#50FA00"}}>Lime</button>
        </div>
      </div>
    </>
  )
}

export default App