/**
 * @Author: brady
 * @Date: 2019-07-22
 * @Last Created time: 21:20:55
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Picker, PickerIOS, Platform } from "react-native";

type Props = {};
export default class MyPicker extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      language: "java" // 默认值
    };
  }

  // 渲染
  render() {
    const Content = Platform.select({
      ios: () => {
        return (
          <PickerIOS
            selectedValue={this.state.language}
            onValueChange={item => this.setState({ language: item })}
            itemStyle={styles.picker}
          >
            <PickerIOS.Item label="Java" value="java" />
            <PickerIOS.Item label="JavaScript" value="js" />
          </PickerIOS>
        );
      },
      android: () => {
        return (
          <Picker
            selectedValue={this.state.language}
            onValueChange={item => this.setState({ language: item })}
            itemStyle={styles.picker}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        );
      }
    });
    return (
      <View style={styles.contianer}>
        <Content />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  },
  picker: {
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    color: "#f00"
  }
});
