import React, { Component } from 'react'
import { View, ScrollView, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Icon } from '@ant-design/react-native'
import TopBar from '../../components/TopBar'
import AssetCard from '../../components/AssetCard'
import { Style } from '../../global'

const screen = Dimensions.get('window')

export default class Manage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowForeign: true
    }
  }

  static navigationOptions = {
    header: null
  }

  _foreignDom = () => (
    <View>
      <TouchableOpacity
        style={[styles.foreignItem]}
        activeOpacity={0.5}
        onPress={() => {
          this.props.navigation.navigate('ChangeInto')
        }}
      >
        <View style={styles.left}>
          <Icon name="pay-circle" size={30} color={Style.themeColor} style={{ marginRight: 6 }} />
          <View style={styles.percent}>
            <Text style={[styles.txt, { color: Style.themeColor, fontSize: Style.norFontSize, fontWeight: 'bold' }]}>3.5%</Text>
            <Text style={[styles.txt, { color: Style.grayColor }]}>月化收益率</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={[styles.txt, { color: Style.grayColor }]}>外汇投资</Text>
          <Text style={[styles.txt, { color: Style.grayColor }]}>国际外汇保证金交易</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.foreignItem]}
        activeOpacity={0.5}
        onPress={() => {
          this.props.navigation.navigate('ChangeInto')
        }}
      >
        <View style={styles.left}>
          <Icon name="pay-circle" size={30} color={Style.themeColor} style={{ marginRight: 6 }} />
          <View style={styles.percent}>
            <Text style={[styles.txt, { color: Style.themeColor, fontSize: Style.norFontSize, fontWeight: 'bold' }]}>4.8%</Text>
            <Text style={[styles.txt, { color: Style.grayColor }]}>月化收益率</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={[styles.txt, { color: Style.grayColor }]}>外汇投资</Text>
          <Text style={[styles.txt, { color: Style.grayColor }]}>国际外汇保证金交易</Text>
        </View>
      </TouchableOpacity>
    </View>
  )

  _currencyDom = () => (
    <View>
      <TouchableOpacity
        style={[styles.foreignItem]}
        activeOpacity={0.5}
        onPress={() => {
          this.props.navigation.navigate('ChangeInto')
        }}
      >
        <View style={styles.left}>
          <Icon name="pay-circle" size={30} color={Style.themeColor} style={{ marginRight: 6 }} />
          <View style={styles.percent}>
            <Text style={[styles.txt, { color: Style.themeColor, fontSize: Style.norFontSize, fontWeight: 'bold' }]}>45%</Text>
            <Text style={[styles.txt, { color: Style.grayColor }]}>总收益率</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={[styles.txt, { color: Style.grayColor }]}>云腾计划</Text>
          <Text style={[styles.txt, { color: Style.grayColor }]}>爱奇艺云腾计划《龙虎特警》网剧</Text>
        </View>
      </TouchableOpacity>
    </View>
  )

  _tabBarDom = () => (
    <View style={styles.tabWrp}>
      <View style={styles.box}>
        <Text
          style={[styles.txt, styles.btn, styles.btnLeft, this.state.isShowForeign ? styles.activeBtn : null]}
          onPress={() => {
            this.setState({
              isShowForeign: true
            })
          }}
        >外汇</Text>
        <Text
          style={[styles.txt, styles.btn, styles.btnRight, !this.state.isShowForeign ? styles.activeBtn : null]}
          onPress={() => {
            this.setState({
              isShowForeign: false
            })
          }}
        >币融</Text>
      </View>
    </View>
  )
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.scrollWrp}>
          <TopBar
            title="理财"
            isShowScan={true}
            goScanCode={() => {
              this.props.navigation.navigate('ScanCode')
            }}
          />
          <AssetCard
            ammount={126}
            title={'理财账户总资产'}
            dec={'账户详情'}
            isShowLocak={true}
            goLockPosition={() => {
              this.props.navigation.navigate('AccountDetail')
            }}
          />
          {this._tabBarDom()}
          {
            this.state.isShowForeign
              ?
              this._foreignDom()
              :
              this._currencyDom()
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollWrp: {
    width: screen.width,
    paddingHorizontal: 20
  },
  tabWrp: {
    alignItems: 'center',
    marginBottom: 30
  },
  box: {
    width: 140,
    height: 40,
    flexDirection: 'row'
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  btn: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 36
  },
  btnLeft: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: Style.themeColor,
    borderBottomColor: Style.themeColor,
    borderLeftColor: Style.themeColor
  },
  btnRight: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: Style.themeColor,
    borderBottomColor: Style.themeColor,
    borderRightColor: Style.themeColor
  },
  activeBtn: {
    backgroundColor: Style.themeColor,
    color: Style.whiteColor,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  foreignItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Style.themeColor,
    borderRadius: 10,
    marginBottom: 10
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  right: {
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  }
})