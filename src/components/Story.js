import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types';

export default class Story extends Component {
    render() {
        const { image, onStoryPress } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onStoryPress}>
                    <Image
                        style={styles.circle}
                        source={image}
                        isHorizontal
                    />
                </TouchableOpacity>
            </View>
        )
    }
    
}

Story.propTypes = {
    image: PropTypes.string.isRequired,
    onStoryPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 5,
        paddingEnd: 5
    },
    circle: {
        width: 70,
        height: 70,
        margin: 2,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'pink',
    },
});
