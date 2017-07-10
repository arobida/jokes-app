import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
// the ./ means same folder structure level
import Input from './Component/Input/Input';
export default class App extends React.Component {

  state={
    value:''
  }

// props are a channel to pass info from an instance to a class
  render() {
    return (
      <View style={styles.container}>
        <Input
          value={this.state.value}
          onChange={(value)=>this.setState({value:value})}
        />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width:100,
    height:50
  }
});
