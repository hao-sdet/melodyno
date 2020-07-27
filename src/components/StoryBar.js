import React, { Component } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import Story from '../components/Story';

export default class StoryBar extends Component {

    renderStory = ({ item: { id, image } }) => {
        return (
            <Story
                image={image}
                onStoryPress={() => null}
            />
        );
    }

    render() {
        const { container, items } = this.props;
        return (
            <View style={container}>
                <FlatList
                    data={items}
                    renderItem={this.renderStory}
                    horizontal={true}
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

StoryBar.propTypes = {
    container: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired
        })
    ).isRequired
};
