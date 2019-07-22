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
      phone: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* TextInput 输入框组件用法 */}
        {/* 1. editable 用于设置是否禁用 */}
        {/* 2. keyboardType 用于设置弹出小键盘类型 */}
        {/* 3. onChangeText 用于内容变化时调用，等同于 React.js 中的 onChange */}
        <TextInput
          placeholder="请输入手机号"
          keyboardType="numeric"
          onChangeText={phone => this.setState({ phone })}
        />
        <Button
          title="点我!"
          onPress={() => Alert.alert("你点击了按钮!")}
          color=""
        />
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
