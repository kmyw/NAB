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
  componentDidMount() {
    this.setState({
      ammount: this.props.ammount
    })
  }
  hideAmmount = () => {
    this.setState({
      isShowAmmount: !this.state.isShowAmmount
    })
  }
  render() {
    return (
      <View style={styles.wrp}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.ammount}>
          <Text style={{ fontSize: Style.bigFontSize, color: Style.whiteColor }}>{
            this.state.isShowAmmount
              ?
              this.state.ammount
              :
              "***"
          }</Text>
          <Text style={styles.con}>ETH</Text>
        </View>
        <Text style={{ fontSize: Style.smlFontSize, color: Style.whiteColor }}>≈￥22</Text>
        <TouchableOpacity
          style={[styles.btn, { top: 20 }]}
          activeOpacity={0.5}
          onPress={() => {
            this.hideAmmount()
          }}
        >
          <Text>
            {
              this.state.isShowAmmount
                ?
                <Icon name="eye" size={30} color="#fff" />
                :
                <Icon name="eye-invisible" size={30} color="#fff" />
            }
          </Text>
        </TouchableOpacity>
        {
          this.props.isShowLocak
            ?
            <TouchableOpacity
              style={[styles.btn, { bottom: 10 }]}
              activeOpacity={0.5}
              onPress={() => {
                this.props.goLockPosition()
              }}
            >
              <Text style={{color: Style.whiteColor}}>{this.props.dec}</Text>
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
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Style.themeColor,
    borderRadius: 10,
    paddingHorizontal: 20,
    position: 'relative',
    marginBottom: 20
  },
  title: {
    fontSize: Style.norFontSize,
    color: Style.whiteColor
  },
  con: {
    fontSize: Style.norFontSize,
    color: Style.whiteColor
  },
  ammount: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  btn: {
    position: 'absolute',
    right: 20
  }
})
