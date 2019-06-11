import { request, GraphQLClient } from 'graphql-request'
import { host } from '../global'
import Storage from '../Storage'

const endpoint = host

let loginGql = async (param, variables) => {
  /* request */
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
    },
    mode: 'cors'
  })
  let data = await graphQLClient
    .request(param, variables)
    .then(res => {
      return res
    })
    .catch(err => {
      return err.response
    })

  if (data.errors && data.errors[0].message === 'credentials error') {
    // TODO
    console.log(data.errors[0].message)
  } else {
    return data
  }
}

let gql = async (param, variables) => {
  let ret = await Storage.load({
    key: 'userInfo',
  })
  const expiredDate = ret.expiredDate

  if (expiredDate) {
    const now = Date.parse(new Date()) / 1000
    if (now > Number(expiredDate)) {
      const param_refresh = `
          mutation refreshToken($refreshToken: String!) {
            refreshToken(
              refreshToken: $refreshToken
            ){
              token
              refreshToken
              expiredDate
            }
          }`
      const variables_refresh = {
        refreshToken: ret.refreshToken
      }
      await request(endpoint, param_refresh, variables_refresh)
        .then(res => {
          ret.token = res.refreshToken.token
          ret.refreshToken = res.refreshToken.refreshToken
          ret.expiredDate = res.refreshToken.expiredDate
          Storage.save({
            key: 'userInfo',
            data: ret
          })
        })
        .catch(err => {
          /* TODO log */
        })
    } else {
      /* TODO log */
    }
  } else {
    /* TODO log */
  }
  /* request */
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${ret.token}`
    },
    mode: 'cors'
  })
  let data = await graphQLClient
    .request(param, variables)
    .then(res => {
      return res
    })
    .catch(err => {
      return err.response
    })
  return data
}

export function getFormatDate(timestamp = '') {
  var date = new Date(timestamp * 1000)
  var seperator1 = '-'
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  /* var second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() */
  var currentdate = year + seperator1 + month + seperator1 + strDate + ' ' + hour + ':' + minute
  return currentdate
}

export { loginGql, gql }
