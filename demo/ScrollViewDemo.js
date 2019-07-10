/**
 *  Class: ScrollViewDemo
 *  Author: brady
 *  Date: 2019/7/4.
 *  Description:
 */
import React, { Fragment, Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

type Props = {};
export default class ScrollViewDemo extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      colors: ["red", "green", "blue", "yellow", "purple"]
    };
  }

  // 渲染
  render() {
    return (
      <Fragment>
        {/* horizontal: 设置水平滚动 */}
        {/* showsHorizontalScrollIndicator: 设置水平滚动条 */}
        {/* pagingEnabled: 设置水平分页 */}
        {/* scrollEnabled: 设置内容滚动 */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} scrollEnabled={true}>
          {
            this.state.colors.map((item, index) => {
              return (
                <View key={index} style={{backgroundColor: this.state.colors[index], width: 480, height: 200}}>
                  <Text>{item}</Text>
                </View>
              )
            })
          }
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {}
});
