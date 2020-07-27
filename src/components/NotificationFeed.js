import React, { Component } from 'react';
import {
    FlatList,
    SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import Notification from '../components/Notification';

export default class NotificationFeed extends Component {

    renderNotification = ({ item: { id, type, avatar, username } }) => {
        return (
            <Notification
                type={type}
                avatar={avatar}
                username={username}
            />
        );
    }

    render() {
        const { container, items } = this.props;
        return (
            <SafeAreaView style={container}>
                <FlatList
                    data={items}
                    renderItem={this.renderNotification}
                />
            </SafeAreaView>
        )
    }
}

NotificationFeed.propTypes = {
    container: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired
        })
    ).isRequired
};
