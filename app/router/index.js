/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 16:19:30
 * @Description:
 */
import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "../views/Home";
import News from "../views/News";
import Personal from "../views/Personal";
import HomePage from "../views/HomePage";
import NewsDetail from "../views/NewsDetail";
import PersonalInfo from "../views/PersonalInfo";

// 设置路由
const HomeRouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      // header: null,
      title: "首页"
    }
  },
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: "首页信息"
    }
  }
};
const NewsRouteConfigs = {
  News: {
    screen: News,
    navigationOptions: {
      title: "新闻"
    }
  },
  NewsDetail: {
    screen: NewsDetail,
    navigationOptions: {
      title: "新闻详情"
    }
  }
};
const PersonalRouteConfigs = {
  Personal: {
    screen: Personal,
    navigationOptions: {
      title: "个人中心"
    }
  },
  PersonalInfo: {
    screen: PersonalInfo,
    navigationOptions: {
      title: "我的资料"
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
    headerTintColor: "#fff",
    headerBackTitle: null
  },
  cardStyle: { backgroundColor: "#ccc" }
};
const HomeTab = createStackNavigator(HomeRouteConfigs, StackNavigatorConfig);
const NewsTab = createStackNavigator(NewsRouteConfigs, StackNavigatorConfig);
const PersonalTab = createStackNavigator(PersonalRouteConfigs, StackNavigatorConfig);

// 隐藏子路由 tabBar
let setTabBar = StackNavigatorArr => {
  StackNavigatorArr.map(item => {
    item.navigationOptions = ({ navigation }) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
      return {
        tabBarVisible
      };
    };
  });
};
setTabBar([Home, News, Personal]);

// 设置tabBar
const TabRouteConfigs = {
  Home: {
    screen: HomeTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "首页",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-home" : "ios-home"}
          name="ios-home"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  },
  News: {
    screen: NewsTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "新闻",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-paper" : "ios-paper"}
          name="ios-paper"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  },
  Personal: {
    screen: PersonalTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "个人中心",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-contact" : "ios-contact"}
          name="ios-contact"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  }
};
const TabNavigatorConfig = {
  tabBarOptions: {
    showIcon: true
  }
};
const TabNavigator = createBottomTabNavigator(
  TabRouteConfigs,
  TabNavigatorConfig
);

export default createAppContainer(TabNavigator);
