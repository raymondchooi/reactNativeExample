import React, { Component } from 'react';
import { AsyncStorage, StatusBar, View } from 'react-native';
import { Scene, Router, TabBar } from 'react-native-router-flux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TabIcon from './global';
import TodoContainer from './todo';
import Reducers from './todo/reducers';

const store = createStore(Reducers, undefined, autoRehydrate());
const persistor = persistStore(store, {storage: AsyncStorage});

export default class App extends Component {
  render() {
    return (
      <Provider store={ store } persistor={ persistor }>
        <View style={{ flex: 1 }}>
          <StatusBar hidden={true}/>
            <Router>
              <Scene key='root' hideNavBar={true}>
                <Scene key='tabbar' tabs={true} style={{ top: 0 }}>
                  <Scene key='all'
                    component={TodoContainer}
                    hideNavBar={true}
                    title="All"
                    icon={TabIcon}/>

                  <Scene key='completed'
                    component={TodoContainer}
                    hideNavBar={true}
                    title="Completed"
                    icon={TabIcon}/>

                  <Scene key='incomplete'
                    component={TodoContainer}
                    hideNavBar={true}
                    title="Active"
                    icon={TabIcon}/>
                </Scene>
              </Scene>
            </Router>
        </View>
      </Provider>
    )
  }
}
