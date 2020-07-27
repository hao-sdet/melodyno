import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Header } from 'react-native-elements';
import Feed from '../components/Feed';
import StoryBar from '../components/StoryBar';

const logo = require('../assets/images/text-logo.png');

export default class HomeContainer extends Component {

    state = {
        users: [{
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                username: 'rlespace',
                image: require('../assets/images/love.png')
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                username: 'peterpan',
                image: require('../assets/images/motivational.png')
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d72',
                username: 'russelm',
                image: require('../assets/images/life.png')
            },
            {
                id: '58694a0f-3da1-471f-bd96-143225571e29d72',
                username: 'visual43',
                image: require('../assets/images/motivational2.png')
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e349d72',
                username: 'placetobe',
                image: require('../assets/images/life.png')
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd9654a97f63',
                username: 'saigon12',
                image: require('../assets/images/love2.png')
            },
            {
                id: '58694a0f-3da1-471f-bd96-1345571e29d72',
                username: 'popel35',
                image: require('../assets/images/life.png')
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e34d72',
                username: 'creativ',
                image: require('../assets/images/motivational.png')
            }
        ]
    };

    renderMainLogo() {
        return (
            <Image source={logo} style={styles.logo}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{icon: 'menu', style: { color: 'black'}}}
                    centerComponent={this.renderMainLogo()}
                    rightComponent={{icon: 'inbox', style: { color: 'black'}}}
                    containerStyle={{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}
                />
                <ScrollView>
                    <View style={{ height: 80}}>
                        <StoryBar items={this.state.users}/>
                    </View>
                    <View>
                        <Feed items={this.state.users}/>
                    </View>
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
    logo: {
        width: '80%',
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});