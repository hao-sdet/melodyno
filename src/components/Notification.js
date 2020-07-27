import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-elements';

export default class Notification extends Component {

    getNotificationText(type) {
        let text = `unknown`;
        if (type == 'like') {
            text = `liked your quote.`
        }
        else if (type == 'mention') {
            text = `mentioned you in a comment.`
        }
        else if (type == 'comment') {
            text = `commented on your quote.`
        }
        else if (type == 'follow') {
            text = `started following you.`
        }
        return text
    }

    render() {
        const { type, avatar, username } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => null}>
                    <View style={styles.notification}>
                        <Avatar
                            size='small'
                            rounded
                            onPress={() => null}
                            source={avatar}
                        />
                        <Text style={styles.usernameText}>{username}</Text>
                        <Text style={styles.notificationText}>{this.getNotificationText(type)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

Notification.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginHorizontal: 10
    },
    notification: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    usernameText: {
        marginLeft: 5,
        fontWeight: 'bold'
    },
    notificationText: {
        marginLeft: 5
    }
});