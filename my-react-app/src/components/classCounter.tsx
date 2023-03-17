import React from 'react';

export class ClassCounter extends React.Component<{ count: number }, Readonly<{ count: number }>> {
  constructor(props: { count: number } | Readonly<{ count: number }>) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
}
