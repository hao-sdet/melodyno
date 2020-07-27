import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import ExploreContainer from '../containers/ExploreContainer';
import HomeContainer from '../containers/HomeContainer';
import AddContainer from '../containers/AddContainer';
import ProfileContainer from '../containers/ProfileContainer';
import NotificationContainer from '../containers/NotificationContainer';

const CustomTabBarIcon = (name, size) => {
    const icon = ({ tintColor }) => (
        <Icon
            name={name}
            size={size}
            color={tintColor}
        />
    );

    icon.propTypes = {
        tintColor: PropTypes.string.isRequired,
    };

    return icon;
};

const TabStackNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeContainer,
        navigationOptions: {
            tabBarIcon: CustomTabBarIcon('ios-home', 25),
        },
    },
    Explore: {
        screen: ExploreContainer,
        navigationOptions: {
            tabBarIcon: CustomTabBarIcon('ios-search', 25),
        },
    },
    Add: {
        screen: AddContainer,
        navigationOptions: {
            tabBarIcon: CustomTabBarIcon('ios-add-circle', 30),
        },
    },
    Notification: {
        screen: NotificationContainer,
        navigationOptions: {
            tabBarIcon: CustomTabBarIcon('ios-notifications', 25),
        },
    },
    Profile: {
        screen: ProfileContainer,
        navigationOptions: {
            tabBarIcon: CustomTabBarIcon('ios-person', 25),
        },
    },
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        showLabel: false,
        showIcon: true
    },
    tabBarPosition: 'bottom',
});

export default createAppContainer(TabStackNavigator);
  