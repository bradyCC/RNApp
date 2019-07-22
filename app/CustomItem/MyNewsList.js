/**
 * @Author: brady
 * @Date: 2019/7/22
 * @Last Created time: 14:30:18
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

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
    this.props.push.navigation.navigate("HomePage", { id: id, title: title });
  };

  // 渲染
  render() {
    const newsList = this.props.data;
    return (
      <View style={styles.container}>
        {newsList.map(item => {
          return (
            <TouchableHighlight
              underlayColor="#eee"
              activeOpacity={0.85}
              key={item.id}
              onPress={() => this.onPress(item.id, item.title)}
              style={styles.item}
            >
              <View>
                <Text style={styles.font} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    );
  }

  componentDidMount() {
    console.log(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#F5FCFF",
    marginLeft: 10,
    marginRight: 10
  },
  item: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: "#dbdbdb"
  },
  font: {
    fontSize: 16,
    color: "#333"
  }
});
