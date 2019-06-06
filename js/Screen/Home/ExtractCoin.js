import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native"
import { Icon, InputItem, Button } from '@ant-design/react-native'
import { Style } from '../../global'
import TransactionCard from '../../components/TransactionCard'

const screen = Dimensions.get('window')

export default class ExtractCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>提币</Text>,
    headerRight: (<TouchableOpacity
      style={{ marginRight: 15 }}
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('ExtractRecord')
      }}
    >
      <Icon name="container" size="md" color="#fff" />
    </TouchableOpacity>),
    headerTitleStyle: {
      alignSelf: 'center'
    },
    headerTintColor: '#fff', // 返回按钮颜色
    headerStyle: {
      backgroundColor: Style.themeColor,
      height: 50,
      elevation: 0,  // android
      shadowOffset: { width: 0, height: 0 },  // ios (w 和 h 对应box-shadow x y 偏移)
      shadowOpacity: 0, // 透明度
    }
  })

  _fromInfoDom = () => {
    return (
      <View style={styles.fromWrp}>
        <View style={styles.inputItem}>
          <InputItem
            style={styles.txt}
            onChange={(value) => {
              // this.setState({
              //   text: value,
              // });
            }}
            placeholder={"输入/长按粘贴地址"}
          >
            <Text style={[styles.txt, { marginRight: 6 }]}>提币地址</Text>
          </InputItem>
          <TouchableOpacity
            style={styles.rightItem}
            activeOpacity={0.5}
            onPress={() => {
              this.props.navigation.navigate('ScanCode')
            }}
          >
            <Icon name="scan" size="md" color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputItem}>
          <InputItem
            style={styles.txt}
            onChange={(value) => {
              // this.setState({
              //   text: value,
              // });
            }}
            placeholder={"请输入提币数额"}
          >
            <Text style={[styles.txt, { marginRight: 6 }]}>提币数额</Text>
          </InputItem>
          <TouchableOpacity
            style={[styles.rightItem, { top: 44 }]}
            activeOpacity={0.5}
            onPress={() => {

            }}
          >
            <Text style={[styles.txt, { color: Style.themeColor }]}>全部发送</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputItem}>
          <InputItem
            style={styles.txt}
            onChange={(value) => {
              // this.setState({
              //   text: value,
              // });
            }}
            placeholder={"请输入备注(选填)"}
          >
            <Text style={[styles.txt, { marginRight: 6 }]}>备注</Text>
          </InputItem>
        </View>
        <View style={styles.inputItem}>
          <InputItem
            style={styles.txt}
            onChange={(value) => {
              // this.setState({
              //   text: value,
              // });
            }}
          >
            <Text style={[styles.txt, { marginRight: 6 }]}>手续费</Text>
          </InputItem>
        </View>
      </View>
    )
  }

  _btnDom = () => {
    return (
      <Button
        size={'large'}
        type={'primary'}
        style={{ width: screen.width - 40, marginLeft: 20, marginTop: 30, backgroundColor: Style.themeColor, borderWidth: 0 }}
        activeStyle={{ backgroundColor: Style.themeColor }}
      >提币</Button>
    )
  }
  
  render() {
    return (
      <View style={styles.wrp}>
        <ScrollView contentContainerStyle={styles.scrollWrp}>
          <TransactionCard
            isShowAvator={false}
          />
          {this._fromInfoDom()}
          {this._btnDom()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrp: {
    flex: 1
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  },
  fromWrp: {
    paddingLeft: 6,
    paddingRight: 20
  },
  inputItem: {
    position: 'relative',
    marginBottom: 20
  },
  rightItem: {
    position: 'absolute',
    right: 0,
    top: 10
  }
})
