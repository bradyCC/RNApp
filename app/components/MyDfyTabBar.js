/**
 * @Author: brady
 * @Date: 2019/7/25
 * @Last Created time: 16:00:13
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {};
export default class MyDfyTabBar extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    goToPage: PropTypes.func, // 跳转方法
    activeTab: PropTypes.number, // 当前选中Tab下标
    tabs: PropTypes.array, // 所有Tab
    tabNames: PropTypes.array, // Tab名称
    tabIconNames: PropTypes.array // Tab图标
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  renderTabOption = (tab, i) => {
    let color = this.props.activeTab === i? "#688E23": "#ADADAD";
    return (
      <TouchableOpacity
        onPress={() => this.props.goToPage(i)}
        key={tab}
        style={styles.tab}
      >
        <View style={styles.tabItem}>
          <Icon
            name={this.props.tabIconNames[i]}
            size={30}
            color={color}
          />
          <Text style={{ color: color }}>{this.props.tabNames[i]}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  setAnimationValue = value => {
    console.log(`动画值： ${value}`);
  };

  // 渲染
  render() {
    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  }

  componentDidMount() {
    this.props.scrollValue.addListener(this.setAnimationValue);
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    height: 50
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tabItem: {
    flexDirection: "column",
    alignItems: "center"
  }
});
