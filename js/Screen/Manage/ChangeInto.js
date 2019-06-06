import React, { Component } from 'react'
import { View, ScrollView, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Icon } from '@ant-design/react-native'
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
    <View style={styles.owerWrp}>
      <View>
        <Icon name="container" size="md" color="#000" />
        <Text>AUDT</Text>
      </View>
      <Text>已存入资金 324343.23189</Text>
    </View>
  )

  render() {
    return (
      <View style={styles.wrp}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1,
    paddingHorizontal: 20
  },
})