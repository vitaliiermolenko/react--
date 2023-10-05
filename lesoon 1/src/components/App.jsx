import React, { Component } from 'react';
import Input from './input/input';

class App extends Component {
  handleInputChange = (value) => {
    console.log(`Значення введене користувачем: ${value}`);
  }

  render() {
    return (
      <div className="App">
        <Input
          onChange={this.handleInputChange}
          placeholder="Введіть текст"
        />
      </div>
    );
  }
}

export default App;
