import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorTools from 'color';

function ColorInfo(props) {
  const {route} = props;
  const {item} = route.params;
  const color = ColorTools(item);
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={[styles.text, {color: color.negate()}]}>{color.hex()}</Text>
      <Text style={[styles.text, {color: color.negate()}]}>
        {color.rgb().toString()}
      </Text>
      <Text style={[styles.text, {color: color.negate()}]}>
        {color.hsl().toString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});

export default ColorInfo;
