
import { connect } from 'react-redux';
import EventtypeList from '../components/EventTypeList';

const mapStateToProps = (state) => {  
  return { categories: state.categories };
}

const mapDispatchToProps = {
}

const EventCategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(EventtypeList);

export default EventCategoryListContainer;
