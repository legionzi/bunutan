import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
    TouchableOpacity
} from 'react-native';

class AppButton extends Component {
	static defaultProps = {
		type: 'button',
		disabled: false,
		upperCase: true
	}

	render () {
		const {
			type,
			title,
			disabled,
			disabledButtonStyle,
			disabledContainerStyle,
            onPress,
			style,
			textStyle,
			labelStyle,
			upperCase,
			resetStyle,
			children
        } = this.props;

        const {
            buttonStyle,
			buttonText,
			textButtonText
        } = styles;
    
		return (
			type == 'text' ?
			/**
			 * If prop type == text, display a text button
			 */
			<View style={disabled ? disabledContainerStyle : null}>
				<TouchableOpacity 
					onPress={onPress}
					disabled={disabled}
					style={[style, disabled ? disabledButtonStyle : null]}>
					{title && <Text style={[textButtonText, textStyle]}>{ upperCase ? title.toUpperCase(): title }</Text>}
					{children}
				</TouchableOpacity>
			</View> :
			/**
			 * Else, display a box button
			 */
			<View style={disabled ? disabledContainerStyle : null}>
				<TouchableOpacity 
					onPress={onPress}
					disabled={disabled}
					style={[resetStyle ? null : buttonStyle, style, disabled ? disabledButtonStyle : null]}>
					{title && <Text style={[buttonText, labelStyle]}>{ upperCase ? title.toUpperCase(): title }</Text>}
					{children}
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
	}
});

export { AppButton };