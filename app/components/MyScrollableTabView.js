/**
 * @Author: brady
 * @Date: 2019/7/25
 * @Last Created time: 13:19:37
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";

type Props = {};
export default class MyScrollableTabView extends Component<Props> {
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
        <ScrollableTabView
          tabBarPosition="top"
          onChangeTab={obj => console.log(obj)}
          onScroll={position => console.log(position)}
          initialPage={1}
          tabBarUnderlineStyle={{ backgroundColor: "rgb(16, 142, 233)" }}
          tabBarBackgroundColor="white"
          tabBarActiveTextColor="navy"
          tabBarInactiveTextColor="black"
          tabBarTextStyle={{ fontSize: 15 }}
          scrollWithoutAnimation={false}
          prerenderingSiblingsNumber={0}
        >
          <View tabLabel="ReactNative" style={styles.viewStyle}>
            <Text>1</Text>
          </View>
          <View tabLabel="React" style={styles.viewStyle}>
            <Text>2</Text>
          </View>
          <View tabLabel="Vue" style={styles.viewStyle}>
            <Text>3</Text>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
