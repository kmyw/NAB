import React, { Component } from 'react'
import { View, Text } from "react-native"
import { Button } from "@ant-design/react-native"
import { Style } from '../../global'

export default class PersonalInformation extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>分享</Text>,
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

  _btnDom = () => {
    return (
      <Button
        size={'large'}
        type={'primary'}
        style={{ marginTop: 30, backgroundColor: Style.themeColor, borderWidth: 0, marginBottom: 40 }}
        activeStyle={{ backgroundColor: Style.themeColor }}
      >分享</Button>
    )
  }

  render() {
    return (
      <View style={{padding: 20}}>
        {this._btnDom()}
      </View>
    )
  }
}
