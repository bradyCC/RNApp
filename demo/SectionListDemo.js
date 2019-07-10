/**
 *  Class: ListViewDemo
 *  Author: brady
 *  Date: 2019/7/5.
 *  Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, SectionList } from "react-native";

type Props = {};
export default class SectionListDemo extends Component<Props> {
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
        { id: "1", title: "D", data: ["Devin"] },
        { id: "2", title: "J", data: ["Jackson", "James", "Join", "Jack"] }
      ]
    };
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <SectionList sections={this.state.data} renderItem={({item}) => <Text style={[styles.content,styles.text]}>{item}</Text>} renderSectionHeader={({section}) => <Text style={[styles.header,styles.text]}>{section.title}</Text>} keyExtractor={(item, index) => index}></SectionList>
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
  header: {
    marginTop: 20,
    backgroundColor: "red"
  },
  content: {
    marginTop: 5,
    backgroundColor: "blue"
  },
  text: {
    width: 480,
    height: 100,
    lineHeight: 100,
    color: "white",
    textAlign: "center"
  }
});
