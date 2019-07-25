import React from 'react'
import { Calendar } from 'react-widgets'
import moment from 'moment';
import {mycategory} from './EventTypeList';




const SummaryCalendar = (props) => { 
    return (        
      <Calendar 
        defaultValue={props.value}
        onChange={value => {
            const selectedDate = moment(value).format('YYYY-MM-DD');
            props.setActivityRange( {
                startDate: selectedDate, 
                endDate: moment(selectedDate).format('YYYY-MM-DDT23:59:59'),
                eventType: mycategory
            } );
          }
        }
        onNavigate={ (date, direction, view) => {
            if (view === 'month') {
                props.setActivityRange( {
                    startDate: moment(date).format('YYYY-MM-01'), 
                    // todo extract "end of month" logic into helper function
                    endDate: moment(date).add(1, 'months').date(0).format('YYYY-MM-DDT23:59:59'),
                    eventType: mycategory
                } );                
            }
          }
        }

        />        
    )
}

export default SummaryCalendar;