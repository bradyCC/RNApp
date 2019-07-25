/**
 * @Author: brady
 * @Date: 2019/7/25
 * @Last Created time: 15:30:44
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Icon from "react-native-vector-icons/Ionicons";
import IconFont from "react-native-vector-icons/FontAwesome";
import MyDfyTabBar from "./MyDfyTabBar";

type Props = {};
export default class MyBottomScrollableTabView extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      tabNames: ["主页", "分类", "秒杀", "购物车", "我的"],
      // tabIconNames: ["ios-home", "ios-grid", "ios-time", "ios-card", "ios-contact"],
      tabIconNames: ["md-home", "md-grid", "md-time", "md-card", "md-contact"]
    };
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => (
            <MyDfyTabBar
              tabNames={this.state.tabNames}
              tabIconNames={this.state.tabIconNames}
            />
          )}
          tabBarPosition="bottom"
          tabBarUnderlineStyle={{ backgroundColor: "rgb(16, 142, 233)" }}
          tabBarBackgroundColor="white"
          tabBarActiveTextColor="rgb(16, 142, 233)"
          tabBarInactiveTextColor="black"
        >
          <View tabLabel="主页" style={styles.viewStyle}>
            <Text>内容：ReactNative</Text>
            <IconFont.Button
              name="facebook"
              backgroundColor="#3b5998"
              size={20}
            >
              Login with Faceboock
            </IconFont.Button>
            <Icon name="md-alarm" size={50} />
            <IconFont.Button name="twitter" backgroundColor="#3b5998" size={20}>
              Follow me on Twitter
            </IconFont.Button>
          </View>
          <View tabLabel="分类" style={styles.viewStyle}>
            <Text>2</Text>
          </View>
          <View tabLabel="秒杀" style={styles.viewStyle}>
            <Text>3</Text>
          </View>
          <View tabLabel="购物车" style={styles.viewStyle}>
            <Text>4</Text>
          </View>
          <View tabLabel="我的" style={styles.viewStyle}>
            <Text>5</Text>
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
