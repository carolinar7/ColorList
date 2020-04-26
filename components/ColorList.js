import React from 'react';
import {StyleSheet, View, FlatList, AsyncStorage} from 'react-native';
import ColorButton from './ColorButton';
import ColorForm from './ColorForm';
import PropTypes from 'prop-types';

class ColorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableColors: [],
    };
  }

  componentDidMount = () => {
    AsyncStorage.getItem('@ColorListStore:Colors', (err, data) => {
      if (err) {
        console.error('Error Loading colors', err);
      } else {
        const availableColors = JSON.parse(data);
        this.setState({availableColors});
      }
    });
  };

  saveColors = colors => {
    AsyncStorage.setItem('@ColorListStore:Colors', JSON.stringify(colors));
  };

  newColor = color => {
    const availableColors = [...this.state.availableColors, color];
    this.setState({availableColors});
    this.saveColors(availableColors);
  };

  keyExtractor = (item, index) => index;
  render() {
    const {backgroundColor, availableColors} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          style={[styles.container, {backgroundColor}]}
          data={availableColors}
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={this.renderHeader}
          renderItem={({item, index}) => this.renderButton(item, index)}
        />
      </View>
    );
  }

  renderHeader = () => {
    return (
      <ColorForm
        onNewColor={this.newColor}
        navigation={this.props.navigation}
      />
    );
  };

  renderButton = (color, index) => {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ColorButton
          backgroundColor={color}
          onSelect={() => navigate('Detail', {item: color})}
        />
      </View>
    );
  };
}

ColorList.defaultProps = {
  onColorSelected: f => f,
};

ColorList.propTypes = {
  onColorSelected: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  headerText: {
    fontSize: 40,
    padding: 30,
  },
});

export default ColorList;
