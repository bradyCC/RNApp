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

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Page"
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
class CenterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Center Screen</Text>
        <Button
          title="Go to Page"
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
const Center = createStackNavigator(CenterRouteConfigs, StackNavigatorConfig);

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Center: Center
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default createAppContainer(TabNavigator);
