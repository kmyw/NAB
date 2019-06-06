import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Icon } from '@ant-design/react-native'
import { Style } from '../global'

export default class CoinBar extends Component {
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
            this.props.goRecord()
          }}
        >
          <View style={styles.left}>
            <Icon name="pay-circle" size={30} color={Style.themeColor} style={{marginRight: 6}} />
            <View style={styles.middle}>
              <Text style={[styles.txt, { color: Style.themeColor }]}>{this.props.name}</Text>
              <Text style={[styles.txt, { color: Style.grayColor }]}>$7935.05</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={[styles.txt, { color: Style.blackColor }]}>12.3364</Text>
            <Text style={[styles.txt, { color: Style.grayColor }]}>≈$8653.23</Text>
          </View>

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
    paddingHorizontal: 10,
    paddingVertical: 6,
    textAlign: 'center',
    backgroundColor: Style.whiteColor,
    borderRadius: 10,
    borderColor: Style.themeColor,
    borderWidth: 2,
    marginBottom: 20
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txt: {
    fontSize: Style.smlFontSize
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle: {
    flexDirection: 'column'
  },
  right: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
})
