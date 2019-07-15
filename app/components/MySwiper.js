/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 20:52:40
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

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
    const { data } = this.props
    let content, image
    if (data) {
      content = (
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          removeClippedSubviews={false}
          autoplayTimeout={5}
        >
          {
            data.map(item => {
              image = item.banner
              return (
                <View key={item.id}>
                  <Image source={{uri: image}} style={{ width: width, height: width * 596 / 1024 }} />
                </View>
              )
            })
          }
        </Swiper>
      )
    } else {
      content = (
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          removeClippedSubviews={false}
          autoplayTimeout={5}
        >
          <View>
            <Image source={ require("../../assets/images/banner_1.jpg") } style={styles.banner} />
          </View>
          <View>
            <Image source={ require("../../assets/images/banner_2.jpg") } style={styles.banner} />
          </View>
          <View>
            <Image source={ require("../../assets/images/banner_3.jpg") } style={styles.banner} />
          </View>
        </Swiper>
      )
    }
    return (
      <View style={styles.container}>
        { content }
      </View>
    );
  }

  componentDidMount() {
    console.log(this.props)
  }
}

const styles = StyleSheet.create({
  container: {
    height: width * 596 / 1002
  },
  wrapper: {},
  banner: {
    width: width,
    height: width * 596 / 1002
  }
});
