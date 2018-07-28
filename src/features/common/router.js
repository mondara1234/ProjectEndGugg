import React from 'react';
import HeaderLeftMenu from '../common/components/HeaderLeftMenu';
import DashboardScreen from "./screen/DashboardScreen";

export const DASHBOARD = 'DASHBOARD';

export const CommonRouter = {
    [DASHBOARD]: {
        screen: DashboardScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate("DrawerToggle")} />
        })
    }
};
