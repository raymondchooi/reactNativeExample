import React, { Component, PropTypes } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';

import TodoItem from './todoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  todoCompleted(id) {
    this.props.toggleTodo(id);
  }

  emptyScreenLayout() {
    return (
      <View style={{ justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50 }}>
        <Text style={{ fontSize: 20, color: '#bdc3c7' }}
        >Get started below!</Text>
      </View>
    );
  }

  renderTodoList() {
    if (this.props.todos.length === 0) {
      return this.emptyScreenLayout();
    } else if (this.props.title === "Active") {
      let active = this.props.todos.filter(item => item.completed === false).length;

      if (active > 0) {
        return this.props.todos.map(item => {
          if (item.completed === false) {
            return (
              <TodoItem
                key={ item.id }
                item={ item }
                toggleTodo={ _ => this.props.toggleTodo(item.id) }/>
            );
          }
        });
      } else {
        return this.emptyScreenLayout();
      }
    } else if (this.props.title === "Completed") {
      let completed = this.props.todos.filter(item => item.completed === true).length;

      if (completed > 0) {
        return this.props.todos.map(item => {
          if (item.completed === true) {
            return (
              <TodoItem
                key={ item.id }
                item={ item }
                toggleTodo={ _ => this.props.toggleTodo(item.id) }/>
            );
          }
        });
      } else {
        return this.emptyScreenLayout();
      }
    }

    return this.props.todos.map(item =>
      <TodoItem
        key={ item.id }
        item={ item }
        toggleTodo={ _ => this.props.toggleTodo(item.id) }/>
    );
  }

  render() {
    return (
      <ScrollView>
        { this.renderTodoList() }
      </ScrollView>
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

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};
