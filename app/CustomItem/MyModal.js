/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 10:04:38
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Modal, Alert, Button } from "react-native";

type Props = {};
export default class MyModal extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      animationType: `slide`, // 动画类型 none-无动画 slide-底部划入划出 fade-淡入淡出
      modalVisible: false, // 是否显示
      transparent: true, // 是否透明
    };
  }

  setModalVisible = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }


  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <Button title="显示Modal" onPress={() => this.setModalVisible()} />
        <Modal
          animationType={this.state.animationType}
          visible={this.state.modalVisible}
          transparent={this.state.transparent}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.viewStyle}>
            <View style={styles.innerView}>
              <Text style={styles.textStyle}>Hello World</Text>
              <Button title="隐藏Modal" onPress={() => this.setModalVisible()} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  innerView: {
    width: 400,
    height: 300,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  textStyle: {
    fontSize: 20
  }
});
