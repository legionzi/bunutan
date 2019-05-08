import React, { Component } from 'react';
import {
    Image,
    FlatList,
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
// import {
//     Font
// } from 'expo';
import { GroupButton } from '../components';
import backgroundImage from '../assets/images/groups-bg-1.png';

export default class HomeScreen extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            animationValue: new Animated.Value(-18),
            isAnimationFinished: false,
            fontLoaded: false
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

    async componentDidMount() {
        // await Font.loadAsync({
        //     'merry-christmas-flake': require('../assets/fonts/MerryChristmasFlake.ttf')
        // });

        this.setState({ fontLoaded: true });
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
        ).start(( o ) => {
            if ( o.finished ) {
                this.state.animationValue.setValue( -18 );

                if ( this.state.isAnimationFinished ) {
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
        this.state.animationValue.setValue( -18 );
        this.setState({ isAnimationFinished: false });

        this.runAnimation();
        this.setFinishTimeout();
    }

    setFinishTimeout() {
        setTimeout(() => {
            this.setState({ isAnimationFinished: true })
        }, 5000 );
    }

    render() {
        const {
            backgroundContainer,
            container,
            scrollContainer,
            scrollContentContainer,
            namesContainer,
            nameText
        } = styles;

        return (
            <ImageBackground
                style={backgroundContainer}
                resizeMode='cover'
                // source={ backgroundImage }
            >
                <View style={container}>
                    <FlatList
                        style={scrollContainer}
                        contentContainerStyle={scrollContentContainer}
                        data={groupData}
                        renderItem={({item}) => (
                            <GroupButton
                                name={item.name}
                                photo={item.photo}
                                onPress={() => { return null; }}/>
                        )}/>

                    {/* <View style={styles.tabBarInfoContainer}>
                        <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

                        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
                        </View>
                    </View> */}
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    scrollContainer: {
        flex: 1,
        // backgroundColor: 'red',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    scrollContentContainer: {
        paddingTop: 30,
        flex: 1,
        // backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    namesContainer: {
        height: 50,
        backgroundColor: 'blue',
        justifyContent: "space-between"
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    nameText: {
        fontSize: 25,
        color: 'white',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

const groupData = [
    {
        key: "1",
        name: "Lingsat Christmas Party",
        photo: "https://vignette.wikia.nocookie.net/nintendo/images/d/dd/Boulder_Badge.png/revision/latest?cb=20111015172933&path-prefix=en"
    }, {
        key: "2",
        name: "Lalala Christmas Party",
        photo: "https://vignette.wikia.nocookie.net/nintendo/images/9/9c/Cascade_Badge.png/revision/latest?cb=20111015172933&path-prefix=en"
    }, {
        key: "3",
        name: "Hooraah Christmas Party",
        photo: "https://vignette.wikia.nocookie.net/nintendo/images/a/a6/Thunder_Badge.png/revision/latest?cb=20111015173129&path-prefix=en"
    }
]
