import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, StyleSheet, YellowBox } from 'react-native';
import { StyleProvider, Root } from 'native-base';
import NativeTachyons from 'react-native-style-tachyons';
import { createStore } from "redux";
import  AllReducer from './reducers/index';
import Testcount from './Testcount';

const store = createStore(AllReducer);

class StoreData extends React.Component{

    render() {
        return (
            <Provider store={store}>
                <Testcount/>
            </Provider>
        )
    }
}

export default  StoreData;

store.dispatch({
    type: 'MONDARA',
    dataarray: 'mondara'
});