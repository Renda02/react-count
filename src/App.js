import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0); //  [value fothestate, functiontochangethatvalue]
  // use arrow function
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  // This one reads from local storage
  useEffect(() => {
    // grab value from localstorage
    const oldCount = JSON.parse(localStorage.getItem("count"));
    // set count to the value we grabbed
    setCount(oldCount);
  }, []); // empty array will only run once

  // This one writes to localstorage
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <button onClick={increaseCount}>Increase Count!</button>
      <button onClick={decreaseCount}>Decrease Count!</button>
      <p>Count: {count} </p>
    </div>
  );
}
