import React from 'react';
import { Dimensions } from "react-native";
import { addNavigationHelpers, DrawerNavigator, StackNavigator } from 'react-navigation';
import Sidebar from '_features/common/containers/Sideber';
import { CommonRouter, DASHBOARD } from '_features/common/router';
import { historyRouter, HISTORY_SCREEN, DETLEHISTORY_SCREEN } from "_features/history/router";
import { calFoodRouter, CAL_FOOD_SCREEN } from "_features/calFood/router";
import {SelectFoodRouter, SELECT_FOOD_SCREEN } from "_features/selectFood/router";
import { UserRouter, LOGIN } from '_features/User/router';
import { qrcodeRouter } from '_features/qrcodeScanner/router';
import { HEADER_STYLE } from '_src/common/constants';
import {createReduxBoundAddListener} from "react-navigation-redux-helpers";

export const RootStack = StackNavigator({
    ...CommonRouter,
    ...historyRouter,
    ...UserRouter,
    ...qrcodeRouter,
    ...SelectFoodRouter,
    ...calFoodRouter
},{
    initialRouteName: HISTORY_SCREEN,
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
