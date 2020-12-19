import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList186812Navigator from '../features/ArticleList186812/navigator';
import Maps186799Navigator from '../features/Maps186799/navigator';
import BlankScreen0186794Navigator from '../features/BlankScreen0186794/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList186812: { screen: ArticleList186812Navigator },
Maps186799: { screen: Maps186799Navigator },
BlankScreen0186794: { screen: BlankScreen0186794Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
