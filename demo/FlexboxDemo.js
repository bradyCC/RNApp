/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { StyleSheet, View, Text } from "react-native";

const FlexboxDemo = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        {/* Flexbox 布局 */}
        {/* 1. justifyContent 用于设置主轴上对齐方式 */}
        {/* 2. alignItems 用于设置交叉轴对齐方式 */}
        {/* 3. flexDirection 用于设置主轴方向 */}
        {/* 4. flexWrap 用于设置换行 */}
        {/* 5. order 用户设置排序 */}
        {/* 6. alignSelf 用于单独设置对齐方式 */}
        <View style={styles.view}>
          <Text style={{ backgroundColor: "red", flex: 1, height: 60 }}>Demo1</Text>
          <Text style={{ backgroundColor: "blue", flex: 1, height: 50 }}>Demo2</Text>
          <Text style={{ backgroundColor: "green", flex: 1, height: 40, alignSelf: 'flex-end' }}>Demo3</Text>
          <Text style={{ backgroundColor: "yellow", flex: 1, height: 30, alignSelf: 'flex-start' }}>Demo4</Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#ccc"
  },
  view: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  }
});

export default FlexboxDemo;
