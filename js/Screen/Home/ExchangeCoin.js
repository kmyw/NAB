import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { Icon, Picker, InputItem, Button } from '@ant-design/react-native'
import { Style, CoinType } from '../../global'

const screen = Dimensions.get('window')

export default class ExchangeCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerOriginValue: 'BTC',
      pickerGoalValue: 'ETC',
      coinType: CoinType
    }
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>即时兑换</Text>,
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

  _exchangeRateDom = () => (
    <View style={styles.rateWrp}>
      <View style={styles.rate}>
        <TouchableOpacity
          style={{ marginRight: 10 }}
          activeOpacity={0.5}
          onPress={() => {
          }}
        >
          <Icon name="reload" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={[styles.txt, { color: Style.whiteColor }]}>汇率：1 BTC=32.012982 ETH</Text>
      </View>
    </View>
  )

  _changeCardDom = (title) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.coinType}>
          <InputItem
            style={[styles.txt, { borderWidth: 0, paddingLeft: 100, borderColor: Style.whiteColor }]}
            onChange={(value) => {
              // this.setState({
              //   text: value,
              // });
            }}
            placeholder={"请输入数额"}
          >
            <Picker
              data={this.state.coinType}
              cols={1}
              onChange={(value) => {
                if (title === "原始币种") {
                  this.setState({
                    pickerOriginValue: value[0]
                  })
                } else {
                  this.setState({
                    pickerGoalValue: value[0]
                  })
                }
              }}
            >
              <TouchableOpacity
                style={styles.choseType}
                activeOpacity={0.5}
                onPress={() => {
                }}
              >
                <Icon name="smile" size={30} color={Style.themeColor} style={{ marginRight: 6 }} />
                <Text style={[styles.txt, { marginRight: 6 }]}>{title === "原始币种" ? this.state.pickerOriginValue : this.state.pickerGoalValue}</Text>
                <Icon name="caret-down" size="20" color="#000" />
              </TouchableOpacity>
            </Picker>
          </InputItem>
        </View>
        {title === "原始币种"
          ?
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 6 }}>
            <Text style={styles.txt}>可用：12.3645452BTC</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {

              }}
            >
              <Text style={[styles.txt, { color: Style.themeColor }]}>全部发送</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 6 }}>
            <Icon name="exclamation-circle" size={20} color={Style.themeColor} style={{ marginRight: 3 }} />
            <Text style={[styles.txt, { color: Style.themeColor }]}>汇率变动，以实际到账数额为准</Text>
          </View>}

      </View>

    </View>
  )

  _changeArrowDom = () => (
    <View style={{ marginVertical: 30, alignItems: 'center' }}>
      <Icon name="bank" size={50} color={Style.themeColor} />
    </View>
  )

  _btnDom = () => {
    return (
      <Button
        size={'large'}
        type={'primary'}
        style={{ width: screen.width - 40, marginLeft: 20, marginTop: 30, backgroundColor: Style.themeColor, borderWidth: 0, marginBottom: 40 }}
        activeStyle={{ backgroundColor: Style.themeColor }}
      >立即兑换</Button>
    )
  }

  render() {
    return (
      <View style={styles.wrp}>
        {this._exchangeRateDom()}
        {this._changeCardDom('原始币种')}
        {this._changeArrowDom()}
        {this._changeCardDom('目标币种')}
        {this._btnDom()}
        <Text style={[styles.txt, {color: Style.themeColor, paddingVertical: 25, textAlign: 'center', width: screen.width}]}>手续费0.02%，转币比例1:1，最小整数倍0.01，最大转币量999999，最小转币量0.01</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1
  },
  rateWrp: {
    marginVertical: 20,
    alignItems: 'center'
  },
  rate: {
    backgroundColor: Style.themeColor,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  card: {
    width: screen.width - 40,
    marginLeft: 20,
    borderRadius: 10,
    borderColor: Style.themeColor,
    borderWidth: 1,
    padding: 6
  },
  cardTitle: {
    fontSize: Style.norFontSize,
    paddingHorizontal: 6,
    color: Style.blackColor
  },
  choseType: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: -10
  }
})
