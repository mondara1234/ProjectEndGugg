import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { StyleProvider, Root } from 'native-base';
import ThemeVariables from '../native-base-theme/variables/platform';
import Testcount from './Testcount';
import getTheme from '../native-base-theme/components';
import AllReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootSaga from './sagar';

const sagaMiddleware = createSagaMiddleware();
const Middleware = applyMiddleware(sagaMiddleware, thunk);

export  const store = createStore(AllReducer, Middleware);

sagaMiddleware.run(rootSaga);

class App extends React.PureComponent{
    render() {
        return (
            <StyleProvider style={getTheme(ThemeVariables)}>
                <Provider store={store}>
                    <Root>
                        <StatusBar
                            barStyle="light-content"
                            backgroundColor="#6a51ae"
                        />
                        <Testcount />
                    </Root>
                </Provider>
            </StyleProvider>
        );
    }
}
export default App;