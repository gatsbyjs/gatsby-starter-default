import { connect } from 'react-redux';
import { setActivityRange } from '../redux/actions/activityActions'
import SummaryCalendar from '../components/SummaryCalendar';

const mapStateToProps = (state) => ({  
    activityRange: state.activityRange
})

const mapDispatchToProps = (dispatch) => ({
    setActivityRange: (range) => { dispatch(setActivityRange(range)); },
})

const SummaryCalendarContainer = connect(mapStateToProps, mapDispatchToProps)(SummaryCalendar);

export default SummaryCalendarContainer;