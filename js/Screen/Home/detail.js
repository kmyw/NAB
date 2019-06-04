import React, { Component } from 'react';
import { View, Text, TextInput } from "react-native";
import Counter from '../../components/Counter';
import { connect } from 'react-redux';
import * as counterAction from '../../actions';

class Detail extends Component {
  render() {
    const { count, incrementFn, decrementFn } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Counter incrementFn={incrementFn} decrementFn={decrementFn} counter={count}>
        </Counter>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#cccccc', textAlign: 'center' }}
          onChangeText={text => this.inputValue = text}
        />
      </View>
    );
  }
}

export default connect(
  (state) => ({
    count: state.counter.count,
  }),
  (dispatch) => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(Detail)