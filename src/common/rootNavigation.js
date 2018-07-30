import React from 'react';
import { addNavigationHelpers, DrawerNavigator, StackNavigator } from 'react-navigation';
import Sidebar from '../features/common/containers/Sideber';
import { CommonRouter } from '../features/common/router';
import { CheckinmapRouter } from '../features/check-in-map/router';
import { UserRouter, LOGIN } from '../features/User/router';
import { qrcodeRouter, QRCODE_SCREEN } from '../features/qrcodeScanner/router';
import { HEADER_STYLE } from '../../../ProjectEndGugg/src/common/constants';
import {Dimensions} from "react-native";

export const RootStack = StackNavigator({
    ...CommonRouter,
    ...CheckinmapRouter,
    ...UserRouter,
    ...qrcodeRouter
},{
    initialRouteName: QRCODE_SCREEN,
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

export const RootNavigation = StackNavigator({
    Drawer: { screen: RootDrawer },
}, {
    headerMode: 'none',
});

export default RootNavigation;
