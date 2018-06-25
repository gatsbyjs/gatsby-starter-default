import React from "react";

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count +
          5 })}
>plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count -
          5 })}
>minus
        </button>
      </div>
    )
  }
}

export default Counter
