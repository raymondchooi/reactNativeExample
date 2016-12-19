import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, setVisibilityFilter } from './actions';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <TodoList todos={ this.props.todos }
          toggleTodo={ this.props.toggleTodo }
          title={ this.props.title }/>

        <View style={ styles.todoInput }>
          <TodoInput addTodo={ this.props.addTodo }/>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  todoInput: {
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});

TodoContainer.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    displayType: state.displayType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: payload => dispatch(addTodo(payload)),
    toggleTodo: id => dispatch(toggleTodo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
