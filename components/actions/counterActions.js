import {SET_COUNTER,CLEAR_COUNTER,INCRENENT_COUNTER,DECREMENT_COUNTER,ADDDATA_COUNTER } from './TypesActions';

export const counterIncrement =()=>{
    return{
        type: INCRENENT_COUNTER
    };
}

export const counterDecrement =()=>{
    return{
        type: DECREMENT_COUNTER
    };
}

export const counterClear =()=>{
    return{
        type: CLEAR_COUNTER
    };
}

export const counterSet =(reaceivednumber)=>{
    return{
        type: SET_COUNTER,
        payload: reaceivednumber
    };
}

export const countermodara =(ADDdata)=>{
    return{
        type: ADDDATA_COUNTER,
        dataarray: ADDdata
    };
}

