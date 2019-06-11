import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Icon, InputItem, Button } from '@ant-design/react-native'
import { Style } from '../../global'

const screen = Dimensions.get('window')

export default class ChangeInto extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>外汇-转入</Text>,
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

  _owerMoner = () => (
    <View style={styles.owerDeposit}>
      <View style={styles.left}>
        <Icon name="pay-circle" size={30} color={Style.themeColor} style={{ marginRight: 10 }} />
        <Text style={styles.txt}>AUDT</Text>
      </View>
      <Text style={styles.txt}>已存入资金 324343.23189</Text>
    </View>
  )

  _depositDom = () => (
    <View style={styles.depositWrp}>
      <Text style={styles.txt}>外汇投资 月化利率3.5%</Text>
      <View style={styles.inputItem}>
        <InputItem
          style={styles.txt}
          onChange={(value) => {
            // this.setState({
            //   text: value,
            // });
          }}
          placeholder={"请输入转入金额"}
        >
        </InputItem>
        <TouchableOpacity
          style={[styles.rightItem, { bottom: 15 }]}
          activeOpacity={0.5}
          onPress={() => {

          }}
        >
          <Text style={[styles.txt, { color: Style.themeColor }]}>全部发送</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>30天预期收益为 23.14 AUDT</Text>
    </View>
  )

  _payDom = () => (
    <View style={styles.payDom}>
      <Text style={[styles.txt, {marginBottom: 10}]}>支付方式</Text>
      <View style={styles.payMoudle}>
        <View style={styles.left}>
          <Icon name="check-circle" size={30} color={Style.themeColor} style={{ marginRight: 10 }} />
          <Text style={styles.txt}>钱包转入</Text>
        </View>
        <Text style={styles.txt}>3324.1244AUDT</Text>
      </View>
    </View>
  )

  _btnDom = () => {
    return (
      <Button
        size={'large'}
        type={'primary'}
        style={{ width: screen.width - 40, backgroundColor: Style.themeColor, borderWidth: 0, marginBottom: 40 }}
        activeStyle={{ backgroundColor: Style.themeColor }}
      >确认</Button>
    )
  }

  render() {
    return (
      <View style={styles.wrp}>
        {this._owerMoner()}
        {this._depositDom()}
        <Text style={styles.txt}>预计2019.06.11 00:00:00产生收益，2019.07.11 00:00:00收益到账，2020.06.05 00:00:00本金归还</Text>
        {this._payDom()}
        {this._btnDom()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1,
    paddingHorizontal: 20
  },
  owerDeposit: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: Style.themeColor,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputItem: {
    position: 'relative',
    marginBottom: 20
  },
  rightItem: {
    position: 'absolute',
    right: 0
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  depositWrp: {
    padding: 10,
    borderColor: Style.themeColor,
    borderRadius: 10,
    borderWidth: 2
  },
  payDom: {
    marginTop: 30,
    borderColor: Style.themeColor,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 30,
    padding: 10
  },
  payMoudle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})