import React, { Component } from 'react';
import {
    ActivityIndicator,
    // AsyncStorage,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout((() => {
            this._authenticateAsync();
        }).bind(this), 500);
    }

    _authenticateAsync = async () => {
        const user = null
        this.props.navigation.navigate(user ? 'Main' : 'LogIn')
    }

    render() {
        const { container } = styles;

        return (
            <View style={container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
