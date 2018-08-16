import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, YellowBox } from 'react-native';
import { StyleProvider, Root } from 'native-base';
import ThemeVariables from '../native-base-theme/variables/platform';
import RootNavigation from './common/rootNavigation';
import getTheme from '../native-base-theme/components';
import CommonInitialState from '../components/initialState';
import {runStore} from "../components/actions/counterActions";
import configureStore from './common/configStore';

export const fetchFlights = () => {
    return fetch('http://localhost/My_SQL/ShowAllDataList.php')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson ;
        })
};

export  const store = configureStore();
// export const  mylogger = (store)=>(next)=>(action)=>{
//     console.log("Log Action",action);
//     next(action);
// };
class App extends React.PureComponent{
    componentDidMount() {
        store.dispatch(runStore());
    }

    render() {
        return (
            <StyleProvider style={getTheme(ThemeVariables)}>
                <Provider store={store}>
                    <Root>
                        <StatusBar
                            barStyle="light-content"
                            backgroundColor="#6a51ae"
                        />
                        <RootNavigation />
                    </Root>
                </Provider>
            </StyleProvider>
        );
    }
}
export default App;