import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import filter                from './filter';

export default combineReducers({
  filter,
  routing: routeReducer
});
