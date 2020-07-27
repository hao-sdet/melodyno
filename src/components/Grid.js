import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    Dimensions,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window')
const numColumns = 3

export default class Grid extends Component {
    
    formatData = (data, numColumns) => {
        let numRows = Math.floor(data.length / numColumns);
        let numOfItemsLastRow = data.length - (numRows * numColumns);
        while(numOfItemsLastRow !== numColumns && numOfItemsLastRow !== 0) {
            data.push({ empty:true });
            numOfItemsLastRow = numOfItemsLastRow + 1;
        }
        return data;
    }

    renderItem = ({ item }) => {
        if (item.empty === true) {
            return (
                <View style={[styles.item, styles.itemInvisible]} />
            )
        }
        return (
            <View style={styles.item}>
                <Image 
                    style={styles.image}
                    source={item.image}>
                </Image>
            </View>
        )
    }

    render() {
        const { container, items } = this.props;
        return (
            <View style={container}>
                <FlatList
                    data={this.formatData(items, numColumns)}
                    renderItem={this.renderItem}
                    numColumns={numColumns}
                />
            </View>
            
        );
    }
}

Grid.propTypes = {
    container: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired
        })
    ).isRequired
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0.5,
        width: (width) / 3,
        height: (width) / 3
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    }
});