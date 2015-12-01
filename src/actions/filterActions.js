import * as ActionTypes from '../constants/ACTION_TYPES';

export function addFilter(path) {
  return {
    type: ActionTypes.ADD_FILTER,
    filter: {
      field: '',
      operator: '',
      value: ''
    },
    path
  };
}

export function addSubFilter(path) {
  return {
    type: ActionTypes.ADD_FILTER,
    filter: {
      logic: 'AND',
      filters: []
    },
    path
  };
}
export function updateFilter(path, val) {
  return {
    type: ActionTypes.UPDATE_FILTER,
    path, val
  };
}

export function deleteFilter(path) {
  return {
    type: ActionTypes.DELETE_FILTER,
    path
  };
}
