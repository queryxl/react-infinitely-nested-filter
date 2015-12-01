import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import SubFilterGroup from './SubFilterGroup';
import SubFilterSingle from './SubFilterSingle';

export default class Filter extends Component {
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

    const logic = filter.get('logic');
    if (logic) {
      return (
        <SubFilterGroup filter={filter} path={path} filterActions={filterActions} isTop={isTop}/>
      );
    } else {
      return (
        <SubFilterSingle filter={filter} path={path} filterActions={filterActions}/>
      );
    }
  }
}
