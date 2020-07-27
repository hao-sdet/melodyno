import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class Caption extends Component {

    render() {
        const { username, caption, onUsernamePress } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.captionContainer}>
                    <TouchableOpacity onPress={onUsernamePress}>
                        <Text style={styles.usernameText}>{username}</Text>
                    </TouchableOpacity>
                    <Text style={styles.captionText}>{caption}</Text>
                </View>
            </View>
        );
    }
}

Caption.propTypes = {
    username: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    onUsernamePress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    captionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    usernameText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13
    },
    captionText: {
        marginLeft: 5,
        fontSize: 13,
        fontWeight: '300'
    }
});