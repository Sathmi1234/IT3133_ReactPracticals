import { useState } from "react";
import ChildCom from "./componenets/Day7_19_11/ChildCom";

function App() {
  const [childname,setChildname]=useState("Default");
  const recieveName=(name)=>{
    setChildname(name)
  }
  return (
    <div>
      <h2>Hello React I'm Parent</h2>
      <ChildCom setfun={recieveName}/>
      <p>Parent: My Child said "{childname}"</p>
    </div>
  );
}

export default App;
