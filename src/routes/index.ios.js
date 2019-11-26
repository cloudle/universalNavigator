import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

import { routeConfigs } from './utils';

const ApplicationStack = createSwitchNavigator(routeConfigs);

export const AppNavigator = createAppContainer(ApplicationStack);
