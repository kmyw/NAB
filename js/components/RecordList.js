import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from "react-native"
import { Style } from '../global'

const record = {
  "data": {
    "tradingRecords": {
      "totalCount": 55,
      "records": [
        {
          "txHash": "0xf116111b661659318b04ce9908eca2d4fd320b9d213a03f9417ca8864a123126",
          "createdAt": "1558346473",
          "createdAtGroup": "1556668800",
          "blockNumber": 0,
          "tradingType": 1,
          "tradingStatus": 1,
          "amount": "10000000111",
          "amountDecimals": "-0.000000010000000111",
          "amountDecimalsClip": "-0",
          "gas": "0",
          "gasDecimals": "0",
          "gasDecimalsClip": "0",
          "symbol": "GA",
          "decimals": 18,
          "from": "0x941c69B23CeF5f5021b5966f4ba85fE6Bf9A58E1",
          "to": "0x1B5330f7614Ea86132A97fc9994Bd32Eb6Da72f3",
          "otherAddress": "0x1B5330f7614Ea86132A97fc9994Bd32Eb6Da72f3",
          "contractAddress": "",
          "contractName": "",
          "comment": ""
        },
        {
          "txHash": "0xf116111b661659318b04ce9908eca2d4fd320b9d213a03f9417ca8864a123126",
          "createdAt": "1558346473",
          "createdAtGroup": "1556668800",
          "blockNumber": 0,
          "tradingType": 1,
          "tradingStatus": 1,
          "amount": "10000000111",
          "amountDecimals": "-0.000000010000000111",
          "amountDecimalsClip": "-0",
          "gas": "0",
          "gasDecimals": "0",
          "gasDecimalsClip": "0",
          "symbol": "GA",
          "decimals": 18,
          "from": "0x941c69B23CeF5f5021b5966f4ba85fE6Bf9A58E1",
          "to": "0x1B5330f7614Ea86132A97fc9994Bd32Eb6Da72f3",
          "otherAddress": "0x1B5330f7614Ea86132A97fc9994Bd32Eb6Da72f3",
          "contractAddress": "",
          "contractName": "",
          "comment": ""
        },
        {
          "txHash": "0xf116111b661659318b04ce9908eca2d4fd320b9d213a03f9417ca8864a123126",
          "createdAt": "1558346473",
          "createdAtGroup": "1556668800",
          "blockNumber": 0,
          "tradingType": 1,
          "tradingStatus": 1,
          "amount": "10000000111",
          "amountDecimals": "-0.000000010000000111",
          "amountDecimalsClip": "-0",
          "gas": "0",
          "gasDecimals": "0",
          "gasDecimalsClip": "0",
          "symbol": "GA",
          "decimals": 18,
          "from": "0x941c69B23CeF5f5021b5966f4ba85fE6Bf9A58E1",
          "to": "0x1B5330f7614Ea86132A97fc9994Bd32Eb6Da72f3",
          "otherAddress": "0x1B5330f7614Ea86132A97fc9994Bd32Eb6Da72f3",
          "contractAddress": "",
          "contractName": "",
          "comment": ""
        }
      ]
    }
  }
}

export default class RecordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: record.data.tradingRecords.records
    }
  }
  componentDidMount() {
  }

  _renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listTop}>
        <Text style={[styles.txt, {color: Style.whiteColor}]}>{item.amountDecimalsClip} {this.props.name}</Text>
        <Text style={[styles.txt, {color: Style.whiteColor}]}>类型：收款</Text>
      </View>
      <Text style={[styles.txt, {color: Style.whiteColor, marginVertical: 10}]}>{item.txHash}</Text>
      <View style={styles.listBottom}>
        <Text style={[styles.txt, {color: Style.whiteColor, marginRight: 50}]}>状态：成功</Text>
        <Text style={[styles.txt, {color: Style.whiteColor}]}>{item.createdAt}</Text>
      </View>
    </View>
  )

  _listDom() {
    return (
      <FlatList
        data={this.state.record}
        extraData={this.state}
        renderItem={this._renderItem}
        keyExtractor={(item) => {item.txHash}}
        style={{ marginBottom: 20 }}
        ListEmptyComponent={() => (<Text>暂无数据</Text>)}
      />
    )
  }

  render() {
    return (
      <View style={styles.wrp}>
        {this._listDom()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: Style.themeColor,
    borderRadius: 10,
    marginBottom: 10
  },
  listTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  txt: {
    fontSize: Style.smlFontSize,
    color: Style.blackColor
  }
})
