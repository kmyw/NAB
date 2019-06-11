import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native"
import { Button } from '@ant-design/react-native'
import ImagePicker from 'react-native-image-picker'
import { Style } from '../../global'

const screen = Dimensions.get('window')
const options = {
  title: '请选择',
  quality: 0.8,
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class RealNameAuthentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontImg: require('../../images/vote_tab.png'),
      backImg: require('../../images/vote_tab.png')
    }
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>实名认证</Text>,
    headerRight: <View />,
    headerTitleStyle: {
      alignSelf: 'center'
    },
    headerTintColor: '#fff', // 返回按钮颜色
    headerStyle: {
      backgroundColor: Style.themeColor,
      height: 50,
      elevation: 0,  // android
      shadowOffset: { width: 0, height: 0 },  // ios (w 和 h 对应box-shadow x y 偏移)
      shadowOpacity: 0, // 透明度
    }
  })

  _uploadImg = (type) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        if (type === 'front') {
          this.setState({
            frontImg: source
          })
        } else {
          this.setState({
            backImg: source
          })
        }
        
      }
    });
  }

  _upLoadDom = () => (
    <View style={styles.upWrp}>
      <TouchableOpacity
        style={[styles.moduleItem]}
        activeOpacity={0.5}
        onPress={() => {
          this._uploadImg('front')
        }}
      >
        <Text>正面</Text>
        <Image source={this.state.frontImg} style={styles.uploadAvatar} resizeMode={'cover'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.moduleItem]}
        activeOpacity={0.5}
        onPress={() => {
          this._uploadImg('back')
        }}
      >
        <Text>反面</Text>
        <Image source={this.state.backImg} style={styles.uploadAvatar} resizeMode={'cover'} />
      </TouchableOpacity>
    </View>
  )

  _btnDom = () => {
    return (
      <Button
        size={'large'}
        type={'primary'}
        style={{ marginTop: 30, backgroundColor: Style.themeColor, borderWidth: 0, marginBottom: 40 }}
        activeStyle={{ backgroundColor: Style.themeColor }}
      >上传</Button>
    )
  }

  render() {
    return (
      <View style={{ padding: 20 }}>
        {this._upLoadDom()}
        {this._btnDom()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  upWrp: {
    flexDirection: 'column',
    width: screen.width - 40,
    height: 500
  },
  moduleItem: {
    flex: 1,
    marginBottom: 10
  },
  uploadAvatar: {
    width: screen.width - 40,
    height: (54 * screen.width - 2160) / 85.6
  }
})