import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types';

import colors from '../styles/colors';

export default class LoginButton extends Component {
    render() {
        const {label, onPress} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

LoginButton.propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderColor: colors.black
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 20
    }
});
