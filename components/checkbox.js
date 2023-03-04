import { Component } from "react"

class Checkbox extends Component {
  render() {
    return (
      <div>
        <label className="checkbox">
          <input type="checkbox" onChange={this.props.onChange} />{" "}
          {this.props.text}
        </label>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  onChange: false,
  text: "",
}

export default Checkbox
