import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Filter from './Filter';

export default class SubFilterGroup extends Component {
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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onAddFilter = this.onAddFilter.bind(this);
    this.onAddSubFilter = this.onAddSubFilter.bind(this);
    this.onDeleteFilter = this.onDeleteFilter.bind(this);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  handleInputChange(name, e) {
    const newVal = e.target.value;
    const { filter, updateFilter } = this.props;
    const newFilter = filter.set(name, newVal);
    updateFilter(newFilter);
  }

  onAddFilter() {
    const { addFilter } = this.props;
    addFilter("filters");
  }

  onAddSubFilter() {
    const { addSubFilter } = this.props;
    addSubFilter("filters");
  }

  onDeleteFilter() {
    const { deleteFilter } = this.props;
    deleteFilter();
  }

  render() {
    const { isTop, filter, addFilter, addSubFilter, updateFilter, deleteFilter } = this.props;
    const subFilters = filter.get('filters').map(function (subFilter, subIndex) {

      const newAddFilter = addFilter.bind(null, "filters", subIndex);
      const newAddSubFilter = addSubFilter.bind(null, "filters", subIndex);
      const newUpdateFilter = updateFilter.bind(null, "filters", subIndex);
      const newDeleteFilter = deleteFilter.bind(null, "filters", subIndex);

      return (<Filter filter={subFilter}
                      key={subFilter.toJS()+subIndex}
                      addFilter={newAddFilter}
                      addSubFilter={newAddSubFilter}
                      updateFilter={newUpdateFilter}
                      deleteFilter={newDeleteFilter}

      />);
    });
    return (
      <div style={{margin:'0 0 0 20px'}}>
        <input
          type='text'
          placeholder='logic'
          value={filter.get('logic')}
          onChange={this.handleInputChange.bind(null,'logic')}/>
        <button className='k-button' onClick={this.onAddFilter}>
          +
        </button>
        <button className='k-button'
                onClick={this.onAddSubFilter}>
          [+]
        </button>
        {!isTop ? <button className='k-button'
                          onClick={this.onDeleteFilter}>
          -
        </button> : null}
        {subFilters}
      </div>
    );
  }
}
