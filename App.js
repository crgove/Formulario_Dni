/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  Alert,
} from 'react-native';

import Nif from './components/formulario';



export default class App extends Component {

  getNifLetra = ({dni, letra}) => {
    console.log("Estic al component Pare!");
    console.log(dni + "-" + letra);
  }

  render(){
    return(
      <View>
        <Nif devuelveNif={this.getNifLetra} />
      </View>
    )
  }
}