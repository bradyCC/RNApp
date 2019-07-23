/**
 * @Author: brady
 * @Date: 2019/7/23
 * @Last Created time: 17:17:36
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ProgressBarAndroid,
  ProgressViewIOS
} from "react-native";

type Props = {};
export default class MyProgressBar extends Component<Props> {
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
    return (
      <View style={styles.container}>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10
  }
});
