import React, { Component, ChangeEvent } from 'react';
import './MyInput.css';

export class MyInput extends Component {
  state = {
    inputValue: '',
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      const transformValue = JSON.parse(searchValue);
      this.setState({ inputValue: transformValue });
    }
  }

  changeState = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  setLocalStorage = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    localStorage.setItem('searchValue', JSON.stringify(inputValue));
  };

  render() {
    const searchValue = this.state.inputValue;
    return (
      <div className="search__input-container">
        <input
          className="search__input-text"
          type="search"
          placeholder="Input value"
          value={searchValue}
          onBlur={this.setLocalStorage}
          onChange={this.changeState}
        />
      </div>
    );
  }
}
