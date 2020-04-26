import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../component/HomeScreen/HomeScreen';
import ProfileScreen from '../component/ProfileScreen/ProfileScreen';
import { YourTreble } from '../component/HomeScreen/TrebleCenter/TrebleCenter';
import { PublishTreble } from '../component/HomeScreen/TrebleCenter/TrebleDetailUser';
import { NewTreble } from '../component/HomeScreen/TrebleCenter/NewTreble';
import RecorderScreen from '../component/RecorderScreen/RecorderScreen';
import {AllTreble} from '../component/HomeScreen/TrebleCenter/AllTreble'
import TrebleDetailNonUser from '../component/HomeScreen/TrebleCenter/TrebleDetailNonUser'
import PreviewScreen from '../component/HomeScreen/TrebleCenter/PreviewScreen';

const AppNavigation = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    TrebleCenter : { screen: YourTreble },
    TrebleDetailUser : {screen: PublishTreble},
    NewTreble : {screen: NewTreble},
    RecorderScreen: {screen: RecorderScreen},
    AllTreble: {screen: AllTreble},
    TrebleDetailNonUser : {screen : TrebleDetailNonUser},
    PreviewScreen : {screen : PreviewScreen}
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

export default AppNavigation