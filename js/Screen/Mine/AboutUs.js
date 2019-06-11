import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { Icon } from '@ant-design/react-native'
import { Style } from '../../global'

const screen = Dimensions.get('window')

export default class PersonalInformation extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>关于我们</Text>,
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
        {title === "官方网站" ? <Text style={[styles.txt, { color: Style.grayColor }]}>www.xxx.com</Text> : null}
        {title === "微信公众号" ? <Text style={[styles.txt, { color: Style.grayColor }]}>NXS</Text> : null}
        {title === "Twitter" ? <Text style={[styles.txt, { color: Style.grayColor }]}>NXS Twitter</Text> : null}
        {title === "Telegram" ? <Text style={[styles.txt, { color: Style.grayColor }]}>NXS Telegram</Text> : null}
        {title === "检查更新" ? <Text style={[styles.txt, { color: Style.grayColor }]}>当前2.0.9</Text> : null}
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
        {this._moduleListItemDom("官方网站", true, false)}
        {this._moduleListItemDom("微信公众号", true, false)}
        {this._moduleListItemDom("Twitter", true, false)}
        {this._moduleListItemDom("Telegram", true, false)}
        {this._moduleListItemDom("检查更新", false, false)}
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