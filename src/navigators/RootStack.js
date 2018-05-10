// @flow
import { StackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SamplesScreen from "../screens/SamplesScreen";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Samples: {
      screen: SamplesScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default RootStack;
