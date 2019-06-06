import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Icon } from '@ant-design/react-native'
import { Style } from '../global'

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.wrp}>
        <Text style={styles.title}>{this.props.title}</Text>
        <TouchableOpacity
          onPress={() => { this.props.goScanCode() }}
          activeOpacity={0.5}
          background={Style.themeColor}>
          <Icon name="scan" size="md" color="#000" />
        </TouchableOpacity>
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
