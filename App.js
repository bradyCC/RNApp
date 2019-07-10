/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Fragment } from "react";
import { SafeAreaView, Platform, View } from "react-native";
import { Button } from "@ant-design/react-native"; // 集成ant-mobile-rn, 按需引入
import AppNavigator from "./app/router/index";

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

const App = () => {
  return <Fragment>{Navigator}</Fragment>;
};

export default App;
