/**
 * @Author: brady
 * @Date: 2019/7/22
 * @Last Created time: 14:30:18
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {};
export default class MyNewsList extends Component<Props> {
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

  onPress = (id, title) => {
    this.props.navigation.navigate("HomePage", { id: id, title: title });
  };

  // 渲染
  render() {
    const newsList = this.props.data;
    return (
      <View style={styles.container}>
        {newsList.map(item => {
          return <Text key={item.id}>{item.title}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
  }
});
