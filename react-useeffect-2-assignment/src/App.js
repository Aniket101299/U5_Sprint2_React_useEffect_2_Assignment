import './App.css';
import { useState } from 'react';
import {Timer} from "./components/Timer"

function App() {

  const [initial,setInitial] = useState("");
  const [end,setEnd] = useState("");

  console.log("initial",initial);

  return (
    <div className="App">

      <input type="number" placeholder='set start time' onChange={(e)=> {
           setInitial(e.target.value);
       }} />

     <input type="number" placeholder='set end time' onChange={(e) => {
          setEnd(e.target.value);
     }}/>

     
      <Timer initialTime={initial} endTime={end} />
    </div>
  );
}

export default App;
