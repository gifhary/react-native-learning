import React from "react";
import {TextProps, TextStyle} from "react-native";
import IndoText from "../IndoText";
import indoInputStyles from "./indoInputStyles";

const IndoLabel: React.FC<TextProps> = (props) => {
	return <IndoText {...props} style={[indoInputStyles.label as TextStyle, props.style]}>{props.children}</IndoText>;
}

export default IndoLabel;
