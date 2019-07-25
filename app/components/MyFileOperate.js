/**
 * @Author: brady
 * @Date: 2019/7/25
 * @Last Created time: 16:57:31
 * @Description:
 */
// https://github.com/itinance/react-native-fs
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import RNFS from "react-native-fs";

let downloadUrl = "http://www.reactnative.vip/img/reactnative.png";
let downloadUrl_big_file = "http://www.reactnative.vip/data/dongfang.apk";
let jobId1 = -1;
let jobId2 = -1;
let testImagePath = `${RNFS.PicturesDirectoryPath}/test-image-1.png`;
let path = `${RNFS.DocumentDirectoryPath}/test.txt`;

type Props = {};
export default class MyFileOperate extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      output: `文档目录路径：${RNFS.DocumentDirectoryPath}`
    };
  }

  basic = () => {
    // PicturesDirectoryPath - 图片路径
    // DocumentDirectoryPath - 文档目录路径
    // MainBundlePath -
    RNFS.readDir(RNFS.PicturesDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then(result => {
        console.log("GOT RESULT", result);

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then(statResult => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          return RNFS.readFile(statResult[1], "utf8");
        }

        return "no file";
      })
      .then(contents => {
        // log the file contents
        console.log(contents);
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };

  createFile = () => {
    RNFS.writeFile(path, "Lorem ipsum dolor sit amet", "utf8")
      .then(success => {
        console.log("FILE WRITTEN!");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  deleteFile = () => {
    return (
      RNFS.unlink(path)
      .then(() => {
        console.log('FILE DELETED');
      })
      // `unlink` will throw an error, if the item to unlink does not exist
      .catch(err => {
        console.log(err.message);
      })
    );
  }

  printPath = () => {
    console.log(`主要bundle目录 - ${RNFS.MainBundlePath}`);
    console.log(`缓存目录 - ${RNFS.CachesDirectoryPath}`);
    console.log(`文件目录 - ${RNFS.DocumentDirectoryPath}`);
    console.log(`临时目录IOS - ${RNFS.TemporaryDirectoryPath}`);
    console.log(`外部存储目录Android - ${RNFS.ExternalDirectoryPath}`);
    console.log(`图片目录 - ${RNFS.PicturesDirectoryPath}`);
  };

  downLoadFile = (background, url) => {
    let progress = data => {
      let percentage = ((100 * data.bytesWritten) / data.contentLength ) | 0;
      let text = `进度 ${percentage}%`;
      this.setState({
        output: text
      });
    }

    let begin = res => {
      jobId1 = res.jobId;
    };

    let progressDivider = 1;

    let file = RNFS.downloadFile({ fromUrl: url, toFile: testImagePath, begin, progress, background, progressDivider});
    console.log(file.jobId);
    file.promise.then(res => {
      console.log(res);
      this.setState({output: JSON.stringify(res)});
    }).catch(err => {this.showError(err);});
  };

  stopDownLoad = () => {

  };

  getFileInfo = () => {

  };

  uploadFile = () => {

  };

  stopUpload = () => {

  };

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{this.state.output}</Text>
        <Text style={{ fontSize: 20 }} onPress={() => this.basic()}>列出文件</Text>
        <Text style={{ fontSize: 20 }} onPress={() => this.createFile()}>创建文件</Text>
        <Text style={{ fontSize: 20 }} onPress={() => this.deleteFile()}>删除文件</Text>
        <Text style={{ fontSize: 20 }} onPress={() => this.printPath()}>输出各种路径</Text>
        <Text style={{ fontSize: 20 }} onPress={() => this.downLoadFile(true, downloadUrl)}>下载文件</Text>
        <Text style={{ fontSize: 20 }} onPress={() => this.stopDownLoad()}>停止下载</Text>
        <Text style={{ fontSize: 20 }} onPress={() => this.getFileInfo()}>获取文件大小信息</Text>
        <Text style={{ fontSize: 20 }} onPress={() => this.uploadFile()}>上传文件IOS</Text>
        <Text style={{ fontSize: 20 }} onPress={() => this.stopUpload()}>停止上传IOS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
