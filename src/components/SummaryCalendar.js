import React from 'react'
import { Calendar } from 'react-widgets'
import moment from 'moment';

class SummaryCalendar extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { value: new Date() }
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