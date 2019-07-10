/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { StyleSheet, View, Text } from "react-native";

// Dimensions 用于获取设备宽、高、分辨率
const Dimensions = require("Dimensions");
const { width, height, scale } = Dimensions.get("window");

const ImageDemo = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        {/* 设备 宽、高、分辨率 */}
        <Text>当前屏幕的宽度：{width}</Text>
        <Text>当前屏幕的高度：{height}</Text>
        <Text>当前屏幕的分辨率：{scale}</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  }
});

export default ImageDemo;
