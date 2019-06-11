export const Style = {
  bigFontSize: 40,
  norFontSize: 20,
  smlFontSize: 14,
  blackColor: "#000000",
  themeColor: "#9d0a0e",
  grayColor: "gray",
  whiteColor: "#ffffff",
  eeeColor: "#eeeeee"
};

export const CoinType = [
  {
    value: 'ETH',
    label: 'ETH'
  },
  {
    value: 'NABC',
    label: 'NABC'
  },
  {
    value: 'BTC',
    label: 'BTC'
  },
  {
    value: 'TEA',
    label: 'TEA'
  }
]

export const defaultUersInfo = {
  token: '',
  refreshToken: '',
  expiredDate: '',
  userName: '新用户',
  account: '',
  recodes: {},
  wallet: {
    ETH: {
      address: '',
      privateKey: '',
      publicKey: '',
      mnemonic: ''
    },
    NABC: {
      address: '',
      privateKey: '',
      publicKey: '',
      mnemonic: ''
    },
    BTC: {
      address: '',
      privateKey: '',
      publicKey: '',
      mnemonic: ''
    },
    TEA: {
      address: '',
      privateKey: '',
      publicKey: '',
      mnemonic: ''
    }
  }
}

export const host = 'https://assets.yuhu.tech/query'

export const err_message = {
  VERIFICATION_CODE_ERROR: 'verification code error',
  CREATE_USER_ERROR: 'create user error',
  SEND_MESSAGE_BY_ALI_ERROR: 'send message by ali error',
  VERIFICATION_IS_LOCKED: 'verification is locked',
  SEND_VERIFICATION_CODE_TOO_FREQUENCY: 'send verification code too frequency'
}

export const err_notification = {
  VERIFICATION_CODE_ERROR: '验证码错误',
  CREATE_USER_ERROR: '创建用户失败',
  SEND_MESSAGE_BY_ALI_ERROR: '发送验证短信失败',
  VERIFICATION_IS_LOCKED: '验证错误次数过多，账户已锁定',
  SEND_VERIFICATION_CODE_TOO_FREQUENCY: '发送验证短信频率过高'
}