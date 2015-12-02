import React, { Component, PropTypes }  from 'react';
import shouldPureComponentUpdate        from 'react-pure-render/function';
import SubFilterGroup                   from './SubFilterGroup';
import SubFilterSingle                  from './SubFilterSingle';
import shallowEqual from 'react-pure-render/shallowEqual';

export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.object,
    addFilter: PropTypes.func,
    addSubFilter: PropTypes.func,
    updateFilter: PropTypes.func,
    deleteFilter: PropTypes.func,
    path: PropTypes.array,
    isTop: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }

  render() {
    const { isTop, filter, addFilter, addSubFilter, updateFilter, deleteFilter } = this.props;

    const logic = filter.get('logic');
    if (logic) {
      return (
        <SubFilterGroup filter={filter} addFilter={addFilter}
                        addSubFilter={addSubFilter}
                        updateFilter={updateFilter}
                        deleteFilter={deleteFilter} isTop={isTop}/>
      );
    } else {
      return (
        <SubFilterSingle filter={filter}
                         updateFilter={updateFilter}
                         deleteFilter={deleteFilter}/>
      );
    }
  }
}
