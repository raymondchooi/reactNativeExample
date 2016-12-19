import React, { Component, PropTypes } from 'react';
import { Animated, InteractionManager, StyleSheet, TextInput,
  TouchableWithoutFeedback, View } from 'react-native';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state={
      inputText: "",
    }

    this.AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
    this.inputRise = new Animated.Value(0);
    this.inputOpacity = new Animated.Value(1);
    this.inputHeight = this.inputRise.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, -100 ]
    });
  }

  addBtnPress() {
    if (this.state.inputText.length > 0) {
      this.inputRise.setValue(0);
      this.inputOpacity.setValue(1);

      Animated.parallel([
        Animated.timing( this.inputRise,
          { toValue: 1, duration: 300 }
        ),
        Animated.timing ( this.inputOpacity,
          { toValue: 0, duration: 300 }
        )
      ]).start(this.addTodoAndRefresh());
    }
  }

  addTodoAndRefresh() {
    InteractionManager.runAfterInteractions(() => {
      this.props.addTodo({id: this.generateUUID(), text: this.state.inputText});

      this.setState({inputText: ""});
      this.inputRise.setValue(0);
      Animated.timing (this.inputOpacity,
        { toValue: 1, duration: 800 }
      ).start()
    });
  }

  generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

  getPlaceholder() {
    let placeholderArray = [
      "I can > Can I",
      "Just do it.",
      "Why not?",
      "Your only limit is you.",
      "Stay determined.",
      "W̶i̶s̶h̶  Do.",
      "Seize the day.",
      "Let's get started!",
    ]
    return placeholderArray[Math.floor(Math.random()*placeholderArray.length)];
  }

  render() {
    return (
      <View style={ styles.container }>
        <this.AnimatedTextInput style= {[ styles.textInput,
          { opacity: this.inputOpacity,
            transform: [{ translateY: this.inputHeight }] }]}
          placeholder={ this.getPlaceholder() }
          placeholderTextColor="#bdc3c7"
          defaultValue={ this.state.inputText }
          maxLength={35}
          onChangeText={ (text) => {
            this.setState({ inputText: text })}}
          onSubmitEditing={ _ => this.addBtnPress() }/>

        <TouchableWithoutFeedback
          onPress={ this.addBtnPress.bind(this) }>
          <Animated.Text style={[ styles.addBtn,
            { opacity: this.inputOpacity,
              transform: [{ translateY: this.inputHeight }] }]}
          >+</Animated.Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 20,
    flex: 1,
    marginLeft: 10,
  },
  addBtn: {
    color: '#27ae60',
    fontSize: 35,
    padding: 20,
    flex: 0,
  },
});

TodoInput.propTypes = {
  addTodo: PropTypes.func
};
