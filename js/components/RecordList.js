import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from "react-native"
import { gql, getFormatDate } from '../common/request'
import { Style } from '../global'

export default class RecordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: []
    }
  }

  _tradingRecords = async (tradingAddress, skip) => {
    const param = `
    query records(
      $tradingAddress: String!
      $limit: Int
      $skip: Int
    ){
      tradingRecords(
        tradingAddress:$tradingAddress
        limit:$limit
        skip:$skip
      ){
        totalCount
        records{
          txHash
          createdAt
          blockNumber
          tradingType
          tradingStatus
          amount
          symbol
          decimals
          from
          to
          otherAddress
          contractAddress
          comment
          amountDecimalsClip
          amountDecimals
        }
      }
    }`

    const variables = {
      tradingAddress: tradingAddress,
      limit: 10,
      skip: skip
    }
    let res = await gql(param, variables)
    console.log(res)
    let arr = res.tradingRecords.records
    for (let i = 0; i < arr.length; i++) {
      arr[i]['transTime'] = getFormatDate(parseInt(arr[i]['createdAt']))
      if (arr[i]['tradingType'] === 1) {
        arr[i]['tradingType'] = '付款'
      } else {
        arr[i]['tradingType'] = '收款'
      }
      if (arr[i]['tradingStatus'] === 0) {
        arr[i]['tradingStatus'] = '失败'
      } else if (arr[i]['tradingStatus'] === 1) {
        arr[i]['tradingStatus'] = '成功'
      } else {
        arr[i]['tradingStatus'] = '打包'
      }
    }
    this.setState({
      record: arr
    })
  }

  componentDidMount() {
    this._tradingRecords('0x1Faa504E850eb32C6f4833519378d3cC17aaD07b', 0)
  }

  _renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listTop}>
        <Text style={[styles.txt, { color: Style.whiteColor }]}>{item.amountDecimalsClip} {this.props.name}</Text>
        <Text style={[styles.txt, { color: Style.whiteColor }]}>类型：收款</Text>
      </View>
      <Text style={[styles.txt, { color: Style.whiteColor, marginVertical: 10 }]}>{item.txHash}</Text>
      <View style={styles.listBottom}>
        <Text style={[styles.txt, { color: Style.whiteColor, marginRight: 50 }]}>状态：成功</Text>
        <Text style={[styles.txt, { color: Style.whiteColor }]}>{item.createdAt}</Text>
      </View>
    </View>
  )

  _listDom() {
    return (
      <FlatList
        data={this.state.record}
        extraData={this.state}
        renderItem={this._renderItem}
        keyExtractor={(item) => { item.txHash }}
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
  wrp: {
    flex: 1
  },
  listItem: {
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: Style.themeColor,
    borderRadius: 10,
    marginBottom: 20
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
