import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Password from './pages/Password';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Password,
    }
  )
);

export default Routes;
