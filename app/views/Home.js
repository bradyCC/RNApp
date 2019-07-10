/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 16:21:30
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MySwiper from "../components/MySwiper";

type Props = {};
export default class Home extends Component<Props> {
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
        <MySwiper />
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
  }
});
