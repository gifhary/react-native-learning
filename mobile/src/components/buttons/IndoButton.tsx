import React from "react";
import {
	Pressable,
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
	color?: "yellow" | "outline-yellow" | "lime" | "outline-lime" | "orange" | "outline-orange" | "gray" | "outline-gray",
	viewStyle?: ViewStyle,
	textStyle?: TextStyle,
	bubble?: string,
	size?: "sm" | "md" | string,
}

const IndoButton: React.FC<IProps> = (props) => {

	let viewStyle: ViewStyle;
	let textStyle: TextStyle;
	let bubbleStyle: ViewStyle = {display: props.bubble ? "flex" : "none", left: 240 - 15};
	switch (props.color) {
		case "orange":
			viewStyle = {
				backgroundColor: colors.orange,
			};
			textStyle = {
				color: colors.white,
			};
			break;
		case "outline-orange":
			viewStyle = {
				backgroundColor: colors.white,
				borderColor: colors.orange,
				borderWidth: 1.3,
			};
			textStyle = {
				color: colors.orange,
			};
			break;
		case "yellow":
			viewStyle = {
				backgroundColor: colors.yellow,
			};
			textStyle = {
				color: colors.white,
			};
			break;
		case "outline-yellow":
			viewStyle = {
				backgroundColor: colors.white,
				borderColor: colors.yellow,
				borderWidth: 1.3,
			};
			textStyle = {
				color: colors.yellow,
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
			viewStyle = {
				backgroundColor: colors.gray,
			};
			textStyle = {
				color: colors.gray
			};
			break;
		default:
			viewStyle = {
				backgroundColor: colors.orange,
			};
			textStyle = {
				color: colors.white
			};
			break;
	}

	return (
		<Pressable {...props} style={[style.touchable, props.style, {width: (props.size === "sm" || props.size === "md") ? (props.size === "sm" ? 180 : 240) : props.size}]}>
			{typeof props.children === "string" ? (
				<View
					style={[style.view, viewStyle, props.disabled && {backgroundColor: colors.gray}, props.viewStyle]}>
					<IndoText style={[style.text, textStyle, props.textStyle, props.disabled && {
						color: colors.black,
						opacity: 0.25
					}]}>{props.children}</IndoText>
					{typeof props.bubble !== "undefined" &&
                    <View style={[style.bubble, bubbleStyle]}>
                        <IndoText style={style.bubbleText}>{props.bubble}</IndoText>
                    </View>
					}
				</View>
			) : (
				<React.Fragment>
					{props.children}
					{typeof props.bubble !== "undefined" &&
                    <View style={[style.bubble, bubbleStyle]}>
                        <IndoText style={style.bubbleText}>{props.bubble}</IndoText>
                    </View>
					}
				</React.Fragment>
			)}
		</Pressable>
	);
}


IndoButton.defaultProps = {
	color: "orange",
	size: "md",
};

const style = StyleSheet.create({
	view: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 7,
		paddingVertical: 10,
	},
	text: {
		fontWeight: "600",
	},
	touchable: {
		padding: 5,
		borderRadius: 7,
	},
	bubble: {
		backgroundColor: "orange",
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
	},
});

export default IndoButton;
