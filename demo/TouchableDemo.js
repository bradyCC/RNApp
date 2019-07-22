/**
 *  Class: TouchableDemo
 *  Author: brady
 *  Date: 2019/7/4.
 *  Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type Props = {};
export default class TouchableDemo extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      title: "TouchableOpacity"
    };
  }

  activeEvent = title => {
    this.setState({
      title
    });
  };

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        {/* Touchable 触摸组件用法 */}
        {/* activeOpacity: 设置透明度 */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.activeEvent("点击")}
          onPressIn={() => this.activeEvent("按下")}
          onPressOut={() => this.activeEvent("抬起")}
          onLongPress={() => this.activeEvent("长按")}
        >
          <Text style={styles.text}>我是文本，但可以点击</Text>
        </TouchableOpacity>
        <Text>{this.state.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    backgroundColor: "#f00"
  }
});
