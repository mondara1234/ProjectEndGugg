import React from 'react';
import { YellowBox, AppRegistry } from 'react-native'
import { nameProject as AppGugg } from './app.json';
import App from './src/app';

const ProjectEnd = () => <App />;

YellowBox.ignoreWarnings([
    'Remote debugger',
]);

AppRegistry.registerComponent(AppGugg, () => ProjectEnd);
