import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';


export default class AddContainer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/text-logo.png')} style={styles.logo}/>
                <Text style={styles.text}>To be continued...</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logo: {
        width: '80%',
    },
    text: {
        fontSize: 15,
        paddingTop: 30,
        paddingLeft: 150
    }
});