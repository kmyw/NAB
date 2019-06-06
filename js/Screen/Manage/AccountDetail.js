import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native"
import Echarts from 'native-echarts'
import { Icon } from '@ant-design/react-native'
import { Style } from '../../global'

const screen = Dimensions.get('window')
const option = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['BTC', 'ETH', 'AUDT', 'NABC', 'TEA']
  },
  series: [
    {
      name: '账户详情',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 335, name: 'BTC' },
        { value: 310, name: 'ETH' },
        { value: 234, name: 'AUDT' },
        { value: 135, name: 'NABC' },
        { value: 1548, name: 'TEA' }
      ]
    }
  ]
}

export default class AccountDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>账户详情</Text>,
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

  _echarsDom = () => (
    <View style={styles.echartsWrp}>
      <Echarts option={option} height={300} />
    </View>
  )

  _profitDom = () => (
    <View style={styles.profitWrp}>
      <View style={styles.left}>
        <Text style={[styles.txt, {color: Style.themeColor, textAlign: 'center', fontSize: Style.norFontSize}]}>35.154</Text>
        <Text style={[styles.txt, {color: Style.grayColor, textAlign: 'center'}]}>昨日收益(AUDT)</Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.txt, {color: Style.themeColor, textAlign: 'center', fontSize: Style.norFontSize}]}>24545.15774</Text>
        <Text style={[styles.txt, {color: Style.grayColor, textAlign: 'center'}]}>累计总收益(AUDT)</Text>
      </View>
    </View>
  )

  render() {
    return (
      <View style={styles.wrp}>
        {this._echarsDom()}
        {this._profitDom()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1,
    paddingHorizontal: 20
  },
  echartsWrp: {
    padding: 10,
    borderColor: Style.themeColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
    marginTop: 20
  },
  profitWrp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderLeftColor: Style.themeColor,
    borderRightColor: Style.themeColor,
    borderBottomColor: Style.themeColor,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  }
})