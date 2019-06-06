import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Icon } from '@ant-design/react-native'
import { Style } from '../global'

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ammount: 0,
      isShowAmmount: true
    }
  }
  render() {
    return (
      <View style={styles.wrp}>
        <TouchableOpacity
          style={[styles.btn]}
          activeOpacity={0.5}
          onPress={() => {
            this.props.goPage('ExtractCoin')
          }}
        >
          <Icon name="trademark" size={25} color={Style.themeColor} />
          <Text style={styles.txt}>提币</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn]}
          activeOpacity={0.5}
          onPress={() => {
            this.props.goPage('RechangeCoin')
          }}
        >
          <Icon name="shopping-cart" size={25} color={Style.themeColor} />
          <Text style={styles.txt}>充币</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn]}
          activeOpacity={0.5}
          onPress={() => {
            this.props.goPage('Transaction')
          }}
        >
          <Icon name="transaction" size={25} color={Style.themeColor} />
          <Text style={styles.txt}>转账</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn]}
          activeOpacity={0.5}
          onPress={() => {
            this.props.goPage('ExchangeCoin')
          }}
        >
          <Icon name="shop" size={25} color={Style.themeColor} />
          <Text style={styles.txt}>及时兑换</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 6,
    textAlign: 'center',
    backgroundColor: Style.whiteColor,
    borderRadius: 10,
    borderColor: Style.themeColor,
    borderWidth: 2,
    marginBottom: 20
  },
  btn: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  txt: {
    color: Style.blackColor
  }
})
