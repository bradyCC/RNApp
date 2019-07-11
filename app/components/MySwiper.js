/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 20:52:40
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Swiper from "react-native-swiper";

type Props = {};
export default class MySwiper extends Component<Props> {
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
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          removeClippedSubviews={false}
          autoplayTimeout={2.5}
        >
          <View style={[styles.slide, styles.slide1]}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={[styles.slide, styles.slide2]}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={[styles.slide, styles.slide3]}>
            <Text style={styles.text}>And simple</Text>
          </View>
          <View style={[styles.slide, styles.slide3]}>
            <Text style={styles.text}>And simple2</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: 400
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide1: {
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    backgroundColor: "#97CAE5"
  },
  slide3: {
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
