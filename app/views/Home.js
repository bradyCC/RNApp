/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 16:21:30
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MySwiper from "../components/MySwiper";

type Props = {};
export default class Home extends Component<Props> {
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
        {id: "1", banner: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563181673588&di=8a435002d1becd4408e2fad8b5a2bfd1&imgtype=0&src=http%3A%2F%2Fpic18.nipic.com%2F20120201%2F5845624_110219024306_2.jpg", width: "1000", height: "663" },
        {id: "2", banner: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563171117680&di=7dddad06d6d12dec14db7cd3916ae47d&imgtype=0&src=http%3A%2F%2Fwww.czt.cn%2FUpImage%2FRelate%2F20170623115550.jpg", width: "999", height: "350" },
        {id: "3", banner: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563180122496&di=7abc0d29848cca16db3963e0d31826a4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0193d656f1010e6ac7257d20f40b3d.jpg", width: "782", height: "405" },
      ]
    };
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <MySwiper data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#F5FCFF"
  }
});
