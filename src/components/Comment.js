import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class Comment extends Component {

    render() {
        const { onAddCommentPress } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onAddCommentPress}>
                    <Text style={styles.text}>Type a comment...</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Comment.propTypes = {
    onAddCommentPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 10
    },
    text: {
        fontSize: 13,
        fontWeight: '100'
    }
});