/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 15:11:16
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { increase, decrease, reset } from "../../redux/actions";

type Props = {};
class MyRedux extends Component<Props> {
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

  _onPressReset = () => {
    this.props.dispatch(reset());
  }

  _onPressInc = () => {
    this.props.dispatch(increase());
  }

  _onPressDec = () => {
    this.props.dispatch(decrease());
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counterView}>
          <Text style={styles.counter}>{this.props.counter.count}</Text>
        </View>
        <View style={styles.viewStyle}>
          <TouchableOpacity onPress={()=>this._onPressReset()}>
            <Text style={[styles.reset, styles.textStyle]}>归0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this._onPressInc()}>
            <Text style={[styles.start, styles.textStyle]}>加1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this._onPressDec()}>
            <Text style={[styles.stop, styles.textStyle]}>减1</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  counterView: {
    alignItems: "center",
  },
  counter: {
    fontSize: 50,
    marginBottom: 70
  },
  viewStyle: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  textStyle: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    color: "#fff"
  },
  reset: {
    backgroundColor: "#108de9"
  },
  start: {
    backgroundColor: "green"
  },
  stop: {
    backgroundColor: "red"
  }
});


const mapStateToProps = state => ({
  counter: state.counter
})

export default connect(mapStateToProps)(MyRedux);
