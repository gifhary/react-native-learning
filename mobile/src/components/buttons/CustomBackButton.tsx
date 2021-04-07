import React from "react";
import {
	StyleSheet,
	TextStyle,
	TouchableHighlightProps,
	ViewStyle
} from "react-native";
import IndoText from "../IndoText";
import {StackHeaderLeftButtonProps} from "@react-navigation/stack";

interface IProps extends StackHeaderLeftButtonProps{
}

const CustomBackButton: React.FC<IProps> = (props) => {

	console.log("can go back", props.canGoBack);
	return (
		<IndoText {...props} onPress={() => console.log(props)}>←</IndoText>
	);
}


CustomBackButton.defaultProps = {
	color: "cyan",
	size: "md",
};

const style = StyleSheet.create({
});

export default CustomBackButton;
