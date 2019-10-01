import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, UserAuthStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    // SignIn: SignInStack,
    UserAuth: UserAuthStack,
    OnBoarding: OnBoardingStack,
    App: Drawer
  },
  {
    initialRouteName: 'UserAuth'
  }
);
