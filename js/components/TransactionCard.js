import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { Icon, Picker } from '@ant-design/react-native'
import Storage from '../Storage'
import { Style, CoinType } from '../global'

const screen = Dimensions.get('window')

export default class TransactionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: 'ETH',
      coinType: CoinType,
      userName: ''
    }
  }
  componentDidMount() {
    var self = this
    Storage.load({
      key: 'userInfo',
    })
      .then(ret => {
        self.setState({
          userName: ret.userName
        })
      })
      .catch(err => {
        this.props.navigation.navigate('Login')
      })
  }
  render() {
    return (
      <View style={[styles.wrp, { paddingTop: this.props.isShowAvator ? 40 : 0, marginTop: this.props.isShowAvator ? 40 : 20 }]}>
        {
          this.props.isShowAvator
            ?
            <View style={styles.userInfo}>
              <Icon name="aliwangwang" size={50} color={Style.themeColor} />
              <Text>{this.state.userName}</Text>
            </View>
            :
            null
        }
        <View style={styles.coinType}>
          <Text style={styles.txt}>选择提币币种</Text>
          <Picker
            data={this.state.coinType}
            cols={1}
            onChange={(value) => {
              this.setState({
                pickerValue: value[0]
              })
            }}
          >
            <TouchableOpacity
              style={styles.choseType}
              activeOpacity={0.5}
              onPress={() => {
              }}
            >
              <Text style={[styles.txt, { marginRight: 6 }]}>{this.state.pickerValue}</Text>
              <Icon name="right" size="20" color="#000" />
            </TouchableOpacity>
          </Picker>
        </View>
        <View style={styles.ammountWrp}>
          <Text style={[styles.txt, { color: Style.grayColor }]}>{this.state.pickerValue}余额</Text>
          <Text style={[styles.txt, { color: Style.themeColor, fontSize: Style.bigFontSize }]}>6.23215215</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    width: screen.width - 40,
    marginLeft: 20,
    height: 160,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Style.themeColor,
    borderWidth: 2,
    position: 'relative',
    zIndex: 99
  },
  coinType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  choseType: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  ammountWrp: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  userInfo: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
    left: 0,
    width: screen.width - 40,
    zIndex: 100
  }
})
