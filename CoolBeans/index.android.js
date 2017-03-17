/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const APIKEY = 'xxxxxxxxxxxxxxx';
export default class CoolBeans extends Component {
  state = { location: 'wherrees are uuu'}

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${APIKEY}`
        ).then(
          result => result.json()
        ).then(
          result => {
            this.setState({location: JSON.stringify(result.results[0].formatted_address)});
          }
        );
      },
      () => Alert.alert(
        'Error', 'We were unable to get your gps location',
      ),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.body}>
        you are at {this.state.location}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  body: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('CoolBeans', () => CoolBeans);
