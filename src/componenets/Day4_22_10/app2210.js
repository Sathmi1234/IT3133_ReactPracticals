import './App.css';
import { useState } from 'react';
import Artist from './componenets/Day4_22_10/Artist';
function showMsg(){
  alert("Hi, This is an Alert!!")
}

function App({msg}) {
  var fruits=["Apple","Orange","Grapes","Wood Apple"]
  const [index,setIndex]=useState(0);
  const nextEle=()=>{
    if(index>(fruits.length-2)){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }
  const prevEle=()=>{
    if(index<1){
      setIndex(fruits.length-1)
    }else{
      setIndex(index-1);
    }
  }
  return (
    <div>
      <br/>
      <button onClick={showMsg}>Click me to see the Alert 1</button>
      <br/><br/>
      <button onClick={function showMsg2(){ alert("Hi, This is an Alert 2!!") }}>Click me to see the Alert 2</button>
      <br/><br/>
      <button onClick={()=>{ alert("Hi, This is an Alert 3!!") }}>Click me to see the Alert 3</button>
      <br/><br/>
      <button onClick={()=>{ alert(msg) }}>Click me to see the Alert 4</button>
      <br/><br/>
      <p><button onClick={prevEle}>Previous</button> {index+1}. {fruits[index]} <button onClick={nextEle}>Next</button></p>

      <Artist/>
    </div>
  );
}

export default App;

