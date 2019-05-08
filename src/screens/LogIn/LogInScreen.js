import React, { Component } from 'react';
import {
    // AsyncStorage,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Easing,
    ImageBackground
} from 'react-native';
import { TextField, AppButton } from '../../components';
import backgroundImage from '../../assets/images/login_screen_bg.png';

export default class LogInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animationValue: new Animated.Value(-18),
            isAnimationFinished: false
        };

        this.default = {
            toValue: 60,
            duration: 200
        };
        this.slow = {
            toValue: 15,
            duration: 2000
        };
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this.runAnimation();
        this.setFinishTimeout();
    }

    runAnimation() {
        Animated.timing(
            this.state.animationValue,
            {
                toValue: this.default.toValue,
                duration: this.default.duration,
                easing: Easing.linear()
            }
        ).start((o) => {
            if (o.finished) {
                this.state.animationValue.setValue(-18);

                if (this.state.isAnimationFinished) {
                    this.runSlowAnimation();
                } else {
                    this.runAnimation();
                }
            }
        });
    }

    runSlowAnimation() {
        Animated.timing(
            this.state.animationValue,
            {
                toValue: this.slow.toValue,
                duration: this.slow.duration,
                easing: Easing.linear()
            }
        ).start();
    }

    restartAnimation() {
        this.state.animationValue.setValue(-18);
        this.setState({ isAnimationFinished: false });

        this.runAnimation();
        this.setFinishTimeout();
    }

    setFinishTimeout() {
        setTimeout(() => {
            this.setState({ isAnimationFinished: true })
        }, 5000);
    }

    onLogIn = () => {
        const user = {
            first_name: 'test',
            last_name: 'test'
        };

        // await AsyncStorage.setItem('user', JSON.stringify(user));
        this.props.navigation.navigate('Main');
    }

    render() {
        const {
            backgroundContainer,
            mainContainer,
            imageLogoContainer,
            imageLogo,
            formContainer,
            button,
            buttonLabel
        } = styles;

        return (
            <ImageBackground
                style={ backgroundContainer }
                resizeMode='cover'
                // source={ backgroundImage }
            >
                <View style={ mainContainer }>
                    <View style={ imageLogoContainer }>
                        <Image
                            style={ imageLogo }
                            resizeMode='cover'
                            // source={ require('../../assets/images/login_screen_logo.png') }
                        />
                    </View>
                    <View style={ formContainer }>
                        <TextField
                            placeholder='Username or Email'
                            autoCapitalize='none' />
                        <TextField
                            secureTextEntry
                            placeholder='Password'
                            autoCapitalize='none' />
                        <AppButton
                            title='Log In'
                            onPress={ this.onLogIn }
                            upperCase={ false }
                            labelStyle={ buttonLabel }
                            style={ button } />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    mainContainer: {
        flex: 1,
        position: 'relative'
    },
    imageLogoContainer: {
        flex: 1,
        // marginTop: -100,
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        position: 'absolute'
        // backgroundColor: 'red'
    },
    imageLogo: {
        flex: 1,
        marginTop: -200,
        width: '100%',
    },
    formContainer: {
        flex: 1,
        // backgroundColor: 'green',
        // opacity: 0.7,
        marginTop: -30,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    button: {
        backgroundColor: '#daa400',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    buttonLabel: {
        color: '#724600'
    }
});
