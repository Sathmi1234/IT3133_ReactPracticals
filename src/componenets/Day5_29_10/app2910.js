import { useState } from 'react';
import Calculator from './componenets/Day5_29_10/Calculator';

function App() {
  const [theme,setTheme]=useState(true);
  const [fsize,setFsize]=useState(10);
  const lightTheme ={
    backgroundColor: "white", //background-color: #282c34;
    color: '#282c34',
    fontSize:fsize+"px"
  }
  const darkTheme ={
    backgroundColor: "#282c34",
    color: 'white',
    fontSize:fsize+"px"
  }
  return (
    <div className="App">
      <header className="App-header" style={theme?lightTheme:darkTheme}>
        <Calculator/>
        <hr></hr>
        <button onClick={()=>{setTheme(!theme)}}>{theme?"Go Dark":"Go Light"}</button>
        <br/>
        Font Size:<input type='range' 
        name="fontchg" min='10' max='20' 
        step='1' value={fsize} onChange={(e)=>{setFsize(e.target.value); console.log(fsize)}}/>
      </header>
    </div>
  );
}

export default App;
