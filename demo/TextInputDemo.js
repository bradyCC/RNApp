/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

type Props = {};
export default class TextInputDemo extends Component<Props> {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      phone: ``
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* TextInput 输入框组件用法 */}
        <TextInput placeholder="请输入手机号" onChangeText={ (phone) => this.setState({ phone }) } />
        <Button title="点我!" onPress={ () => Alert.alert('你点击了按钮!')} color=""></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  }
});
