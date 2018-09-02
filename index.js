import React from 'react';
import { YellowBox, AppRegistry } from 'react-native'
import { nameProject as AppGugg } from './app.json';
<<<<<<< HEAD
import App from './src/app';
=======
import App from './src/features/User/components/imagePicker';
import ImageSuccessScreen from "./ImageSuccessScreen";
>>>>>>> f1573f805513bc8dd4c9d0249a170845b766ebca

const ProjectEnd = () => <App />;

YellowBox.ignoreWarnings([
    'Remote debugger',
]);

AppRegistry.registerComponent(AppGugg, () => ImageSuccessScreen);
