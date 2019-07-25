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
+ MUMU模拟器：adb connect 127.0.0.1:7555 (windows系统 7555、macOS系统 5555)
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

## 内置组件
公共组件：
+

Android:
+ ViewPagerAndorid 引导页组件
+ Picker 下拉框选择器组件
+ ProgressBarAndroid 进度条组件
+ BackHandler 监听后退按钮组件

IOS:
+ PickerIOS 选择器组件
+ ProgressViewIOS 进度条组件
+ DatePickerIOS 日期/时间选择器组件

## 第三方组件库
+ react-navigation 导航组件
+ react-native-vector-icons 字体图标组件
+ react-native-swiper 轮播图组件
+ react-native-splash-screen 启动页组件
+ react-native-image-crop-picker 图片选择组件
+ react-native-image-zoom-viewer 图片预览组件
+ react-native-webview 原生WebView组件
+ async-storage 持久化存储组件
+ netinfo 网络状态组件
+ react-native-camera 相机组件
+ react-native-geolocation-service 定位服务组件

## API


## package.json
```json
{
  "name": "RNApp",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint .",
    "postinstall": "npx jetify"
  },
  "dependencies": {
    "@ant-design/react-native": "^3.1.9",
    "@react-native-community/async-storage": "^1.5.1",
    "@react-native-community/cameraroll": "^1.1.1",
    "lodash": "^4.17.11",
    "react": "16.8.6",
    "react-native": "0.60.0",
    "react-native-gesture-handler": "^1.3.0",
    "react-native-image-crop-picker": "^0.25.0",
    "react-native-image-zoom-viewer": "^2.2.26",
    "react-native-splash-screen": "^3.2.0",
    "react-native-swiper": "^1.6.0-nightly.2",
    "react-native-vector-icons": "^6.6.0",
    "react-native-webview": "^6.3.1",
    "react-navigation": "^3.11.0"
  },
  "devDependencies": {
    "@babel/core": "^7.5.0",
    "@babel/runtime": "^7.5.0",
    "@react-native-community/eslint-config": "^0.0.5",
    "babel-jest": "^24.8.0",
    "babel-plugin-import": "^1.12.0",
    "eslint": "^6.0.1",
    "jest": "^24.8.0",
    "jetifier": "^1.6.1",
    "metro-react-native-babel-preset": "^0.55.0",
    "react-test-renderer": "16.8.6"
  },
  "jest": {
    "preset": "react-native"
  }
}

```

