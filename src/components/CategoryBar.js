import React, { Component } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import Category from './Category';

export default class CategoryBar extends Component {

    renderItem = ({ item: { id, image, text } }) => {
        return (
            <Category
                image={image}
                text={text}
                onCategoryPress={() => null}
            />
        );
    }

    render() {
        const { container, items } = this.props;
        return (
            <View style={container}>
                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    horizontal={true}
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

CategoryBar.propTypes = {
    container: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
};
