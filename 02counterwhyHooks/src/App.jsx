import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter  = 15
  // const addValue = ()  => {
  //   console.log(`Counter value before click`, counter);

  //   counter += 1;
  //   console.log(`Counter value after click`, counter, Date.now());
  // }

  /**
   * Till now we have tried to increase the counter value and it is getting update but it is not
   * reflecting in dom/screen. why?
   * The problem is that like this way dom will not update,
   * 1: we need to get the dom attributes like h2 tag value by using document.getquerySelector, lot of reference will get
   * then append the values to the domelement
   * 2. Like this way we have to write lot of code, where ever the component will change we have to write these many document.q
   */

  // Then introduction of a function came which is called hooks.

  const [counter, setCounter] = useState(15);
  const addValue = () => {
    console.log(`Counter value before click`, counter);

    // counter += 1;
    if (counter < 20) setCounter(counter + 1);
    console.log(`Counter value after click`, counter, Date.now());
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);  // All of these are updating only once, this is because of fiber, it takes all of these method as batch
    // setCounter(counter + 1);  // and we are doing the same task, it will only update once
    // setCounter(counter + 1);

    // But if interviewer ask, I wanted this to handle multiple update then
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
    console.log(`Counter value before click`, counter);

    // counter += 1;
    if (counter > 0) setCounter(counter - 1);

    console.log(`Counter value after click`, counter, Date.now());
  };

  return (
    <>
      <h2>This is counter app to understand, why we need hooks: </h2>
      <h3>Counter value : {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer value {counter}</p>
    </>
  );
}

export default App;
