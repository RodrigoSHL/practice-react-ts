import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const accumulated = (numberValue: number) => {
    setCounter(counter + numberValue);
  }


  return (
    <>
    <h3>Counter: <small>{counter}</small></h3>
      <div>
        <button onClick={() => accumulated(+1)}>+1</button>
        &nbsp;
        <button onClick={() => accumulated(-1)}>-1</button>
      </div>
    </>
  );
};
