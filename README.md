[![Language](https://img.shields.io/badge/language-ES%206-orange.svg)](https://github.com/lukehoban/es6features#readme)
[![Platforms](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey.svg)](http://facebook.github.io/react-native/docs/getting-started.html)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/RayChooi)

# React Native Todo Example


##### A basic todo app using React Native with Redux and Flux architectures

<img src="https://github.com/raymondchooi/reactNativeExample/blob/master/rnTodoPreview.gif" alt="React Native Todo App preview" width="320px"></img>


## Features

- Easy to follow example
- Functional todo app
- Filtered todos
- Animated interactions
- Permanent local storage with unique ids
- Navigation overview in a single file

## Running the app

This example is built with `React Native 0.39+` and works for Android and iOS.

#### Clone this repo and install its dependencies using npm

```sh
$ git clone https://github.com/raymondchooi/reactNativeExample.git
$ cd reactNativeExample
$ npm install
```
## Install React Native and run the app

Install `react-native-cli` and follow instructions found here: [Get started with react-native](https://facebook.github.io/react-native/docs/getting-started.html#requirements)


## Documentation

This app was made to help explain a folder layout of a typical React Native app and demonstrate some usages of common features.


### External modules

- [Redux](https://github.com/reactjs/redux) /[React-redux](https://github.com/reactjs/react-redux) for data storage structure
- [Redux-persist](https://github.com/rt2zz/redux-persist) for permanent storage using [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html)
- [Flux](https://github.com/aksonov/react-native-router-flux) for navigation structure using a flux style architecture for React Native


### Folder structure

```
├── index.android.js
├── index.ios.js
│   ├── app/
│   │   ├── index.js
│   │   ├── todo
│   │   │   ├── index.js
│   │   │   ├── todoContainer.js
│   │   │   ├── actions.js
│   │   │   ├── reducers.js
│   │   │   ├── components
│   │   │   │   ├── todoInput.js
│   │   │   │   ├── todoList.js
│   │   │   │   ├── todoItem.js
│   │   ├── global
│   │   │   ├── index.js
│   │   │   ├── components
│   │   │   │   ├── tabIcon.js
```

#### Motivation

There are many different examples of folder layouts, each with their separate pros and cons. The layout presented here helps guide a new user through the app with entry points (index.js) and overviews (containers). It is also a solid structure for larger apps as each page/scene can be edited mostly within the same directory. Global editing can also be done (e.g. images) without digging too deep into the app.

#### Explanations

```
├── index.js
```
The entry point for each directory including all exports for that folder.
```
├── global
│   ├── index.js
│   ├── components
│   │   ├── tabIcon.js
```
Global components used throughout the app, in this case only tab icons are global. Settings, images, combining reducers, and themes could also be placed here.
```
├── components
│   ├── todoInput.js
│   ├── todoList.js
│   ├── todoItem.js
```
Individual components of a scene/page which include how each component is designed.
```
├── todoContainer.js
```
A container that puts together the components and connects them to actions that interact with the redux store.
```
├── actions.js
├── reducers.js
```
Redux actions and reducers for the individual scene/page.


### Coding structures

#### Motivation

As javascript and react-native are evolving, there have been many different example layouts. This app was made with `React Native 0.39` and below I'll try explain some of the reasoning behind some of the styles used. A lot of styling is mostly ok as long as it is easy to interpret and consistent.

#### Explanations

```javascript
import React, { Component, PropTypes } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';

import TodoItem from './todoItem';
```

- Import general modules and building blocks first followed by more specific files to the app.
- New line if over 80 characters long, ending the line with a comma if splitting an array to signify that it continues on the following line.

```javascript
export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
...
```

- Try separate features and components logically so that bugs can easily be traced and the app more easily understood.
- Constructor at the top with prop/state definitions so that core parts of the app stand out.

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    ...
});


TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  ...
};
```

- Combine styles where possible in a [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet.html) so that design editing can occur in one place making editing easier when other components are affected.
- StyleSheet styles with a one space difference from corresponding value (not tabbed alignment as this can be hard to follow)
- Proptypes/defaultProps at the bottom with the StyleSheet. All prop definitions could also be placed near the top.

```javascript
<TouchableWithoutFeedback
  onPress={ this.addBtnPress.bind(this) }>
  <Animated.Text style={[ styles.addBtn,
    { opacity: this.inputOpacity,
      transform: [{ translateY: this.inputHeight }] }]}
  >+</Animated.Text>
</TouchableWithoutFeedback>
```

- Space either side of contents in brackets { styles.Example }. I find this helps with readability where code can be cramped but not to be overused as many gaps can also be hard to follow.
- Closing tab, `>` on same line as text (no lonely closing tags taking up a whole line) as the next opening tag, `<` already signifies a close occurrence.  
- Closing tab with text involved on the same line `>+</Animated.Text>` so that the text can clearly be distinguished from the rest of the code.

Some general ones:
- Camel case naming beginning with a lower-case letter (same for folders) to go with react-native/javascript styling.
- Separate parts where there are large blocks of code.


## Improvements

Let me know if there are any folder structures/coding styles that you think I should include!


## License

GNU General Public License v3.0
