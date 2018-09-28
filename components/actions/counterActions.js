import {SET_COUNTER,CLEAR_COUNTER,INCRENENT_COUNTER,DECREMENT_COUNTER,ADDDATA_COUNTER, FETCHDATA, FETCH_FLIGHT } from './TypesActions';
import axios from 'axios';

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

export const runStore = () => {
        axios.get(`http://192.168.1.4/My_SQL/ShowAllDataList.php`)
        .then(res => {
            return{
                type: FETCHDATA,
                payload: res.data
            };
        })
}

export function getAllFlights() {
    return dispatch => {
        return fetch('http://192.168.1.4/My_SQL/ShowAllDataList.php')
        .then((response) => response.json())
        .then((responseJson) => {
            return {
                type: FETCH_FLIGHT,
                payload: responseJson
            };
        })
        .catch((error) => {
        });
}}

export const getNews = () => ({
    type: 'GET_NEWS',
});
