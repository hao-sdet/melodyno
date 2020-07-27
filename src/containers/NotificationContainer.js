import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Header } from 'react-native-elements';
import NotificationFeed from '../components/NotificationFeed';

export default class NotificationContainer extends Component {

    state = {
        notifications: [{
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                type: 'like',
                avatar: require('../assets/images/love.png'),
                username: 'michealt'
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                type: 'follow',
                avatar: require('../assets/images/motivational.png'),
                username: 'sariku'
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d72',
                type: 'like',
                avatar: require('../assets/images/life.png'),
                username: 'johnb'
            },
            {
                id: '58694a0f-3da1-471f-bd96-143225571e29d72',
                type: 'mention',
                avatar: require('../assets/images/motivational.png'),
                username: 'yiyang'
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e349d72',
                type: 'mention',
                avatar: require('../assets/images/life.png'),
                username: 'mrhes'
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd9654a97f63',
                type: 'follow',
                avatar: require('../assets/images/motivational.png'),
                username: 'sariku'
            },
            {
                id: '58694a0f-3da1-471f-bd96-1345571e29d72',
                type: 'like',
                avatar: require('../assets/images/life.png'),
                username: 'peterpan'
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e34d72',
                type: 'mention',
                avatar: require('../assets/images/motivational.png'),
                username: 'channell'
            }
        ]
    };

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Notification', style: { fontSize: 17, fontWeight: '600' } }}
                    containerStyle={{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}
                />
                <ScrollView>
                    <NotificationFeed items={this.state.notifications}/>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});