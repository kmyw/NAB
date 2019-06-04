import React, { Component } from 'react';
import { View, Text } from "react-native";

class Find extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Faind Screen</Text>
      </View>
    );
  }
}

export default Find;