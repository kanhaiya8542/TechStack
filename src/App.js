import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Provider} from 'react-redux';
import { createStore,  } from 'redux';
import _reducers from './_reducers';
import  Header from '/home/techkopra/Desktop/Test/TechStack/src/components/common/Header.js';
import LibraryList from './components/LibraryList';


const  App = () => {
    return (
      <Provider store={createStore(_reducers)}>
      <View style={{flex:1}}>
        <Header headerText="Tech Stack" />
        <LibraryList/>
      </View>
      </Provider>
    )
  
}

export default App;