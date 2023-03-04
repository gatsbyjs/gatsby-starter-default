import React, { Component } from 'react'

import Checkbox from '../components/checkbox'
import Button from '../components/button'
import Image from '../components/image'
import '../styles/main.scss'

export default class SignupForm extends Component {
  state = {
    isAccepted: false
  };

  handleAcceptChange(event) {
    this.setState({ isAccepted: event.target.checked });
  }

  signUpRedirect() {
    window.location = "https://join.slack.com/t/yyjtech/shared_invite/zt-1q0p4kc8j-cUfQTZzan7s~RJ~~erTohg"
  }

  render() {
    return (
      <div className="box">
        <div>
          <Image className="avatar"/>
          <h2 className="subtitle">Join us</h2>
        </div>
        <div>
          <Checkbox
            onChange={(event) => this.handleAcceptChange(event)}
            text={<span>I agree to the <a href="https://github.com/yyjtech/code-of-conduct/blob/master/README.md">code of conduct!</a></span>}
          />
          <Button
            type="submit"
            disabled={!this.state.isAccepted}
            onClick={this.signUpRedirect}
            text="Sign Up"
            className="button--full-width"
          />
        </div>
      </div>
    )
  }
}
