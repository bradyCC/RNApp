/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 16:22:34
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

type Props = {};
export default class CenterScreen extends Component<Props> {
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
        <Text>CenterScreen</Text>
        <Button
          title="Go to CenterPageScreen"
          onPress={() => this.props.navigation.navigate("Page")}
        />
      </View>
    )
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
