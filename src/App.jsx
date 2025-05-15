import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function Add(num){
    if(num < 10){
      return setCount(num + 1) 
    } else{
      alert('Max 10!')
    }
  }
  
  function Reduce(num){
     if(num > 0){
      return setCount(num - 1) 
    } else{
      alert('Min 0!')
    }       
  }

  return (
    <>
      <button onClick={() => Add(count) } >+</button>
      <h1>{count}</h1>
      <button onClick={() => Reduce(count) } >-</button>
    </>
  );
}

export default App;
