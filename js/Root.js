import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import AppContainer from './Navigator'

const store = configureStore()
console.disableYellowBox = true

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
