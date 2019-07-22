/**
 * @Author: brady
 * @Date: 2019/7/22
 * @Last Created time: 13:38:11
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, PixelRatio } from "react-native";

type Props = {};
export default class MyClassifyNavigation extends Component<Props> {
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
        <View style={styles.box}>
          <View style={[styles.item, styles.itemCenter, styles.itemFont]}>
            <Text style={styles.itemFont}>酒店</Text>
          </View>
          <View style={[styles.item, styles.itemBorderBoth]}>
            <View style={[styles.itemView, styles.itemCenter]}>
              <Text style={styles.itemFont}>海外酒店</Text>
            </View>
            <View style={[styles.itemView, styles.itemCenter, styles.itemBorderTop]}>
              <Text style={styles.itemFont}>特惠酒店</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.itemView, styles.itemCenter]}>
              <Text style={styles.itemFont}>团购</Text>
            </View>
            <View style={[styles.itemView, styles.itemCenter, styles.itemBorderTop]}>
              <Text style={styles.itemFont}>客栈、公寓</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  box: {
    // marginTop: 200,
    marginLeft: 5,
    marginRight: 5,
    height: 84,
    flexDirection: "row",
    borderRadius: 5,
    padding: 2,
    backgroundColor: "#FF0067"
  },
  item: {
    flex: 1,
    height: 80
  },
  itemCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  itemView: {
    flex: 1
  },
  itemFont: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  itemBorderBoth: {
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
    borderColor: "#fff"
  },
  itemBorderTop: {
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: "#fff"
  }
});
