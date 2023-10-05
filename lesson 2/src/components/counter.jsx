import React, { useState, useEffect } from 'react';

const Counter = ({ initialValue, initialMinValue, initialMaxValue }) => {
  const [count, setCount] = useState(initialValue);
  const [minValue, setMinValue] = useState(initialMinValue);
  const [maxValue, setMaxValue] = useState(initialMaxValue);

  // Зчитуємо значення з localStorage під час завантаження компонента
  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    const savedMinValue = localStorage.getItem('minValue');
    const savedMaxValue = localStorage.getItem('maxValue');

    if (savedCount) {
      setCount(parseInt(savedCount));
    }

    if (savedMinValue) {
      setMinValue(parseInt(savedMinValue));
    }

    if (savedMaxValue) {
      setMaxValue(parseInt(savedMaxValue));
    }
  }, []);

  // Зберігаємо значення в localStorage при зміні count, minValue, або maxValue
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  useEffect(() => {
    localStorage.setItem('minValue', minValue.toString());
  }, [minValue]);

  useEffect(() => {
    localStorage.setItem('maxValue', maxValue.toString());
  }, [maxValue]);

  const increment = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };

  return (
    <div className="сounter">
      <h1>Counter</h1>
      <p>Current Value: {count}</p>
      <button onClick={decrement} disabled={count === minValue} className="buttonMax">-</button>
      <button onClick={increment} disabled={count === maxValue} className="buttonMin">+</button>
      <div>
        <label>Min Value:</label>
        <input type="number" value={minValue} onChange={(e) => setMinValue(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Max Value:</label>
        <input type="number" value={maxValue} onChange={(e) => setMaxValue(parseInt(e.target.value))} />
      </div>
    </div>
  );
};

export default Counter;
