import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { StyleProvider, Root } from 'native-base';
import ThemeVariables from '../native-base-theme/variables/platform';
import RootNavigation from './common/rootNavigation';
import getTheme from '../native-base-theme/components';
import AllReducer from "../components/reducers/index";
import {createStore} from "redux";
export  const store = createStore(AllReducer);
class App extends React.Component {
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