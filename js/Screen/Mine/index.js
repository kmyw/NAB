import React, { Component } from 'react';
import { View, Text } from "react-native";

class Mine extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          onPress={() => {
            this.props.navigation.navigate('D')
          }}
        >Mine Screen</Text>
      </View>
    );
  }
}

export default Mine;