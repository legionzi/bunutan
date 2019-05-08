import React, { PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class GroupButton extends PureComponent {
    static defaultProps = {
        disabled: false,
        upperCase: true
    }

    render () {
        const {
            name,
            photo,
            onPress,
            disabled,
            resetStyle,
            style,
            labelStyle,
            upperCase,
            disabledButtonStyle
        } = this.props;

        const {
            buttonStyle,
            disabledContainerStyle,
            buttonText
        } = styles;

        return (
            <View style={ disabled ? disabledContainerStyle : null }>
                <TouchableOpacity
                    onPress={ onPress }
                    disabled={ disabled }
                    style={ [ resetStyle ? null : buttonStyle, style, disabled ? disabledButtonStyle : null ] }>
                    {name && <Text style={ [ buttonText, labelStyle ] }>{ upperCase ? name.toUpperCase(): name }</Text>}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 10,
        borderRadius: 100,
    },
    buttonText: {
        color: 'rgba(40, 40, 40, 0.9)',
        fontSize: 18,
        textAlign: 'center',
    },
    textButtonText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center'
    },
    disabledContainerStyle: {
        opacity: 0.5,
    }
});

export { GroupButton };
