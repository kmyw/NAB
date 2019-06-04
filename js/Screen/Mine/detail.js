import React, { Component } from 'react';
import { View, Text } from "react-native";

class Detail extends Component {
  static navigationOptions = {
    title: '设备总览'
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}

export default Detail;