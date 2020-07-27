import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

export default class Category extends Component {
    render() {
        const { image, text, onCategoryPress } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}>
                    <Image source={image} style={styles.image}/>
                </View>
                <View style={styles.text}>
                    <Text>{text}</Text>
                </View>
            </View>
        );
    }
}

Category.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onCategoryPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd'
    },
    image:{
        flex: 1,
        width: null,
        height: null, 
        resizeMode: 'cover'
    },
    text:{
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10
    }
});