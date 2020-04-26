import { createStackNavigator } from 'react-navigation-stack'
import Login from '../component/AuthScreen/AuthScreen'

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation