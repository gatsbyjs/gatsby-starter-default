import React, { Component } from 'react'

export default class Checkbox extends Component {
  props = {
    onChange: false,
    text: ''
  };

  render() {
    return (
      <div>
        <label className="checkbox">
          <input type="checkbox" onChange={this.props.onChange} /> {' '}
          { this.props.text }
        </label>
      </div>
    )
  }
}