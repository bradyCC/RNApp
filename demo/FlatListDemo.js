/**
 *  Class: FlatListDemo
 *  Author: brady
 *  Date: 2019/7/5.
 *  Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

type Props = {};
export default class FlatListDemo extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      data: [
        { id: "1", content: "第一列", color: "red" },
        { id: "2", content: "第二列", color: "blue" },
        { id: "3", content: "第三列", color: "green" },
        { id: "4", content: "第四列", color: "yellow" },
        { id: "5", content: "第五列", color: "purple" },
        { id: "6", content: "第六列", color: "gray" }
      ]
    };
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={({item}) => <Text key={item.id} style={{backgroundColor: item.color, width: 480, height: 200}}>{item.content}</Text>}></FlatList>
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
