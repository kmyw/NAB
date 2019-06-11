import React, { Component } from 'react'
import { View, Text, WebView } from "react-native"
import { Style } from '../../global'

export default class ArticleDom extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: Style.norFontSize }}>{navigation.getParam('title').substr(0, 10) + '...'}</Text>,
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
  })
  render() {
    return (
      <WebView
        source={{ uri: this.props.navigation.getParam('artUrl') }}
        style={{ marginTop: 20 }}
      />
    )
  }
}
