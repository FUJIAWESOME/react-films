import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { userReducer } from './userReducer';
import { asyncDataReducer } from './asyncDataReducer'

export const rootReducer = combineReducers({
    filters: filterReducer,
    user: userReducer,
    asyncData: asyncDataReducer,
});