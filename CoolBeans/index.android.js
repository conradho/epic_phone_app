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

const APIKEY = 'AIzaSyARmmE4s32sgyWffg1Oo3oWKcsw2TUTmd0';

export default class CoolBeans extends Component {
  state = { location: '[wherrees are uuu???]'}

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude.toFixed(6);
        const longitude = position.coords.longitude.toFixed(6);
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIKEY}&result_type=street_address`
        ).then(
          result => result.json()
        ).then(
          result => this.setState({location: `${result.results[0].formatted_address}`})
        );
        fetch(
          'https://phoneapp.pythonanywhere.com/api/coordinates/',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ latitude, longitude }),
          }
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
