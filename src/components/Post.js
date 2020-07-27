import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tile, Button } from 'react-native-elements';
import UserBar from './UserBar';
import Caption from './Caption';
import Comment from './Comment';

export default class Post extends Component {

    // All datas below will be fetched using post_id
    state = {
        location: 'Seattle, WA',
        image: require('../assets/images/life.png'),
        quote: 'this is a test quote',
        caption: 'this is a test caption #love #relationship #life'
    };

    render() {
        const { avatar, username } = this.props;
        const { location, image, quote, caption } = this.state
        return (
            <View style={styles.container}>
                <UserBar
                    avatar={avatar}
                    username={username}
                    location={location}
                    onAvatarPress={()=> null}
                    onUsernamePress={()=> null}
                    onLocationPress={()=> null}
                />
                <Tile imageSrc={image} title={quote} featured></Tile>
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <Button type='clear' icon={ <Icon name='heart-outline' size={25}/> }/>
                    <Button type='clear' icon={ <Icon name='share-social-outline' size={25}/> }/>
                </View>
                <Caption username={username} caption={caption} onUsernamePress={()=> null}/>
                <Comment onAddCommentPress={()=> null}/>
            </View>
        );
    }
}

Post.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 10
    }
});