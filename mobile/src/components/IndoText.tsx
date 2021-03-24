import React from "react";
import {StyleSheet, TextProps, Text} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import { isNil, cloneDeep } from "lodash";

interface IProps extends TextProps {
	autoScaleFontSize?: boolean;
}


function findFontSize(anyStyleProp: any): number | string | void {

	if (isNil(anyStyleProp)) {
		return;
	}

	if (typeof anyStyleProp["fontSize"] === "number") {
		return anyStyleProp["fontSize"];
	}

	if (Array.isArray(anyStyleProp)) {
		// iterate backwards to get the highest priority one
		for (const style of [...anyStyleProp].reverse()) {
			const v =  findFontSize(style);
			if (typeof v === "number") {
				return v;
			}
		}
	}

}

const IndoText: React.FC<IProps> = (props) => {

	let _style = cloneDeep([style.text, props.style])

	if (props.autoScaleFontSize) {
		let fontSize = findFontSize(props.style);

		if (isNil(fontSize)) {
			fontSize = RFValue(16, 896);
		} else if (typeof fontSize === "number") {
			fontSize = RFValue(fontSize, 896);
		}

		// @ts-ignore
		_style.push({fontSize}); // iphone xs max
	}

	return <Text {...props} style={_style}>{props.children}</Text>
};


IndoText.defaultProps = {
	autoScaleFontSize: true,
}

const style = StyleSheet.create({
	text: {
		fontFamily: "Titillium Web",
		fontSize: 16,
		fontWeight: "600",
		textAlign: "center",
	},
});

export default IndoText;