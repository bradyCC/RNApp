/**
 * @Author: brady
 * @Date: 2019-07-13
 * @Last Created time: 17:45:38
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image, Alert } from "react-native";
import ImagePicker from "react-native-image-crop-picker";

type Props = {};
export default class MyImagePicker extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      image: ``
    };
  }

  // 打开相机
  selectFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    })
      .then(image => {
        console.log(image);
      })
      .catch(err => {
        Alert.alert(err);
      });
  };

  // 打开相册
  selectFromGalley = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    })
      .then(image => {
        this.setState({
          image: image.sourceURL
        });
        console.log(image);
      })
      .catch(err => {
        Alert.alert(err);
      });
  };

  // 渲染
  render() {
    let image;
    if (this.state.image) {
      image = (
        <View style={styles.imageView}>
          <Image source={{ uri: this.state.image }} style={styles.image} />
        </View>
      );
    } else {
      image = (
        <Text style={styles.text}>请选择图片</Text>
      )
    }
    return (
      <View style={styles.contianer}>
        <Button
          title="select from camera"
          onPress={ () => this.selectFromCamera() }
        />
        {image}
        <Button
          title="select from galley"
          onPress={ () => this.selectFromGalley() }
        />
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
  },
  text: {
    textAlign: "center"
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100
  }
});
