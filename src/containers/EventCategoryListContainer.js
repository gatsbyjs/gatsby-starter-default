
import { connect } from 'react-redux';
import EventCategoryList from '../components/EventCategoryList';

const mapStateToProps = (state, ownProps) => {  
  return { categories: state.categories };
}

const mapDispatchToProps = {
}

const EventCategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(EventCategoryList);

export default EventCategoryListContainer;
