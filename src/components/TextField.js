import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text
} from 'react-native';

class TextField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    static defaultProps = {
        placeholder: "",
        width: {
            flex: 1
        },
        returnKeyType: "done",
        blurOnSubmit: true,
        editable: true,
        autoCapitalize: "sentences",
        keyboardType: "default",
    }

    handleOnChangeText(text) {
        this.setState({ text });
        this.props.onChangeText(text);
    }

    handleOnEndEdit() {
        if (this.props.onEndEditing) {
            this.props.onEndEditing();
        }
    }

    handleOnBlur() {
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    }

    handleSubmitEdit() {
        if (this.props.onSubmitEditing) {
            this.props.onSubmitEditing();
        }
    }

    focusTextInput() {
        this.textInput.focus();
    }

    render() {
        const {
            mainContainer,
            textInput,
            invalidInput,
            disabledInput,
            textLabel,
            remarksContainer,
            errorTextStyle
        } = textFieldStyle;

        const {
            label,
            placeholder,
            value,
            blurOnSubmit,
            onChangeText,
            editable,
            autoCapitalize,
            keyboardType,
            secureTextEntry,
            returnKeyType,
            errorText
        } = this.props;

        const maxLength = 64;

        return (
            <View style={mainContainer}>
                {label &&
                    <Text style={textLabel}>{label}</Text>
                }
                
                <TextInput
                    style={[textInput, errorText ? invalidInput : null, !editable ? disabledInput : null]}
                    value={value}
                    onChangeText={onChangeText}
                    onEndEditing={() => this.handleOnEndEdit()}
                    onBlur={() => this.handleOnBlur()}
                    placeholder={placeholder}
                    editable={editable}
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    secureTextEntry={secureTextEntry}
                    underlineColorAndroid='transparent'
                    returnKeyType={returnKeyType}
                    blurOnSubmit={blurOnSubmit}
                    onSubmitEditing={() => this.handleSubmitEdit()}
                    ref={(ref) => this.textInput = ref}/>

                <View style={remarksContainer}>
                    {errorText &&
                        <Text style={errorTextStyle}>{errorText}</Text>
                    }
                </View>
            </View>
        );
    }
}

const textFieldStyle = StyleSheet.create({
    mainContainer: {
        marginBottom: 10,
        // backgroundColor: 'red'
    },
    textInput: {
        // backgroundColor: SWATCH.WHITE_1,
        // borderColor: SWATCH.SILVER,
        // borderWidth: 1,
        color: 'rgba(40, 40, 40, 0.9)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        fontSize: 15,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 100,
        
        // color: SWATCH.MAKO_GRAY
    },
    textLabel: {

    },
    errorTextStyle: {

    },
    remarksContainer: {

    },
    invalidInput: {

    },
    disabledInput: {

    }
});

export { TextField };