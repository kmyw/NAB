import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native"
import AssetCard from '../../components/AssetCard'
import CoinBar from '../../components/CoinBar'
import { Style } from '../../global'

const screen = Dimensions.get('window');

export default class LockPosition extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>锁仓详情</Text>,
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
  });
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.scrollWrp}>
          <AssetCard
            ammount={126}
            isShowLocak={false}
          />
          <CoinBar
            name="BTC"
          />
          <CoinBar
            name="ETH"
          />
          <CoinBar
            name="AUDT"
          />
          <CoinBar
            name="NABC"
          />
          <CoinBar
            name="TEA"
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollWrp: {
    width: screen.width,
    paddingHorizontal: 20,
    marginTop: 30
  }
})
