import React, { useState, useEffect } from 'react';
import '../src/styles/Counter.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`El contador ha cambiado: ${count}`);
  }, [count]); 

  return (
    <div className="counter">
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)} className="counter-button">Incrementar</button>
      <button onClick={() => setCount(count - 1)} className="counter-button">Decrementar</button>
    </div>
  );
};

export default Counter;