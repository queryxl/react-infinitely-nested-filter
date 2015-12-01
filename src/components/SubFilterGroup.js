import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Filter from './Filter';

export default class SubFilterGroup extends Component {
  static propTypes = {
    filter: PropTypes.object,
    filterActions: PropTypes.object,
    path: PropTypes.array,
    isTop: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  handleInputChange(name, e) {
    const newVal = e.target.value;
    const { path, filterActions } = this.props;
    filterActions.updateFilter([...path, name], newVal);
  }

  render() {
    const { isTop, filter, filterActions, path } = this.props;
    const subFilters = filter.get('filters').map(function (subFilter, index) {
      return (<Filter filter={subFilter}
                      key={subFilter.toJS()+index}
                      filterActions={filterActions}
                      path={path.concat(['filters', index])}/>);
    });
    return (
      <div style={{margin:'0 0 0 20px'}}>
        <input
          type='text'
          placeholder='logic'
          value={filter.get('logic')}
          onChange={this.handleInputChange.bind(null,'logic')}/>
        <button className='k-button' onClick={filterActions.addFilter.bind(null, path.concat(['filters']))}>
          +
        </button>
        <button className='k-button'
                onClick={filterActions.addSubFilter.bind(null, path.concat(['filters']))}>
          [+]
        </button>
        {!isTop ? <button className='k-button'
                          onClick={filterActions.deleteFilter.bind(null, path)}>
          -
        </button> : null}
        {subFilters}
      </div>
    );
  }
}
