import React from 'react';
import { AppRegistry } from 'react-native';
import { nameProject as AppGugg } from './app.json';
import App from './src/app';

const ProjectEnd = () => <App />;

export default ProjectEnd;

AppRegistry.registerComponent(AppGugg, () => ProjectEnd);
