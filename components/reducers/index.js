import {combineReducers} from 'redux';
import  CounterReducer from './AllReducers';
import  ServerReducer from './Server';

export default  combineReducers({
    counterreducer: CounterReducer,
    serverreducer: ServerReducer
});
