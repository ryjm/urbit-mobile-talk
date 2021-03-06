import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text>{this.props.statusMessage}</Text>
        {this.props.onLoadingCancel &&
          <TouchableOpacity onPress={this.props.onLoadingCancel}>
            <Text style={styles.send}>Cancel</Text>
          </TouchableOpacity>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});
