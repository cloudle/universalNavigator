import { createSwitchNavigator, } from '@react-navigation/core';
import { createBrowserApp, } from '@react-navigation/web';

import { routeConfigs } from './utils';

const ApplicationStack = createSwitchNavigator(routeConfigs);

export const AppNavigator = createBrowserApp(ApplicationStack);
