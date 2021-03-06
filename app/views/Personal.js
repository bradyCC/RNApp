/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 16:22:34
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

import MyImagePicker from "../components/MyImagePicker";
import MyImageViewer from "../components/MyImageViewer";

const { width, height } = Dimensions.get("window");

type Props = {};
export default class Personal extends Component<Props> {
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
        <WebView
          style={{ width: width, height: height }}
          source={{ uri: "https://facebook.github.io/react-native/" }}
          // source={{ html: "<h1>Hello World</h1>" }}
        />
        <Text>Peronal</Text>
        <Button
          title="Go to PersonalInfo"
          onPress={() => this.props.navigation.navigate("PersonalInfo")}
        />
        <MyImagePicker />
        <MyImageViewer />
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
