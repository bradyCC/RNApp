/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { SafeAreaView, Platform, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";

import { Button } from "@ant-design/react-native"; // 集成ant-mobile-rn, 按需引入
import AppNavigator from "./app/router/index";
import SplashScreen from "react-native-splash-screen";

const Navigator = Platform.select({
  ios: () => (
    <View style={{ flex: 1, backgroundColor: "#dbdbdb" }}>
      <AppNavigator />
    </View>
  ),
  android: () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dbdbdb" }}>
      <AppNavigator />
    </SafeAreaView>
  )
})();

export default class App extends Component {
  render() {
    return <Provider store={store}>{Navigator}</Provider>;
  }

  componentDidMount() {
    SplashScreen.hide();
  }
}
