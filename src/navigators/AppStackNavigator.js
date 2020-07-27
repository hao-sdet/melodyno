import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen'
import MainScreen from '../screens/MainScreen'

const AppStackNavigator = createStackNavigator({
    Login: { 
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Main: { 
        screen: MainScreen,
        navigationOptions: {
            header: null
        }
    },
    // ForgotPassword: {
    //     screen: ForgotPassword,
    // },
    // SignUp: {
    //     screen: SignUp
    // }
});
export default createAppContainer(AppStackNavigator);