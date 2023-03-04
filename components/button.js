import { Component } from "react"

class Button extends Component {
  render() {
    return (
      <div>
        <button
          className="button"
          type={this.props.type}
          disabled={this.props.disabled}
          onClick={this.props.onClick}
        >
          {this.props.text}
        </button>
      </div>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  onClick: false,
  type: false,
  text: "",
}

export default Button
