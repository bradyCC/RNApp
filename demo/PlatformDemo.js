/**
 *  Class: PlatformDemo
 *  Author: brady
 *  Date: 2019/7/5.
 *  Description:
 */
import React, { Component } from "react";
import { Platform, StyleSheet, View, Text} from "react-native";

type Props = {};
export default class PlatformDemo extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    // 特定平台扩展名  import PlatformDemo from "./demo/PlatformDemo"
    // IOS: PlatformDemo.ios.js
    // Android: PlatformDemo.andorid.js
    return (
      <View style={styles.container}>
        <Text>PlatformDemo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "#f00"
      },
      android: {
        backgroundColor: "#0ff"
      }
    })
  }
});
