import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Style } from '../../global'
import RecordList from '../../components/RecordList'

export default class RechargeRecord extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>充币记录</Text>,
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
  render() {
    return (
      <View style={styles.wrp}>
        <RecordList
          name={'ETH'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1,
    padding: 20
  }
})
