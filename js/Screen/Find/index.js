import React, { Component } from 'react'
import { View, ScrollView, Dimensions, StyleSheet } from "react-native"
import TopBar from '../../components/TopBar'

const screen = Dimensions.get('window')


export default class Find extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.scrollWrp}>
          <TopBar
            title="发现"
            isShowScan={false}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollWrp: {
    width: screen.width,
    paddingHorizontal: 20
  }
})