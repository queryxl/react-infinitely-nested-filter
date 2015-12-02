import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Filter from './Filter';

export default class RDSFilterSingle extends Component {
  static propTypes = {
    filter: PropTypes.object,
    updateFilter: PropTypes.func,
    deleteFilter: PropTypes.func,
    path: PropTypes.array,
    isTop: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDeleteFilter = this.onDeleteFilter.bind(this);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  handleInputChange(name, e) {
    const newVal = e.target.value;
    const { filter, updateFilter } = this.props;
    const newFilter = filter.set(name, newVal);
    updateFilter(newFilter);
  }

  onDeleteFilter() {
    const { deleteFilter } = this.props;
    deleteFilter();
  }

  render() {
    const {  filter, filterActions } = this.props;
    return (
      <div style={{margin:'0 0 0 20px'}}>
        <input
          type='text'
          placeholder='field'
          value={filter.get('field')}
          onChange={this.handleInputChange.bind(null,'field')}/>
        <input
          type='text'
          placeholder='operator'
          value={filter.get('operator')}
          onChange={this.handleInputChange.bind(null,'operator')}/>

        <input
          type='text'
          placeholder='value'
          value={filter.get('value')}
          onChange={this.handleInputChange.bind(null,'value')}/>
        <button
          onClick={this.onDeleteFilter}>
          -
        </button>
      </div>
    );
  }
}
