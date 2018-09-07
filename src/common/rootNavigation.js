import React from 'react';
import { addNavigationHelpers, DrawerNavigator, StackNavigator } from 'react-navigation';
import Sidebar from '../features/common/containers/Sideber';
import { CommonRouter } from '../features/common/router';
import { historyRouter } from "../features/history/router";
import { ListFoodRouter } from "../features/listFood/router";
import {SelectFoodRouter, SELECT_FOOD_SCREEN} from "../features/selectFood/router";
import { UserRouter, LOGIN } from '../features/User/router';
import { qrcodeRouter } from '../features/qrcodeScanner/router';
import { HEADER_STYLE } from '../../../ProjectEndGugg/src/common/constants';
import {Dimensions} from "react-native";
import {createReduxBoundAddListener} from "react-navigation-redux-helpers";

export const RootStack = StackNavigator({
    ...CommonRouter,
    ...historyRouter,
    ...UserRouter,
    ...qrcodeRouter,
    ...ListFoodRouter,
    ...SelectFoodRouter
},{
    initialRouteName: SELECT_FOOD_SCREEN,
    navigationOptions: ({navigation}) => ({
        ...HEADER_STYLE
    }),
    cardStyle: {
        backgroundColor: '#f6f6f6',
    }
});

const RootDrawer = DrawerNavigator(
    {
        'root': {
            screen: RootStack
        },
    },
    {
        // eslint-disable-next-line react/display-name
        contentComponent: Sidebar,
        drawerWidth: Dimensions.get('window').width - 120,
    }
);

export const RootNavigator = StackNavigator({
    Drawer: { screen: RootDrawer },
}, {
    headerMode: 'none',
});





export default RootNavigator;
