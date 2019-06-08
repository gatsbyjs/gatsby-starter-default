import React, { Component } from 'react'

import Image from '../components/image'
import '../styles/main.scss'

export default class SignupForm extends Component {
  state = {
    isAccecpted: false
  };

  handleAcceptChange(event) {
    this.setState({ isAccepted: event.target.checked });
  }

  signUpRedirect() {
    window.location = "https://join.slack.com/t/yyjtech/shared_invite/enQtNjQ3NTkzMDg2MDk4LTI4NDdiNjJjNTRmMmI0NTlmNzJkNDg2OWJmNjY5N2IwZWQxMTRkOWNkZTMzYmExMzE1NmY2ZWJmYjY3ZDg1NTc"
  }

  render() {
    return (
      <div className="box">
        <Image className="avatar"/>
        <h2 className="subtitle">Join us</h2>
        <div>
          <label class="checkbox">
            <input type="checkbox" onChange={(event) => this.handleAcceptChange(event)} /> {' '}
            I agree to the <a href="https://github.com/yyjtech/code-of-conduct/blob/master/reporting_guidelines.md">code of conduct!</a>
          </label>
        </div>
        <button
          className="button"
          type="submit"
          disabled={!this.state.isAccepted}
          onClick={this.signUpRedirect}
        >
          Sign Up
        </button>
      </div>

    )
  }
}