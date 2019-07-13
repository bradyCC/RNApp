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

## 使用react-native-vector-icons 字体图标

## 使用react-native-swiper 实现轮播图

## 使用react-native-splash-screen 实现启动页
