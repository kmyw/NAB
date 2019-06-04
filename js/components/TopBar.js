import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native"
import { Style } from '../global'

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.wrp}>
        <Text style={styles.title}>{this.props.title}</Text>
        <TouchableNativeFeedback
          onPress={() => { this.props.goScanCode() }}
          background={Style.themeColor}>
          <Text>扫</Text>
        </TouchableNativeFeedback>
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
    alignItems: 'center'
  },
  title: {
    fontSize: Style.bigFontSize,
    fontWeight: 'bold',
    color: Style.blackColor
  }
})
