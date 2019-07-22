/**
 *  Class: LifeCycleDemo
 *  Author: brady
 *  Date: 2019/7/4.
 *  Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type Props = {};
export default class LifeCycleDemo extends Component<Props> {
  // 默认属性
  static defaultProps = {
    name: "Brady",
    age: 33
  };

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      person: "张三"
    };
  }

  handleUpdate = () => {
    this.setState({
      person: "李四"
    });
  };

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.handleUpdate()}>
          <View style={styles.view}>
            <Text style={styles.white}>{this.props.name}</Text>
            <Text style={styles.white}>{this.props.age}</Text>
            <Text style={styles.white}>{this.state.person}</Text>
          </View>
        </TouchableOpacity>
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
  view: {
    flexDirection: "row",
    backgroundColor: "#f00"
  },
  white: {
    color: "#fff"
  }
});
