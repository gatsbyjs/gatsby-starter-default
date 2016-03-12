import React from 'react'

export default class ReactComponent extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }

  handlePlusClick () {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusClick () {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    return (
      <div>
        <h1>React.js components</h1>
        <h3>Counter example</h3>
        <p>{this.state.count}</p>
        <button onClick={this.handlePlusClick.bind(this)}>+</button>
        <button onClick={this.handleMinusClick.bind(this)}>-</button>
      </div>
    )
  }
}
