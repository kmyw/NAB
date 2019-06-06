import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { QRScannerView } from 'ac-qrcode-rn'
import { Style } from '../../global'

export default class ScanCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    }
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>扫描二维码</Text>,
    headerRight: <View />,
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
  });

  onScanResultReceived = ({ data, type }) => {
    console.log(`Type: ${type}\nData: ${data}`)
  }

  renderTopBarView() {
    return (
      // <Text style={styles.text}>这里添加标题</Text>
      <Text />
    )
  }

  renderBottomMenuView() {
    return (
      // <Text style={styles.text}>这里添加底部菜单</Text>
      <Text />
    )
  }

  render() {
    return (
      <QRScannerView
        onScanResultReceived={this.onScanResultReceived}
        renderTopBarView={this.renderTopBarView}
        renderBottomMenuView={this.renderBottomMenuView}
        cornerColor={Style.themeColor}
        scanBarColor={Style.themeColor}
      />
    )
  }
}