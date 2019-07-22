/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 14:48:49
 * @Description:
 */

import React, { Fragment, Component } from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import AppNavigator from "./AppNavigator";
import SplashScreen from "react-native-splash-screen";

import Dimensions from "./Dimensions";
import FlexboxDemo from "./FlexboxDemo";
import ImageDemo from "./ImageDemo";
import TextInputDemo from "./TextInputDemo";

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

export default class DemoApp extends Component {
  render() {
    return (
      <Fragment>
        <AppNavigator />
        {/*<Dimensions />*/}
        {/*<FlexboxDemo />*/}
        {/*<ImageDemo />*/}
        {/*<TextInputDemo />*/}
      </Fragment>
    );
  }

  componentDidMount() {
    SplashScreen.hide();
  }
}

const styles = StyleSheet.create({});
