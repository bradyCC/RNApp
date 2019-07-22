/**
 *  Class: Movie
 *  Author: brady
 *  Date: 2019/7/5.
 *  Description:
 */
import React, { Fragment, Component } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

let REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

type Props = {};
export default class Movie extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      data: [],
      loaded: false
    };
  }

  fetchData = () => {
    fetch(REQUEST_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: this.state.data.concat(data.movies),
          loaded: true
        });
      });
  };

  loadingView = () => {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  };

  movieList = item => {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  };

  // 渲染
  render() {
    if (!this.state.loaded) {
      return this.loadingView();
    }
    return (
      <Fragment>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.movieList(item)}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </Fragment>
    );
  }

  componentDidMount() {
    this.fetchData();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  list: {
    // paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
});
