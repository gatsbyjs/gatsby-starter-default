import React from 'react'
import { Calendar } from 'react-widgets'
import moment from 'moment';


const SummaryCalendar = (props) => { 
    return (        
      <Calendar 
        defaultValue={props.value}
        onChange={value => {
            const selectedDate = moment(value).format('YYYY-MM-DD');
            props.setActivityRange( {
                startDate: selectedDate, 
                endDate: selectedDate
            } );
          }
        }
        onNavigate={ (date, direction, view) => {
            if (view === 'month') {
                props.setActivityRange( {
                    startDate: moment(date).format('YYYY-MM-01'), 
                    // todo extract "end of month" logic into helper function
                    endDate: moment(date).add(1, 'months').date(0).format('YYYY-MM-DD')
                } );                
            }
          }
        }

        />        
    )
}

export default SummaryCalendar;