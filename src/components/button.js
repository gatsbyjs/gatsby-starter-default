import React, { Component } from 'react'

export default class Button extends Component {
  props = {
    disabled: false,
    onClick: false,
    type: false,
    text: '',
  };

  render() {
    return (
      <div>
        <button
          className="button"
          type={this.props.type}
          disabled={this.props.disabled}
          onClick={this.props.onClick}
        >
          { this.props.text }
        </button>
      </div>
    )
  }
}