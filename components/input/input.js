import React from 'react';
// CSS, text, container, something to type content in, button emulator
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

// () => someFunction()
//
export default class Input extends React.components {

    render() {
        // return data, i.e. result of executing function

        // instance is one instance/child of class with specific attributes called props(short)/properties
        return (
            <View  style={styles.container}>
                <TextInput 
                keyboardType={'numeric'}
                value={this.props.value}
                style={styles.input}
                // track changes in text, when someone types something input field
                // text will be what we type in
                onChangeText={(text)=> this.props.onChange(text)}
                />
            </View>
        )
    }
}
// optimised styling

// alignItems is to horizontally align
// justifyContent is to vertically align
// flex 1 is to take entire height
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        height:40,
        width:300,
        borderColor:'gray'
    }

})