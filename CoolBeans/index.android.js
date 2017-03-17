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
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIKEY}&result_type=street_address`
        ).then(
          result => result.json()
        ).then(
          result => this.setState({location: `${result.results[0].formatted_address}`})
        );
      },
      error => Alert.alert(
        'Error', `We were unable to get your gps location. ${JSON.stringify(error)}`,
      ),
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
