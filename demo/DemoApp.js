/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Version: 1.0.0
 * @Last Modified by: brady
 * @Last Modified time: 14:48:49
 * @Description:
 */

import React, { Fragment, Component } from "react";
import { StyleSheet } from "react-native";

import Dimensions from "./Dimensions";
import FlexboxDemo from "./FlexboxDemo";
import ImageDemo from "./ImageDemo";
import TextInputDemo from "./TextInputDemo";

export default class DemoApp extends Component {
  render() {
    return (
      <Fragment>
        {/*<Dimensions />*/}
        {/*<FlexboxDemo />*/}
        {/*<ImageDemo />*/}
        <TextInputDemo />
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({

})
