import { AppRegistry } from "react-native";
import App from "./src/App";

AppRegistry.registerComponent("ReactNativeCrossPlatformBoilerplate", () => App);

AppRegistry.runApplication("ReactNativeCrossPlatformBoilerplate", {
  rootTag: document.getElementById("root")
});
