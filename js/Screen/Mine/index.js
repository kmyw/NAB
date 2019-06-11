import React, { Component } from 'react'
import { View, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Text } from "react-native"
import { NavigationEvents } from 'react-navigation'
import Storage from '../../Storage'
import { Icon } from '@ant-design/react-native'
import TopBar from '../../components/TopBar'
import { Style } from '../../global'

const screen = Dimensions.get('window')

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthentication: true,
      isShowVersion: true,
      userName: '',
      userID: ''
    }
  }
  static navigationOptions = {
    header: null
  }

  _avatorCardDom = () => (
    <TouchableOpacity
      style={styles.avator}
      activeOpacity={0.5}
      onPress={() => {
        this.props.navigation.navigate('PersonalInformation')
      }}
    >
      <View style={styles.left}>
        <Icon name="aliwangwang" size={50} color={Style.themeColor} style={{ marginRight: 10 }} />
        <View style={styles.avatorInfo}>
          <Text style={styles.txt}>{this.state.userName}</Text>
          <Text style={styles.txt}>ID:{this.state.userID}</Text>
        </View>
      </View>
      <Icon name="right" size={25} color={Style.blackColor} />
    </TouchableOpacity>
  )

  _moduleListItemDom = (title, page, icon, isShowBorder) => (
    <TouchableOpacity
      style={[styles.moduleItem, isShowBorder ? { borderBottomColor: Style.eeeColor, borderBottomWidth: 1 } : null]}
      activeOpacity={0.5}
      onPress={() => {
        this.props.navigation.navigate(page)
      }}
    >
      <View style={styles.left}>
        <Icon name={icon} size={25} color={Style.themeColor} style={{ marginRight: 10 }} />
        <Text style={styles.txt}>{title}</Text>
      </View>
      <View style={styles.right}>
        {this.state.isAuthentication && title === "实名认证" ? <Text style={[styles.txt, { color: Style.themeColor }]}>未认证</Text> : null}
        {this.state.isShowVersion && title === "关于我们" ? <Text style={[styles.txt, { color: Style.grayColor }]}>版本号2.0.9</Text> : null}
        <Icon name="right" size={25} color={Style.blackColor} />
      </View>
    </TouchableOpacity>
  )

  _onRerfesh = () => {
    var self = this
    Storage.load({
      key: 'userInfo',
    })
      .then(ret => {
        self.setState({
          userName: ret.userName,
          userID: ret.account
        })
      })
      .catch(err => {
        this.props.navigation.navigate('Login')
      })
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.scrollWrp}>
          <NavigationEvents
            onWillFocus={() => this._onRerfesh()}
          />
          <TopBar
            title="我的"
            isShowScan={false}
          />
          {this._avatorCardDom()}
          <View style={styles.moduleWrp}>
            {this._moduleListItemDom("财务流水", "FinancialFlow", "profile", true)}
            {this._moduleListItemDom("意见反馈", "Feedback", "file-text", true)}
            {this._moduleListItemDom("实名认证", "RealNameAuthentication", "idcard", true)}
            {this._moduleListItemDom("设置", "Setting", "setting", false)}
          </View>
          <View style={styles.moduleWrp}>
            {this._moduleListItemDom("分享", "Share", "share-alt", true)}
            {this._moduleListItemDom("关于我们", "AboutUs", "info-circle", false)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollWrp: {
    width: screen.width,
    paddingHorizontal: 20
  },
  avator: {
    padding: 10,
    borderRadius: 10,
    borderColor: Style.themeColor,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  moduleWrp: {
    borderColor: Style.themeColor,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20
  },
  moduleItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})