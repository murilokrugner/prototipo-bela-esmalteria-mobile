import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Password from './pages/Password';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (isSigned = false) => createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      SignIn,
      SignUp,
      Password,
    }),
    App: createBottomTabNavigator({
      Dashboard,
      Profile,
    }, {
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#FFF',
          inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          style: {
            backgroundColor: '#008080',
        }
      }
    }
  ),
  },
    {
      initialRouteName: isSigned ? 'App' : 'Sign',
    }
  ),
)

