/**
 * @Author: brady
 * @Date: 2019/7/12
 * @Last Created time: 11:10:45
 * @Description:
 */
import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import WebView from "react-native-webview";

type Props = {};
export default class MyWebView extends Component<Props> {
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
          onLoadStart={ () => <View><Text>Start</Text></View> }
          source={{ uri: "https://cn.bing.com/" }}
          onLoadProgress={ e => console.log(e.nativeEvent.progress) }
          renderError={ () => <View><Text>Error</Text></View>  }
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
