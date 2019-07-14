/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 16:21:48
 * @Description:
 */
import React, { Component } from "react";
import { Platform, StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, TouchableHighlight } from "react-native";

type Props = {};
export default class News extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      // 模拟数据
      newsList: [
        { id: "1", title: "火箭雷霆交易真因曝光！莫雷没有骗保罗，哈登推动完成了交易", url: "https://p9.pstatp.com/list/190x124/pgc-image/ec92a55a7a1144f5af8ef35989da6401" },
        { id: "2", title: "欧文KD合同细节曝光，待遇差距也太大了，谁是老大一目了然", url: "https://p3.pstatp.com/list/190x124/pgc-image/549c1d64a3d14c0fbc30572d30c98b03" },
        { id: "3", title: "从2.19亿到350万，考辛斯正式亮相湖人，这像是总决赛上的表妹吗", url: "https://p3.pstatp.com/list/190x124/pgc-image/8bf6e3791a244c3383bcb7cbbee8471b" },
        { id: "4", title: "卡佩拉发推欢迎威少：伙计，准备好干一番大事吗", url: "https://p1.pstatp.com/list/190x124/pgc-image/RVyY2CM8efgwVT" },
        { id: "5", title: "确定加盟！休斯顿火箭传来喜讯，德帅收获好帮手，防守就靠他了", url: "https://p9.pstatp.com/list/190x124/pgc-image/d5a68810026343e49f4a45c7235201bf" },
        { id: "6", title: "威少保罗互换东家后，美媒给出15位要被交易球星，猛龙恐解体", url: "https://p9.pstatp.com/list/190x124/pgc-image/af1abf9f833b4d4fba2a67523f5540a0" },
        { id: "7", title: "深度分析 | 灯泡组合解体，迎来威少的哈登离总冠军还有多远？", url: "https://p9.pstatp.com/list/190x124/pgc-image/a1f8f46fed8842ecbcc42966ca872840" },
        { id: "8", title: "3场三分命中率超5成！火箭新人比戈登还稳，已占据阵容一席之地？", url: "https://p3.pstatp.com/list/190x124/pgc-image/ae1ad473d8914bf4badb063a9859eb31" },
        { id: "9", title: "花了1.6亿，却多了9个强敌！不怪保罗，是莫雷太相信勇士了", url: "https://p1.pstatp.com/list/190x124/pgc-image/6577a74dba984f138f242438aa3f2557" },
        { id: "10", title: "火箭队拿下威斯布鲁克，三后卫阵容依旧干不过湖人队！", url: "https://p3.pstatp.com/list/190x124/pgc-image/1537eb42202e4b77a154baf3cc63a48e" },
        { id: "11", title: "火箭内线再添悍将！前湖人2.06米内线迎爆发，湖人真不该放弃他", url: "https://p1.pstatp.com/list/190x124/pgc-image/fadcc251675f4bdd8ca31eccfb3ccbeb" },
        { id: "12", title: "比保罗沃尔惨多了 和球队决裂 1.48亿状元摆上货架 全嫌弃", url: "https://p1.pstatp.com/list/190x124/pgc-image/9bd6f4e8f0e54b2e9f38d86e6c5588ab" },
      ]
    };
  }

  onPress = (id, title) => {
    this.props.navigation.navigate("NewsDetail", { id: id, title: title})
  }

  // 渲染
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.list}>
          {
            this.state.newsList.map(item => {
              return (
                // 触摸组件用法
                // 1. TouchableOpacity: <TouchableOpacity activeOpacity={0.85} key={item.id} onPress={ () => this.onPress(item.title) }>
                // 2. TouchableHighlight: <TouchableOpacity activeOpacity={0.85} underlayColor="#ebedee" key={item.id} onPress={ () => this.onPress(item.title) }></TouchableOpacity>
                // 备注： activeOpacity用于设置透明度 underlayColor用于设置底色
                <TouchableOpacity activeOpacity={0.85} key={item.id} onPress={ () => this.onPress(item.id, item.title) }>
                  <View style={styles.view}>
                    <Image source={{ uri: item.url }} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  list: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingBottom: 20
  },
  view: {
    marginTop: 20,
    ...Platform.select({
      ios: {
        width: 150
      },
      android: {
        width: 200
      }
    })
  },
  image: {
    ...Platform.select({
      ios: {
        width: 150
      },
      android: {
        width: 200
      }
    }),
    height: 100
  },
  title: {
    marginTop: 10,
    fontSize: 12
  }
});
