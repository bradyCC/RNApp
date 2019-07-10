/**
 * Created by brady on 2019/7/8.
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to HomePage"
          onPress={() => this.props.navigation.navigate("Page")}
        />
      </View>
    );
  }
}
class HomePageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page Screen</Text>
      </View>
    );
  }
}
class MessageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Message Screen</Text>
        <Button
          title="Go to MessagePage"
          onPress={() => this.props.navigation.navigate("Page")}
        />
      </View>
    );
  }
}
class MessagePageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Message Page Screen</Text>
      </View>
    );
  }
}
class CenterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Center Screen</Text>
        <Button
          title="Go to CenterPage"
          onPress={() => this.props.navigation.navigate("Page")}
        />
      </View>
    );
  }
}
class CenterPageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Center Page Screen</Text>
      </View>
    );
  }
}

// 设置路由
const HomeRouteConfigs = {
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
const MessageRouteConfigs = {
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      title: "消息"
    }
  },
  Page: {
    screen: MessagePageScreen,
    navigationOptions: {
      title: "消息 Page"
    }
  }
};
const CenterRouteConfigs = {
  Center: {
    screen: CenterScreen,
    navigationOptions: {
      title: "中心"
    }
  },
  Page: {
    screen: CenterPageScreen,
    navigationOptions: {
      title: "中心 Page"
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
const Home = createStackNavigator(HomeRouteConfigs, StackNavigatorConfig);
const Message = createStackNavigator(MessageRouteConfigs, StackNavigatorConfig);
const Center = createStackNavigator(CenterRouteConfigs, StackNavigatorConfig);

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
setTabBar([Home, Message, Center]);

// 设置tabBar
const TabRouteConfigs = {
  Home: {
    screen: Home,
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
  Message: {
    screen: Message,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "消息",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-text" : "ios-text"}
          name="ios-text"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  },
  Center: {
    screen: Center,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "中心",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default createAppContainer(TabNavigator);
