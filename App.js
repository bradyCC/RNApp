/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Button } from "@ant-design/react-native"; // 集成ant-mobile-rn, 按需引入
import AppNavigator from "./AppNavigator";

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#dbdbdb" }}>
        {/*<View style={styles.contaienr}>*/}
        {/*  <Text>Welcome to React Native!</Text>*/}
        {/*</View>*/}
        <AppNavigator />
      </SafeAreaView>
    </Fragment>
  );
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
