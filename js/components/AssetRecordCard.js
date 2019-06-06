import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Icon } from '@ant-design/react-native'
import { Style } from '../global'

export default class AssetRecordCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.wrp}>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <Icon name="pay-circle" size={30} color={Style.themeColor} style={{marginRight: 6}} />
            <Text style={styles.txt}>{this.props.name}</Text>
          </View>
          <View style={styles.topRight}>
            <Text style={[styles.txt, {color: Style.themeColor}]}>622.154</Text>
            <Text style={[styles.txt, {color: Style.grayColor}]}>≈$3233.4545</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomLeft}>
            <Text style={styles.txt}>余额</Text>
            <Text style={[styles.txt, {color: Style.themeColor}]}>12.365454</Text>
          </View>
          <View style={styles.bottomRight}>
            <Text style={styles.txt}>锁仓</Text>
            <Text style={[styles.txt, {color: Style.themeColor}]}>3.151212</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    height: 120,
    marginVertical: 20,
    borderColor: Style.themeColor,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'space-around',
    padding: 10
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Style.eeeColor,
    borderBottomWidth: 2,
    paddingBottom: 10
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  topRight: {
    alignItems: 'flex-end'
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 8
  },
  bottomLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRightWidth: 2,
    borderColor: Style.eeeColor
  },
  bottomRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  }
})
