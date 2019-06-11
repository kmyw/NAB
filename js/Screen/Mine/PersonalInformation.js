import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { Icon } from '@ant-design/react-native'
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

  _moduleListItemDom = (title, isShowBorder, isShowIcon) => (
    <TouchableOpacity
      style={[styles.moduleItem, isShowBorder ? { borderBottomColor: Style.eeeColor, borderBottomWidth: 1 } : null]}
      activeOpacity={0.5}
      onPress={() => {

      }}
    >
      <View style={styles.left}>
        <Text style={styles.txt}>{title}</Text>
      </View>
      <View style={styles.right}>
        {title === "头像" ? <Icon name="aliwangwang" size={30} color={Style.themeColor} style={{ marginRight: 10 }} /> : null}
        {title === "昵称" ? <Text style={[styles.txt, { color: Style.grayColor }]}>天边一飞鱼</Text> : null}
        {title === "我的手机号" ? <Text style={[styles.txt, { color: Style.grayColor }]}>17740657205</Text> : null}
        {title === "UID号" ? <Text style={[styles.txt, { color: Style.grayColor }]}>26322598</Text> : null}
        {
          isShowIcon
            ?
            <Icon name="right" size={25} color={Style.blackColor} />
            :
            null
        }
      </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.moduleWrp}>
        {this._moduleListItemDom("头像", true, true)}
        {this._moduleListItemDom("昵称", true, true)}
        {this._moduleListItemDom("我的邮箱", true, true)}
        {this._moduleListItemDom("我的手机号", true, false)}
        {this._moduleListItemDom("UID号", false, false)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  moduleWrp: {
    width: screen.width - 40,
    marginLeft: 20,
    marginTop: 20,
    borderColor: Style.themeColor,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20
  },
  moduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10
  }
})