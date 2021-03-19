import React from "react";
import {
	StyleSheet,
	TextStyle,
	TouchableHighlight,
	TouchableHighlightProps,
	View,
	ViewStyle
} from "react-native";
import IndoText from "../IndoText";
import colors from "../../theme/colors";

interface IProps extends TouchableHighlightProps {
	color?: "cyan" | "outline-cyan" | "lime" | "outline-lime" | "navy" | "outline-navy" | "gray" | "outline-gray",
	viewStyle?: ViewStyle;
	textStyle?: TextStyle;
	bubble?: string;
}

const IndoButton: React.FC<IProps> = (props) => {

	let viewStyle: ViewStyle;
	let textStyle: TextStyle;
	let bubbleStyle: ViewStyle = {display: props.bubble ? "flex" : "none", left: 240 - 15};
	switch (props.color) {
		case "navy":
			viewStyle = {
				backgroundColor: colors.navy,
			};
			textStyle = {
				color: colors.white,
			};
			break;
		case "outline-navy":
			viewStyle = {
				backgroundColor: colors.white,
				borderColor: colors.navy,
				borderWidth: 1.3,
			};
			textStyle = {
				color: colors.navy,
			};
			break;
		case "cyan":
			viewStyle = {
				backgroundColor: colors.cyan,
			};
			textStyle = {
				color: colors.white,
			};
			break;
		case "outline-cyan":
			viewStyle = {
				backgroundColor: colors.white,
				borderColor: colors.cyan,
				borderWidth: 1.3,
			};
			textStyle = {
				color: colors.cyan,
			};
			break;
		case "lime":
			viewStyle = {
				backgroundColor: colors.lime,
			};
			textStyle = {
				color: colors.white,
			};
			break;
		case "outline-lime":
			viewStyle = {
				backgroundColor: colors.white,
				borderColor: colors.lime,
				borderWidth: 1.3,
			};
			textStyle = {
				color: colors.lime,
			};
			break;
		case "outline-gray":
			viewStyle = {
				backgroundColor: colors.white,
				borderColor: colors.gray,
				borderWidth: 1.3,
			};
			textStyle = {
				color: colors.black,
				opacity: 0.25,
			}
			break;
		case "gray":
		default:
			viewStyle = {
				backgroundColor: colors.gray,
			};
			textStyle = {
				color: colors.gray
			};
			break;
	}

	return(
		<TouchableHighlight {...props} style={style.touchable}>
			{typeof props.children === "string" ? (
				<View style={[style.view, viewStyle, props.disabled && {backgroundColor: colors.gray}, props.viewStyle]}>
					<IndoText style={[style.text, textStyle, props.textStyle, props.disabled && {color: colors.black, opacity: 0.25}]}>{props.children}</IndoText>
					<View style={[style.bubble, bubbleStyle]}>
						<IndoText style={style.bubbleText}>{props.bubble}</IndoText>
					</View>
				</View>
			) : (
				<React.Fragment>
					{props.children}
					<View style={[style.bubble, bubbleStyle]}>
						<IndoText style={style.bubbleText}>{props.bubble}</IndoText>
					</View>
				</React.Fragment>
			)}
		</TouchableHighlight>
	);
}


IndoButton.defaultProps = {
}

const style = StyleSheet.create({
	view: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 7,
		paddingVertical: 10,
		width: 240,
	},
	text: {
		fontWeight: "600",
	},
	touchable: {
		margin: 5,
		borderRadius: 7,
	},
	bubble: {
		backgroundColor: "lime",
		width: 30,
		height: 30,
		borderRadius: 15,
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		top: -10,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 3,
		shadowOpacity: 0.5
	},
	bubbleText: {
		fontSize: 17,
		fontWeight: "bold",
		color: colors.gray,
	}
});

export default IndoButton;