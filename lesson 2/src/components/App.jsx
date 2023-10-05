import React from 'react';
import Counter from './counter';

function App() {
  // Значення за замовчуванням або які-небудь інші значення за вашими потребами
  const initialValue = 0;
  const initialMinValue = 0;
  const initialMaxValue = 10;

  return (
    <div className="App">
      <Counter
        initialValue={initialValue}
        initialMinValue={initialMinValue}
        initialMaxValue={initialMaxValue}
      />
    </div>
  );
}

export default App;
