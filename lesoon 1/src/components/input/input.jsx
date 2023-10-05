import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    this.props.onChange(newValue); // Викликаємо метод onChange, передаючи нове значення
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Input;
