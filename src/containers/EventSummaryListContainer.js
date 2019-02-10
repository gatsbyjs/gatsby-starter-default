
import { connect } from 'react-redux';
import EventSummaryList from '../components/EventSummaryList.js';

const mapStateToProps = (state, ownProps) => {  
    return { activities: state.activities };
}

const mapDispatchToProps = {
}

const EventSummaryListContainer = connect(mapStateToProps, mapDispatchToProps)(EventSummaryList);

export default EventSummaryListContainer;
