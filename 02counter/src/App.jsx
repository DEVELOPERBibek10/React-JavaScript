import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function addValue() {
    let add = counter + 1;
    if (counter >= 20) return;
    setCounter(add);
    console.log(add);
  }

  function removeValue() {
    if (counter <= 0) return;
    let decresed = counter - 1;
    setCounter(decresed);
    console.log(decresed);
  }

  return (
    <>
      <h2></h2>
      <button onClick={addValue}>counter {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>value {counter}</button>
    </>
  );
}

export default App;
