import React, { Component, useState } from 'react';
import { 
    View,
    StyleSheet
} from 'react-native';

import Tab from '../components/Tab';

const TabBar = (props) => {
    const {
        navigation,
        activeTintColor, 
        inactiveTintColor 
    } = props;
    const {routes, index: activeRouteIndex} = navigation.state;
    return (
        <View style={styles.tabContainer}>
            {routes.map((route, routeIndex) => {
                const isRouteActive = routeIndex === activeRouteIndex;
                const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
                return (
                    <Tab
                        label={route.routeName}
                        tintColor={tintColor}
                        isActive={isRouteActive}
                        onPress={() => navigation.navigate(route.routeName)}
                    />
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
      backgroundColor: 'white',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 10,
      alignItems: 'center',
      height: 40
    },
    slider: {
        height: 5,
        position: "absolute",
        top: 0,
        left: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
      }
});

export default TabBar;


