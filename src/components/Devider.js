import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types';
import colors from '../styles/colors';
export default class Devider extends Component {
    render() {
        const {style, label} = this.props;
        return (
            <View style={style}>
                <View style={styles.line}></View>
                <Text style={styles.text}>{label}</Text>
                <View style={styles.line}></View>
            </View>
        );
    }
}

Devider.propTypes = {
    label: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    line: {
        height: 1,
        flex: 2,
        backgroundColor: 'black'
    },
    text: {
        flex: 1,
        textAlign: 'center'
    },
});
