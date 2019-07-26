/**
 * @Author: brady
 * @Date: 2019/7/10
 * @Last Created time: 16:21:30
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Button, NativeModules } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import MySwiper from "../components/MySwiper";
import MyClassifyNavigation from "../CustomItem/MyClassifyNavigation";
import MyNewsHeader from "../CustomItem/MyNewsHeader";
import MyNewsList from "../CustomItem/MyNewsList";
import MyPicker from "../CustomItem/MyPicker";
import MyProgressBar from "../CustomItem/MyProgressBar";
import MyScrollableTabView from "../components/MyScrollableTabView";
import MyBottomScrollableTabView from "../components/MyBottomScrollableTabView";
import MyFileOperate from "../components/MyFileOperate";
import MyModal from "../CustomItem/MyModal";
import MyLinking from "../components/MyLinking";

type Props = {};
export default class Home extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      data: [
        {
          id: "1",
          banner:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563181673588&di=8a435002d1becd4408e2fad8b5a2bfd1&imgtype=0&src=http%3A%2F%2Fpic18.nipic.com%2F20120201%2F5845624_110219024306_2.jpg",
          width: "1000",
          height: "663"
        },
        {
          id: "2",
          banner:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563171117680&di=7dddad06d6d12dec14db7cd3916ae47d&imgtype=0&src=http%3A%2F%2Fwww.czt.cn%2FUpImage%2FRelate%2F20170623115550.jpg",
          width: "999",
          height: "350"
        },
        {
          id: "3",
          banner:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563180122496&di=7abc0d29848cca16db3963e0d31826a4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0193d656f1010e6ac7257d20f40b3d.jpg",
          width: "782",
          height: "405"
        }
      ],
      newsList: [
        {
          id: "1",
          title:
            "习近平举行仪式欢迎阿联酋阿布扎比王储访华 习近平举行仪式欢迎阿联酋阿布扎比王储访华"
        },
        { id: "2", title: "一线城市楼市退烧 有房源一叶跌价160万" },
        { id: "3", title: "上海市民称墓地太贵买不起 买房存骨灰" },
        { id: "4", title: "朝鲜再发视频：摧毁青瓦台 一切化作灰烬" },
        { id: "5", title: "生活大爆炸人物原型都好牛逼" }
      ]
    };
  }

  // RN调用Android原生模块方法
  callButton = () => {
    NativeModules.MyNativeModule.rnCallNative("调用原生方法成功！");
  };


  // 渲染
  render() {
    return (
      <View style={styles.container}>
        {/*<View style={styles.swiper}>*/}
        {/*  /!* 轮播图 *!/*/}
        {/*  <MySwiper data={this.state.data} />*/}
        {/*  /!* 选择城市 *!/*/}
        {/*  <View style={styles.cityView}>*/}
        {/*    <Text style={styles.cityText}>北京</Text>*/}
        {/*    <Icon name="ios-arrow-down" size={14} style={styles.arrow} />*/}
        {/*  </View>*/}
        {/*</View>*/}
        {/*<MyClassifyNavigation />*/}
        {/*<MyNewsHeader title="新闻资讯" />*/}
        {/*<MyNewsList data={this.state.newsList} push={this.props} />*/}
        {/*<MyPicker />*/}
        {/*<MyProgressBar />*/}
        {/*<Button title="调用RN原生方法" onPress={() => this.callButton()} />*/}
        {/*<MyScrollableTabView />*/}
        {/*<MyBottomScrollableTabView />*/}
        {/*<MyFileOperate />*/}
        {/*<MyModal />*/}
        <MyLinking />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  swiper: {
    alignItems: "center"
  },
  cityView: {
    position: "absolute",
    paddingLeft: 10,
    paddingRight: 10,
    height: 26,
    top: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#108ee9",
    borderRadius: 13,
    opacity: 0.6
  },
  cityText: {
    color: "#fff",
    marginRight: 4
  },
  arrow: {
    color: "#fff"
  }
});
