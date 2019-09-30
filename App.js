/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';

const test = 'test';

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
}

const store = createStore(reducer)

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <AppNavigator />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
