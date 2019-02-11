import React from 'react'
import { Calendar } from 'react-widgets'

class SummaryCalendar extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { value: this.props.initialValue }
  }

  render() {
    return (        
      <Calendar 
        defaultValue={this.state.value}
        />        
    )
  }
}

export default SummaryCalendar;