/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 16:22:51
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {};
export default class NewsDetail extends Component<Props> {
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
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>新闻ID：{params.id}</Text>
        <Text>新闻标题：{params.title}</Text>
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
