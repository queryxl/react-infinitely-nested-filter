/**
 * Created by xu on Nov 26, 2015.
 */
import * as ACTION_TYPES from '../constants/ACTION_TYPES';
import Immutable from 'immutable';

const initState = Immutable.fromJS({
  logic: 'AND',
  filters: []
});

export default function columns(state = initState, action) {
  const {type,filter,val,path}=action;

  switch (type) {
    case ACTION_TYPES.ADD_FILTER:
      return state.updateIn(path, array=>array.unshift(Immutable.fromJS(filter)));
    case ACTION_TYPES.UPDATE_FILTER:
      return state.setIn(path, val);
    case ACTION_TYPES.DELETE_FILTER:
      return state.deleteIn(path);

    default:
      return state;
  }
}
