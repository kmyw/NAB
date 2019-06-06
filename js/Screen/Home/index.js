import React, { Component } from 'react'
import { View, ScrollView, Dimensions, StyleSheet } from "react-native"
import TopBar from '../../components/TopBar'
import AssetCard from '../../components/AssetCard'
import ModuleBar from '../../components/ModuleBar'
import CoinBar from '../../components/CoinBar'

const screen = Dimensions.get('window')

export default class Home extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.scrollWrp}>
          <TopBar
            title="资产"
            isShowScan={true}
            goScanCode={() => {
              this.props.navigation.navigate('ScanCode')
            }}
          />
          <AssetCard
            ammount={126}
            title={'账户总资产'}
            dec={'锁仓详情'}
            isShowLocak={true}
            goLockPosition={() => {
              this.props.navigation.navigate('LockPosition')
            }}
          />
          <ModuleBar
            goPage={(page) => {
              this.props.navigation.navigate(page)
            }}
          />
          <CoinBar
            name="BTC"
            goRecord={() => {
              this.props.navigation.navigate('TransactionRecord', {name: 'BTC'})
            }}
          />
          <CoinBar
            name="ETH"
            goRecord={() => {
              this.props.navigation.navigate('TransactionRecord', {name: 'ETH'})
            }}
          />
          <CoinBar
            name="AUDT"
            goRecord={() => {
              this.props.navigation.navigate('TransactionRecord', {name: 'AUDT'})
            }}
          />
          <CoinBar
            name="NABC"
            goRecord={() => {
              this.props.navigation.navigate('TransactionRecord', {name: 'NABC'})
            }}
          />
          <CoinBar
            name="TEA"
            goRecord={() => {
              this.props.navigation.navigate('TransactionRecord', {name: 'TEA'})
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollWrp: {
    width: screen.width,
    paddingHorizontal: 20
  }
})
