import React from 'react';

export function Counter() {
  const [count, setCount] = React.useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
