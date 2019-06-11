import * as types from './types'
import { gql } from '../common/request'
import { Toast } from '@ant-design/react-native'

export function decrement() {
  return {
    type: types.DECREMENT,
  }
}

export function increment() {
  return {
    type: types.INCREMENT,
  }
}

// const receiveRecord = (data) => {
//   type: types.GETRECORD,
//   records: data
// }

export const getRecords = async (skip) => {
  // dispatch(receiveRecord('data'));
  // API 发起请求
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
    tradingAddress: '0x1Faa504E850eb32C6f4833519378d3cC17aaD07b',
    limit: 10,
    skip: skip
  }
  let res = await gql(param, variables)
  console.log(res)
  // if (res.errors) {
  //   Toast.fail(res.errors[0].message)
  //   return
  // }
  let rec = res.tradingRecords
  // dispatch(receiveRecord(rec));
  // return dispatch(receiveRecord('rec'))
  // return {
  //   type: types.GETRECORD,
  //   records: 'sas'
  // }
}