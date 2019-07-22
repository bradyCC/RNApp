/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";

const ButtonDemo = () => {
  return (
    <Fragment>
      {/* Button 按钮组件用法 */}
      <View style={styles.container}>
        <Button
          title="点我!"
          onPress={() => Alert.alert("你点击了按钮!")}
          color=""
        />
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

export default ButtonDemo;
