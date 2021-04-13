import React from "react";
import {StyleSheet, TextInput, TextInputProps, View} from "react-native";
import colors from "../../theme/colors";
import indoInputStyles from "./indoInputStyles";
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";

export interface IOptionalWrappedFieldProps extends TextInputProps {
	// values from redux form's WrappedFieldProps interface made optional in scenarios where this component won't be connected to the library
	input?: WrappedFieldInputProps;
	meta?: WrappedFieldMetaProps;
}

export const IndoTextInput: React.FC<TextInputProps & IOptionalWrappedFieldProps> = (props) => {

	return (
		<View style={style.view}>
			<TextInput
				{...props}
				style={[indoInputStyles.inputBox, props.style]}
				placeholderTextColor={"rgba(0, 0, 0, 0.45)"}
				selectionColor={colors.navy}
			/>
		</View>
	);
};

// Utility to transform the component to one compatible with Redux Form interface
const RFIndoTextInput: React.FC<TextInputProps & IOptionalWrappedFieldProps> = (props) => {
	return (
		<IndoTextInput {...props as any} {...props.input}/>
	);
}

const style = StyleSheet.create({
	view: {
		width: "100%",
		paddingVertical: 10,
	}
});

export default RFIndoTextInput;