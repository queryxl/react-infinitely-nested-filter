import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as filterActions         from '../actions/filterActions';
import Filter from '../components/Filter';

const mapStateToProps = (state) => ({
  filter: state.filter
});
const mapDispatchToProps = (dispatch) => ({
  filterActions: bindActionCreators(filterActions, dispatch)
});
class HomeView extends React.Component {

  render() {
    const {filter, filterActions}=this.props;

    return (
      <Filter isTop={true}
              filter={filter}
              addFilter={filterActions.addFilter}
              addSubFilter={filterActions.addSubFilter}
              updateFilter={filterActions.updateFilter}
              deleteFilter={filterActions.deleteFilter}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
