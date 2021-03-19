import React from "react";
import {StyleSheet, TextInput, TextInputProps, View} from "react-native";
import colors from "../../theme/colors";
import indoInputStyles from "./indoInputStyles";

interface IProps extends TextInputProps {

}

export const IndoTextInput: React.FC<IProps> = (props) => {

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

const style = StyleSheet.create({
	view: {
		width: "100%",
		padding: 10,
	}
});