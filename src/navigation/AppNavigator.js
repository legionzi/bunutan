import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoading/AuthLoadingScreen';
import LogInScreen from '../screens/LogIn/LogInScreen';
import MainTabNavigator from './MainTabNavigator';

const LogInStack = createStackNavigator({
    LogIn: LogInScreen
});

const SwitchNavigator = createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    LogIn: LogInStack,
});

export default createAppContainer(SwitchNavigator);
