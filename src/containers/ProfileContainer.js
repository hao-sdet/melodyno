import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Grid from '../components/Grid';

export default class ProfileContainer extends Component {
    
    state = {
        activeTab: 0,
        images: [{
            id: 'bd7acbea-c1b1-46c2-435g-3ad53abb28ba',
            image: require('../assets/images/motivational2.png')
        },
        {
            id: '3ac68afc-c605-48d3-234g-fbd91aa97f63',
            image: require('../assets/images/motivational.png')
        },
        {
            id: '58694a0f-3da1-471f-233f-145571e29d72',
            image: require('../assets/images/life.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-435g-3a353abb28ba',
            image: require('../assets/images/love2.png')
        },
        {
            id: '3ac68afc-c605-48d3-234g-ftd91aa97f63',
            image: require('../assets/images/motivational2.png')
        },
        {
            id: '58694a0f-3da1-471f-223f-145573e29d72',
            image: require('../assets/images/life.png')
        },
        {
            id: '58694a0f-3da1-471f-223f-145521e29d72',
            image: require('../assets/images/love.png')
        },
        {
            id: '58694a0f-3da1-471f-223f-1453471e29d72',
            image: require('../assets/images/life.png')
        },
        {
            id: '58694a0f-3da1-471f-223f-140271e29d72',
            image: require('../assets/images/motivational2.png')
        },
        {
            id: '58694a0f-3da1-471f-223f-1434571e29d72',
            image: require('../assets/images/life.png')
        }]
    };

    onTabPress(index) {
        this.setState({
            activeTab: index
        })
    }

    fetchUserQuoteImages() {
        return this.state.images
    }

    fetchUserTaggedImages() {
        return this.state.images
    }

    renderUserImages() {
        if (this.state.activeTab == 0) {
            images = this.fetchUserQuoteImages()
        }
        else if (this.state.activeTab == 1) {
            images = this.fetchUserTaggedImages()
        }
        return (
            <Grid style={styles.grid} items={images}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Header 
                    centerComponent={{ text: '@rlespace', style: { color: 'black', fontWeight: 'bold', fontSize: 17 } }}
                    rightComponent={{ icon: 'settings' }}
                    containerStyle={{
                        backgroundColor: 'white'
                    }}
                />
                <View style={styles.userProfile}>
                    <View style={styles.userAvatar}>
                        <Image 
                            source={require('../assets/images/motivational2.png')}
                            style={{ width: 75, height: 75, borderRadius: 37.5 }} 
                        />
                    </View>
                    <View style={styles.userStatSection}>
                        <View style={styles.userStats}>
                            <View style={{ alignItems: 'center' }}>
                                <Text>99</Text>
                                <Text style={{ fontSize: 12, color: 'black' }}>Posts</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>20.3K</Text>
                                <Text style={{ fontSize: 12, color: 'black' }}>Followers</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>3100</Text>
                                <Text style={{ fontSize: 12, color: 'black' }}>Following</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutSection}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 15 }}> 
                        Ryan Le 
                    </Text>
                    <Text style={{ fontSize: 11, paddingLeft: 15, paddingTop: 5 }}>
                        Travel | Explore | Architecture
                    </Text>
                    <Text style={{ fontSize: 11, paddingLeft: 15, paddingTop: 5}}>
                        www.rlespace.com
                    </Text>
                </View>
                <View style={styles.tabBar}>
                    <View style={{ width: '50%', borderBottomWidth: 1, borderBottomColor: this.state.activeTab == 0 ? 'black':'white'}}>
                        <TouchableOpacity onPress={() => this.onTabPress(0)}>
                            <Icon name={this.state.activeTab == 0 ? 'md-grid': 'ios-grid-outline'} size={25} style={{ textAlign: 'center' }}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', borderBottomWidth: 1, borderBottomColor: this.state.activeTab == 1 ? 'black':'white'}}>
                        <TouchableOpacity onPress={() => this.onTabPress(1)}>
                            <Icon name={this.state.activeTab == 1 ? 'md-people': 'ios-people-outline'} size={25} style={{ textAlign: 'center' }}/>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.renderUserImages()}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    userStatSection: {
        flex: 3,
        marginTop: 15
    },
    userProfile: {
        paddingTop: 10,
        flexDirection: 'row'
    },
    userAvatar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    userStats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    aboutSection: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 10,
        marginBottom: 10 
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#eae5e5',
        paddingTop: 5
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})