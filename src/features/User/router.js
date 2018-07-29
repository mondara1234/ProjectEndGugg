import LoginScreen from "./screen/LoingScreen";
import RegistrationScreen from "./screen/Registration";
import ShowListActivityScreen from "./screen/ShowListActivity";
import EditDataScreen from "./screen/EditData";


export const LOGIN = 'LOGIN';
export const REGISTRATION = 'REGISTRATION';
export const SHOWLIST = 'SHOWLIST';
export const EDITDATA = 'EDITDATA';


export const UserRouter = {
    [LOGIN]: {
        screen: LoginScreen,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        })
    },
    [REGISTRATION]: {
        screen: RegistrationScreen,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        })
    },
    [SHOWLIST]: {
        screen: ShowListActivityScreen,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        })
    },
    [EDITDATA]: {
        screen: EditDataScreen,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        })
    },
};
