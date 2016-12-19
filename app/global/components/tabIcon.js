import React, { Component, PropTypes } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class TabIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{ flex:1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: this.props.selected ? '#27ae60' : '#2ecc71' }}>
        <Text
          style={{ fontSize: 16, color: 'ivory' }}>
          {this.props.title}
        </Text>
      </View>
    )
  }
};

TabIcon.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};
