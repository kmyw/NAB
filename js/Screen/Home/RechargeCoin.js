import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Clipboard, Dimensions } from "react-native"
import { Icon, Toast } from '@ant-design/react-native'
import { Style } from '../../global'
import TransactionCard from '../../components/TransactionCard'
import QRCode from 'react-native-qrcode'

const screen = Dimensions.get('window')

export default class RechargeCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '0x1Faa504E850eb32C6f4833519378d3cC17aaD07b',
      userName: ''
    }
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>充币</Text>,
    headerRight: (<TouchableOpacity
      style={{ marginRight: 15 }}
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('RechargeRecord')
      }}
    >
      <Icon name="container" size="md" color="#fff" />
    </TouchableOpacity>),
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

  _qrcodeDom = () => (
    <View style={styles.codeWrp}>
      <View style={{ width: 250, height: 250 }}>
        <QRCode
          value={this.state.address}
          size={250}
          bgColor={Style.blackColor}
          fgColor={Style.whiteColor}
        />
      </View>
    </View>
  )

  _addressDom = () => (
    <TouchableOpacity
      style={styles.addressWrp}
      activeOpacity={0.5}
      onPress={() => {
        Clipboard.setString(this.state.address)
        Toast.success('复制成功', 1);
      }}
    >
      <Text style={[styles.txt, {backgroundColor: "#eee", borderRadius: 4, padding: 3}]}>{this.state.address}</Text>
      <Text style={[styles.txt, {color: Style.grayColor}]}>点击复制</Text>
    </TouchableOpacity>
  )
  render() {
    return (
      <View style={styles.wrp}>
        <TransactionCard
          isShowAvator={true}
        />
        {this._qrcodeDom()}
        {this._addressDom()}
        <Text style={[styles.txt, styles.tip, {color: Style.themeColor}]}>此地址只接收BTC，发送其他币种到此地址将不可找回</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1,
    position: 'relative'
  },
  codeWrp: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  addressWrp: {
    alignItems: 'center'
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  tip: {
    position: 'absolute',
    left: 0,
    bottom: 10,
    zIndex: 99,
    textAlign: 'center',
    width: screen.width
  }
})
