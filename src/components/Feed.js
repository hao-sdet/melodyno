import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import Post from './Post';

export default class Feed extends Component {

    getUserAvatarById(id) {
      return require('../assets/images/motivational2.png')
    }

    renderPost = ({ item: { id, username } }) => {
        return (
            <Post
                avatar={this.getUserAvatarById(id)}   // get avatar by id 
                username={username}
            />
        );
    }

    render() {
        const { container, items } = this.props;
        return (
            <View style={container}>
                <FlatList
                    data={items}
                    renderItem={this.renderPost}
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

Feed.propTypes = {
  container: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          username: PropTypes.string.isRequired
      })
  ).isRequired
};
