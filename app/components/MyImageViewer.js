/**
 * @Author: brady
 * @Date: 2019-07-17
 * @Last Created time: 20:07:40
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Button, Modal, Alert } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";
import ImageViewer from "react-native-image-zoom-viewer";

type Props = {};
export default class MyImageViewer extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      images: [
        {
          url:
            "https://cn.bing.com/th?id=OIP.vsrnlCMd88K-OirYnvIjeQHaEo&pid=Api&rs=1"
        },
        {
          url:
            "https://cn.bing.com/th?id=OIP.gM9i-R0G_TwRPVjEQ42X4wHaEK&pid=Api&rs=1"
        },
        {
          url:
            "https://cn.bing.com/th?id=OIP.U4tT_jYeb2WgDsbGuddhOgHaE8&pid=Api&rs=1"
        },
      ],
      currentImage: 0,
      flag: false
    };
  }

  // 查看图片
  checkPhone = () => {
    this.setState({
      flag: true
    });
  };

  // 关闭
  closeUp = () => {
    this.setState({
      flag: false
    });
  };

  // 切换图片
  togglePhone = index => {
    console.log(index);
  };

  // 保存图片
  savePhoto = url => {
    let promise = CameraRoll.saveToCameraRoll(url);
    promise
      .then(function(res) {
        Alert.alert("已保存到系统相册" + res);
      })
      .catch(function(err) {
        Alert.alert("保存失败" + err);
      });
  };

  // 渲染
  render() {
    return (
      <View style={styles.contianer}>
        <Button title="查看图片" onPress={() => this.checkPhone()} />
        <Modal
          visible={this.state.flag}
          transparent={true}
          onRequestClose={() => this.closeUp()}
        >
          <ImageViewer
            imageUrls={this.state.images} // 照片路径
            enableImageZoom={true} // 是否开启手势缩放
            saveToLocalByLongPress={true} //是否开启长按保存
            index={this.state.currentImage} // 初始显示第几张
            enableSwipeDown={false}
            menuContext={{ saveToLocal: "保存图片", cancel: "取消" }}
            onChange={index => this.togglePhone(index)} // 图片切换时触发
            onClick={() => this.closeUp()} // 图片单击事件
            onSave={url => this.savePhoto(url)} // 保存图片
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  }
});
