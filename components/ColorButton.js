import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

const ColorButton = ({backgroundColor, onSelect = 'yellow'}) => (
  <TouchableHighlight
    style={styles.button}
    onPress={() => onSelect(backgroundColor)}
    underlayColor="white">
    <View style={styles.row}>
      <View style={[styles.sample, {backgroundColor}]} />
      <Text style={styles.text}>{backgroundColor}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.8)',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.3)',
  },
  text: {
    fontSize: 30,
    margin: 5,
  },
});

export default ColorButton;
