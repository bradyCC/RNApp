# ReactNativeApp

## 项目初始化
1. 安装：npm i -g react-native-cli
2. 项目初始化：ract-native init 项目名称

## 环境搭建
1. android
+ Node
+ React Native 命令行工具
+ Python
+ JDK
+ Android Studio

2. ios
+ Node
+ Watchman
+ React Native 命令行工具
+ Xcode

## 配置模拟器
1. android模拟器
+ MUMU模拟器：adb connect 127.0.0.1:7555
+ 夜神玩模拟器：adb connect 127.0.0.1:62001
+ 逍遥安卓模拟器：adb connect 127.0.0.1:21503
+ 海马玩模拟器：adb connect 127.0.0.1:26944
+ 蓝叠模拟器：adb connect 127.0.0.1:5555

2. ios模拟器
+ xcode simulator

## android
1. adb devices
+ List of devices attached
+ 127.0.0.1:7555  device

## 运行
1. android 
+ react-native run-android
+ yarn start

2. ios
+ xcode 运行

## 使用react-navigation 配置导航
1. 安装
yarn add react-navigation
yarn add react-native-gesture-handler
yarn add jetifier --dev （react-native 0.60.0 暂不兼容 react-native-gesture-handler）

2. 在package.json中配置 "scripts": { "postinstall": "npx jetify" }

3. 执行 yarn 执行 npx jetify

4. 使用方法
```javascript
// 创建 AppNavigator.js
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import HomePageScreen from "./HomePageScreen";

// 配置路由
const RouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // header: null,
      title: "首页"
    }
  },
  Page: {
    screen: HomePageScreen,
    navigationOptions: {
      title: "首页 Page"
    }
  }
};

// 全局配置
const StackNavigatorConfig = {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(16, 142, 233)"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: "#fff"
    },
    cardStyle: { backgroundColor: "#ccc" }
};

const Home = createStackNavigator(RouteConfigs, StackNavigatorConfig);

// 配置底部导航
const TabNavigator = createBottomTabNavigator({
	Home: Home
})

export default createAppContainer(TabNavigator)
```

```javascript
// 在App.js中引入使用
import React, { Fragment } from "react";
import { SafeAreaView } from "react-native";
import AppNavigator from "./AppNavigator";

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#dbdbdb" }}>
        <AppNavigator />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
```
