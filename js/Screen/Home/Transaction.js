import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native"
import { InputItem, Button } from '@ant-design/react-native'
import TransactionCard from '../../components/TransactionCard'
import { Style } from '../../global'

const screen = Dimensions.get('window')

export default class Transaction extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>转账</Text>,
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

  _fromInfoDom = () => {
    return (
      <View style={styles.fromWrp}>
        <View style={styles.inputItem}>
          <InputItem
            style={styles.txt}
            onChange={(value) => {
              // this.setState({
              //   text: value,
              // });
            }}
            placeholder={"输入对方ID号"}
          >
            <Text style={[styles.txt, { marginRight: 6 }]}>对方ID号</Text>
          </InputItem>
        </View>
        <View style={styles.inputItem}>
          <InputItem
            style={styles.txt}
            onChange={(value) => {
              // this.setState({
              //   text: value,
              // });
            }}
            placeholder={"输入数额"}
          >
            <Text style={[styles.txt, { marginRight: 6 }]}>数额</Text>
          </InputItem>
          <TouchableOpacity
            style={[styles.rightItem, { top: 44 }]}
            activeOpacity={0.5}
            onPress={() => {

            }}
          >
            <Text style={[styles.txt, { color: Style.themeColor }]}>全部发送</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputItem}>
          <InputItem
            style={styles.txt}
            onChange={(value) => {
              // this.setState({
              //   text: value,
              // });
            }}
            placeholder={"请输入备注(选填)"}
          >
            <Text style={[styles.txt, { marginRight: 6 }]}>备注</Text>
          </InputItem>
        </View>
      </View>
    )
  }

  _btnDom = () => {
    return (
      <Button
        size={'large'}
        type={'primary'}
        style={{ width: screen.width - 40, marginLeft: 20, marginTop: 30, backgroundColor: Style.themeColor, borderWidth: 0, marginBottom: 40 }}
        activeStyle={{ backgroundColor: Style.themeColor }}
      >转账</Button>
    )
  }

  render() {
    return (
      <View style={styles.wrp}>
        <ScrollView contentContainerStyle={styles.scrollWrp}>
          <TransactionCard
            isShowAvator={false}
          />
          {this._fromInfoDom()}
          {this._btnDom()}
          <Text style={[styles.txt, {color: Style.themeColor, paddingVertical: 25, textAlign: 'center', width: screen.width}]}>手续费0.02%，转币比例1:1，最小整数倍0.01，最大转币量999999，最小转币量0.01</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  fromWrp: {
    paddingLeft: 6,
    paddingRight: 20
  },
  inputItem: {
    position: 'relative',
    marginBottom: 20
  },
  rightItem: {
    position: 'absolute',
    right: 0,
    top: 10
  }
})
