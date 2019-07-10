/**
 *  Class: ImageDemo
 *  Author: brady
 *  Date: 2019/7/4.
 *  Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// Dimensions 用于获取设备宽、高、分辨率
const Dimensions = require("Dimensions");
const { width } = Dimensions.get("window");

let cols = 3;
let boxW = 100;
let vMargin = (width - cols * boxW) / (cols + 1);
let hMargin = 25;

type Props = {};
export default class ImageDemo extends Component<Props> {
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
        { icon: 'http://pic26.nipic.com/20130114/3831645_182708514000_2.jpg', title: '单肩包' },
        { icon: 'https://img.alicdn.com/imgextra/i4/i3/12525030960771327/T1IDFfFx8aXXXXXXXX_!!0-item_pic.jpg', title: '链条包' },
        { icon: 'http://pic15.nipic.com/20110723/7938151_142822223170_2.jpg', title: '钱包' },
        { icon: 'https://img.alicdn.com/imgextra/i4/i3/T1vsSRFz0cXXXXXXXX_!!0-item_pic.jpg', title: '手提包' },
        { icon: 'http://pic16.nipic.com/20110908/8305881_172626754147_2.jpg', title: '双肩包' },
        { icon: 'http://pic15.nipic.com/20110617/2889686_112512200417_2.jpg', title: '斜跨包' }
      ]
    };
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        {/* Image 图片组件用法 */}
          {
            this.state.data.map((item, index)=> {
              return (
                <View style={ styles.imageView } key={index}>
                  <Image source={{ uri: item.icon }} style={ styles.image} />
                  <Text>{ item.title }</Text>
                </View>
              )
            })
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  imageView: {
    width: boxW,
    height: boxW,
    alignItems: "center",
    marginLeft: vMargin,
    marginTop: hMargin,
    backgroundColor: "white"
  },
  image: {
    width: 80,
    height: 80
  }
});
