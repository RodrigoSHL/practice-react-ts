import { useState } from "react";

export const useCounter = (initial:number = 10) => {
  const [counter, setCounter] = useState<number>(initial);

  const accumulated = (numberValue: number) => {
    setCounter(counter + numberValue);
  };

  return {
    counter,
    accumulated,
  }
};

