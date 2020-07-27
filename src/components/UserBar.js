import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class UserBar extends Component {
    render() {
        const {avatar, username, location, onAvatarPress, onUsernamePress, onLocationPress} = this.props;
        return (
            <View style={styles.container}>
                <Avatar
                    size='small'
                    rounded
                    onPress={onAvatarPress}
                    source={avatar}
                    containerStyle={styles.avatarContainer}
                />
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={onUsernamePress}>
                        <Text style={styles.usernameText}>{username}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onLocationPress}>
                        <Text style={styles.locationText}>{location}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
}

UserBar.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    onAvatarPress: PropTypes.func.isRequired,
    onUsernamePress: PropTypes.func.isRequired,
    onLocationPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    avatarContainer: {
        borderWidth: 2,
        borderColor: 'pink',
    },

    usernameText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    locationText: {
        fontSize: 13,
    }
});
