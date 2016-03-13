React = require 'react'

module.exports = React.createClass
  getInitialState: ->
    count: 0

  handlePlusClick: ->
    @setState count: @state.count + 1

  handleMinusClick: ->
    @setState count: @state.count - 1

  render: ->
    <div>
      <h1>Coffeescript React.js components</h1>
      <h3>Counter example</h3>
      <p>{@state.count}</p>
      <button onClick={@handlePlusClick}>+</button>
      <button onClick={@handleMinusClick}>-</button>
    </div>
