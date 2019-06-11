import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native"
import { Icon } from '@ant-design/react-native'
import { Style } from '../global'

const phoneOS = Platform.OS

export default class TopBar extends Component {

  render() {
    return (
      <View style={styles.wrp}>
        <Text style={styles.title}>{this.props.title}</Text>
        {
          this.props.isShowScan
            ?
            <TouchableOpacity
              onPress={() => { this.props.goScanCode() }}
              activeOpacity={0.5}
              background={Style.themeColor}>
              <Icon name="scan" size={26} color="#000" />
            </TouchableOpacity>
            :
            null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: phoneOS === "ios" ? 30 : 0
  },
  title: {
    fontSize: Style.bigFontSize,
    fontWeight: 'bold',
    color: Style.blackColor
  }
})
