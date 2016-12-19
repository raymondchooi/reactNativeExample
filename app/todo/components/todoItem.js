import React, { Component, PropTypes } from 'react';
import { Animated, StyleSheet, Text, TouchableWithoutFeedback,
  View } from 'react-native';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.tickSpring = new Animated.Value(1);
  }

  onTickPress() {
    this.props.toggleTodo(this.props.item.id);

    this.tickSpring.setValue(0.4);
    Animated.spring( this.tickSpring,
      { toValue: 1, friction: 3 }
    ).start();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.todoText }>
          { this.props.item.text }
        </Text>

        <TouchableWithoutFeedback onPress={ this.onTickPress.bind(this) }>
          <Animated.Text style={[ styles.tick,
            { color: this.props.item.completed ? '#27ae60' : '#e74c3c',
            transform: [{ scale: this.tickSpring }]}] }
          >✓</Animated.Text>
        </TouchableWithoutFeedback>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    marginHorizontal: 15,
  },
  todoText: {
    fontSize: 20,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  tick: {
    fontSize: 25,
    padding: 10,
    marginRight: 3,
  }
});


TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};
