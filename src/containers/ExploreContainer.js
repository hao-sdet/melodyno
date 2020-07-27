import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    SafeAreaView
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import CategoryBar from '../components/CategoryBar';

const { height, width } = Dimensions.get('window')

export default class ExploreContainer extends Component {
    
    state = {
        search: '',
        categories: [{
            id: 'bd7acbea-c1b1-46c2-435g-3ad53abb28ba',
            image: require('../assets/images/love.png'),
            text: 'Motivational',
        },
        {
            id: '3ac68afc-c605-48d3-234g-fbd91aa97f63',
            image: require('../assets/images/motivational.png'),
            text: 'Life',
        },
        {
            id: '58694a0f-3da1-471f-233f-145571e29d72',
            image: require('../assets/images/life.png'),
            text: 'Love'
        }]
    };
    
    updateSearch = (search) => {
        this.setState({ search });
    };
 
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SearchBar
                    placeholder='Search Melodyno'
                    round={true}
                    searchIcon={{ size: 20 }}
                    platform='ios'
                    containerStyle={styles.searchBar}
                />
                <ScrollView>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal:10 }}>
                            What can we help you find, Ryan?
                        </Text>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <CategoryBar items={this.state.categories}/>
                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                            <Text style={styles.bigText}>
                                Relationship
                            </Text>
                            <Text style={styles.quote}>
                                A perfect relationship is not perfect, it's just that both people never give up.
                            </Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require('../assets/images/relationship.png')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    searchBar: {
        height: 50,
        width: '100%',
        backgroundColor: 'white'
    },
    bigText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    quote: {
        fontWeight: '300',
        marginTop: 5,
        marginBottom: 10,
        fontStyle: 'italic'
    },
    imageContainer: {
        width: (width) - 20, 
        height: 280,
        marginTop: 10,
        marginLeft: 10
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        borderRadius: 5,
        resizeMode: 'cover',

    }
});