import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { TextareaItem, Icon, Button } from '@ant-design/react-native'
import { Style } from '../../global'

const screen = Dimensions.get('window')

export default class PersonalInformation extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>个人信息</Text>,
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

  _inputDom = () => (
    <View style={styles.inputWrp}>
      <View style={styles.top}>
        <Icon name="copy" size={25} color={Style.themeColor} style={{marginRight: 10}} />
        <Text style={styles.txt}>反馈内容</Text>
      </View>
      <TextareaItem rows={4} placeholder="请输入反馈内容" count={100} />
    </View>
  )

  _btnDom = () => {
    return (
      <Button
        size={'large'}
        type={'primary'}
        style={{ marginTop: 30, backgroundColor: Style.themeColor, borderWidth: 0, marginBottom: 40 }}
        activeStyle={{ backgroundColor: Style.themeColor }}
      >提交反馈</Button>
    )
  }

  render() {
    return (
      <View style={styles.wrp}>
        {this._inputDom()}
        {this._btnDom()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    padding: 20
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  inputWrp: {
    padding: 10,
    borderColor: Style.themeColor,
    borderWidth: 2,
    borderRadius: 10
  },
  top: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center'
  }
})
