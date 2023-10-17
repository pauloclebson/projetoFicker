import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './src/pages/Carregamento/LoadingScreen';
import Home from './src/pages/Home';
import LoginScreen from './src/pages/LoginScreen';

const AppNavigator = createStackNavigator(
  {
    Loading: LoadingScreen,
    Home: Home, 
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
