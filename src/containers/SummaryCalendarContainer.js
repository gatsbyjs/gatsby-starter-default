import { connect } from 'react-redux';
import SummaryCalendar from '../components/SummaryCalendar';

const mapStateToProps = (state, ownProps) => {  
    return { activities: state.activities };
}

const mapDispatchToProps = {
}

const SummaryCalendarContainer = connect(mapStateToProps, mapDispatchToProps)(SummaryCalendar);

export default SummaryCalendarContainer;
