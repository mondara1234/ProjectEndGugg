import {SET_COUNTER,CLEAR_COUNTER,INCRENENT_COUNTER,DECREMENT_COUNTER } from '../actions/TypesActions';

export default (state = 0, action) => {
    switch (action.type) {
        case INCRENENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        case CLEAR_COUNTER:
            return 0;
        case SET_COUNTER:
            return action.payload;
        default:
            return state;
    }
}
