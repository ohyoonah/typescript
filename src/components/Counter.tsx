import { useState } from "react";

interface Istate {
  counter: number;
}

const Counter = () => {
  const [state, setState] = useState<Istate>({
    counter: 0,
  });

  const onIncrease = () => {
    setState({ counter: state.counter + 1 });
  };

  const onDecrese = () => {
    setState({ counter: state.counter - 1 });
  };

  return (
    <>
      <h2>Counter</h2>
      <div>{state.counter}</div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrese}>-</button>
    </>
  );
};

export default Counter;
