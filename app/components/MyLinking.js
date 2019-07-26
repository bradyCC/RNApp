/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 11:17:48
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Linking, Alert } from "react-native";

type Props = {};
export default class MyLinking extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      url: `https://www.baidu.com`,
      smsto: `smsto:15069189281`,
      tel: `tel:15069189281`,
      mailto: `mailto:24366825@qq.com`,
      null: `dfy:888999`,
      geo: `geo:37.484847, -122.148386`,
      dfy: `dfy://reactnative.vip/data`
    };
  }

  openURL = url => {
    Linking.openURL(url)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  };

  canOpenURL = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log(`Can\'t handle url: ${url}`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }


  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.openURL(this.state.url)} style={styles.textStyle}>打开外部链接</Text>
        <Text onPress={() => this.canOpenURL(this.state.url)} style={styles.textStyle}>打开外部链接前检查</Text>
        <Text onPress={() => this.canOpenURL(this.state.smsto)} style={styles.textStyle}>点击发送短信</Text>
        <Text onPress={() => this.canOpenURL(this.state.tel)} style={styles.textStyle}>点击打电话</Text>
        <Text onPress={() => this.canOpenURL(this.state.mailto)} style={styles.textStyle}>点击发邮件</Text>
        <Text onPress={() => this.canOpenURL(this.state.null)} style={styles.textStyle}>无法打开链接</Text>
        <Text onPress={() => this.canOpenURL(this.state.geo)} style={styles.textStyle}>打开地图位置</Text>
        <Text onPress={() => this.canOpenURL(this.state.dfy)} style={styles.textStyle}>打开app</Text>
      </View>
    )
  }

  componentDidMount() {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          console.log(`URL地址为：${url}`);
        } else {
          console.log(`URL地址为：空`);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textStyle: {
    fontSize: 20
  }
});
