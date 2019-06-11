import React, { Component } from 'react'
import { View, TextInput, Dimensions, StyleSheet, TouchableOpacity, Text } from "react-native"
import { Button, Toast } from '@ant-design/react-native'
import Storage from '../../Storage'
import { loginGql } from '../../common/request'
import { Style, defaultUersInfo, err_message, err_notification } from '../../global'

const screen = Dimensions.get('window')

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      code: '',
      userName: '',
      isGetCode: false,
      count: 60
    }
  }
  static navigationOptions = {
    header: null
  }

  _startCount = () => {
    let counter = setInterval(() => {
      if (this.state.count === 0) {
        clearInterval(counter)
        this.setState({
          isGetCode: false
        })
        return
      }
      this.setState({
        count: this.state.count - 1
      })
    }, 1000)
  }

  _getCode = async () => {
    if (!this._checkPhoneNum(this.state.phoneNumber)) {
      alert('电话号码错误，请重试')
      return
    }
    const param = `
      mutation getCode($phoneNumber: String!) {
        sendVerificationCode(phoneNumber: $phoneNumber)
      }
    `
    const variables = {
      phoneNumber: this.state.phoneNumber
    }
    let res = await loginGql(param, variables)
    if (res) {
      this.setState({
        isGetCode: true
      })
      this._startCount()
    }
  }

  _checkPhoneNum = (phone) => {
    var re = /^1[34578]\d{9}$/
    if (re.test(phone)) {
      return true
    } else {
      return false
    }
  }

  _inputDom = () => (
    <View style={styles.input}>
      <TextInput
        style={{ height: 40, borderWidth: 0, flex: 8, marginRight: 10 }}
        onChangeText={(text) => this.setState({ phoneNumber: text })}
        keyboardType={'numeric'}
        placeholder={"请输入手机号码"}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this._getCode()
        }}
      >
        {
          !this.state.isGetCode
            ?
            <Text style={[styles.txt, { color: Style.whiteColor, backgroundColor: Style.themeColor, paddingHorizontal: 3, paddingVertical: 6, borderRadius: 4 }]}>获取验证码</Text>
            :
            <Text style={[styles.txt, { color: Style.whiteColor, backgroundColor: Style.grayColor, paddingHorizontal: 3, paddingVertical: 6, borderRadius: 4 }]}>{this.state.count}s</Text>
        }
      </TouchableOpacity>
    </View>
  )

  _login = async () => {
    const param = `
      mutation login(
        $phoneNumber: String!
        $verificationCode:String!
      ){
        signupOrLogin(
          phoneNumber:$phoneNumber
          verificationCode:$verificationCode
        ){
          token
          refreshToken
          expiredDate
        }
      }`
    const variables = {
      phoneNumber: this.state.phoneNumber,
      verificationCode: this.state.code
    }
    let res = await loginGql(param, variables)
    if (res.errors) {
      let msg = ''
      switch (res.errors[0].message) {
        case err_message.VERIFICATION_CODE_ERROR:
          msg = err_notification.VERIFICATION_CODE_ERROR
          break
        case err_message.CREATE_USER_ERROR:
          msg = err_notification.CREATE_USER_ERROR
          break
        case err_message.SEND_MESSAGE_BY_ALI_ERROR:
          msg = err_notification.SEND_MESSAGE_BY_ALI_ERROR
          break
        case err_message.VERIFICATION_IS_LOCKED:
          msg = err_notification.VERIFICATION_IS_LOCKED
          break
        case err_message.SEND_VERIFICATION_CODE_TOO_FREQUENCY:
          msg = err_notification.SEND_VERIFICATION_CODE_TOO_FREQUENCY
          break
        default:
          msg = '登录失败'
          break
      }
      return
    }
    let userInfo = defaultUersInfo
    userInfo.account = this._randomString(8)
    userInfo.userName = this.state.userName
    userInfo.expiredDate = res.signupOrLogin.expiredDate
    userInfo.token = res.signupOrLogin.token
    userInfo.refreshToken = res.signupOrLogin.refreshToken
    this._setLoginStorage(userInfo)
    Toast.success('登陆成功')
    this.props.navigation.navigate('Home')
  }

  _userNameDom = () => (
    <View style={styles.input}>
      <TextInput
        style={{ height: 40, borderWidth: 0, flex: 1, marginRight: 10 }}
        onChangeText={(v) => this.setState({ userName: v })}
        placeholder={"请输入用户名"}
      />
    </View>
  )

  _codeDom = () => (
    <View style={styles.input}>
      <TextInput
        style={{ height: 40, borderWidth: 0, flex: 1, marginRight: 10 }}
        onChangeText={(v) => this.setState({ code: v })}
        keyboardType={'numeric'}
        placeholder={"请输入验证码"}
      />
    </View>
  )

  _randomString(len) {
    len = len || 8;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZ123456789'
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }

  _setLoginStorage = (data) => {
    Storage.save({
      key: 'userInfo',
      data: data
    })
  }

  _btnDom = () => {
    return (
      <Button
        size={'large'}
        type={'primary'}
        style={{ width: screen.width - 40, marginTop: 30, backgroundColor: Style.themeColor, borderWidth: 0, marginBottom: 40 }}
        activeStyle={{ backgroundColor: Style.themeColor }}
        onPress={() => {
          this._login()
        }}
      >登陆</Button>
    )
  }

  render() {
    return (
      <View style={styles.wrp}>
        {this._userNameDom()}
        {this._inputDom()}
        {this._codeDom()}
        {this._btnDom()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 200
  },
  input: {
    flexDirection: 'row',
    borderColor: Style.themeColor,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 30
  }
})