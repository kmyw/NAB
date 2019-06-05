import React, { Component } from 'react'
import { Image } from "react-native"
import { Provider } from '@ant-design/react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer, StackViewTransitionConfigs } from 'react-navigation'
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator"

import { Style } from '../global'

import Home from '../Screen/Home'
import Detail from '../Screen/Home/detail'
import Mine from '../Screen/Mine'
import D from '../Screen/Mine/detail'
import Find from '../Screen/Find'
import Manage from '../Screen/Manage'
import ScanCode from '../Screen/Home/ScanCode'
import LockPosition from '../Screen/Home/LockPosition'
import ExtractCoin from '../Screen/Home/ExtractCoin'
import ExchangeCoin from '../Screen/Home/ExchangeCoin'
import Transaction from '../Screen/Home/Transaction'
import RechangeCoin from '../Screen/Home/RechargeCoin'
import ExtractRecord from '../Screen/Home/ExtractRecord'
import RechargeRecord from '../Screen/Home/RechargeRecord'
import TransactionRecord from '../Screen/Home/TransactionRecord'

// 页面切换动画
// StackViewStyleInterpolator.forHorizontal：从右向左进入
// StackViewStyleInterpolator.forVertical：从下向上进入
// StackViewStyleInterpolator.forFadeFromBottomAndroid：从底部淡出
// StackViewStyleInterpolator.forFade：无动画

const HomeStack = createStackNavigator({ Home, Detail, ScanCode, LockPosition, ExtractCoin, ExchangeCoin, Transaction, RechangeCoin, ExtractRecord, RechargeRecord, TransactionRecord }, {
  transitionConfig: () => ({ // 设置左右切换
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    transitionSpec: {
      duration: 250
    }
  })
});
const MineStack = createStackNavigator({ Mine, D }, {
  transitionConfig: () => ({ // 设置左右切换
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    transitionSpec: {
      duration: 250
    }
  })
});
const FindStack = createStackNavigator({ Find }, {
  transitionConfig: () => ({ // 设置左右切换
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    transitionSpec: {
      duration: 250
    }
  })
});
const ManageStack = createStackNavigator({ Manage }, {
  transitionConfig: () => ({ // 设置左右切换
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    transitionSpec: {
      duration: 250
    }
  })
});

// 详情页不显示tabbar
HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};
MineStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};
FindStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};
ManageStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: '资产',
        showIcon: true,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../images/vote_tab.png')}
            style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
          />
        )
      }
    },
    ManageStack: {
      screen: ManageStack,
      navigationOptions: {
        tabBarLabel: '理财',
        showIcon: true,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../images/vote_tab.png')}
            style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
          />
        )
      }
    },
    FindStack: {
      screen: FindStack,
      navigationOptions: {
        tabBarLabel: '发现',
        showIcon: true,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../images/vote_tab.png')}
            style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
          />
        )
      }
    },
    MineStack: {
      screen: MineStack,
      navigationOptions: {
        tabBarLabel: '我的',
        showIcon: true,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../images/vote_tab.png')}
            style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'HomeStack', //第一次加载时初始选项卡路由的 routeName
    order: ['HomeStack', 'ManageStack', 'FindStack', 'MineStack'], //定义选项卡顺序的 routeNames 数组
    tabBarOptions: {
      activeTintColor: Style.themeColor,
      inactiveTintColor: Style.grayColor,
      indicatorStyle: {
        height: 0
      },
      style: {
        backgroundColor: '#fff',
      }
    }
  }
)

const AppContainer = createAppContainer(BottomTabNavigator); //底部导航

export default class Navigation extends Component {
  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    )
  }
}