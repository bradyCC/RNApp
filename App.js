/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { SafeAreaView, Platform, StyleSheet, View, Text } from "react-native";
import { Button } from "@ant-design/react-native"; // 集成ant-mobile-rn, 按需引入
import AppNavigator from "./AppNavigator";

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

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

export default App;
