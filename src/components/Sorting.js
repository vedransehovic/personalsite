import React, { useState } from "react";

const ArrSortFunc = () => {
  const [arrInitial] = useState([5, 4, 3, 9]);
  const [flag, setFlag] = useState(false);
  const [displayArr, setDisplayArr] = useState([...arrInitial]);

  const toggle = () => {
    if (flag === false) {
      setFlag(true);
      setDisplayArr([...arrInitial]);
    } else {
      setFlag(false);
      setDisplayArr([...arrInitial].sort());
    }
  };

  return (
    <div>
      <h2>Small change to sorting</h2>
      <h1>This is Array Sort Component</h1>
      <h4>Array: {displayArr}</h4>
      <button onClick={toggle}>Toggle This Array</button>
      <h4>Initial Array: {arrInitial}</h4>
    </div>
  );
};
export default ArrSortFunc;
