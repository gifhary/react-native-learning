import React from "react";
import {NavigationRoute} from "@react-navigation/native";
import {Image, StyleSheet, View} from "react-native";
import ProfileImage from "../../../assets/icons/Artboard_1_copy_188x.png";
import test from "../../../assets/icons/Cyan-Triangle.png";
import colors from "../../theme/colors";

interface IProps {
	route: any;
	navigation: any;
}

function getIcon(_icon?: string): any {
	switch(_icon) {
		case "DashboardHomeNavigator":
			return test;
		case "MyRocketNavigator":
		case "ProductsNavigator":
		case "MessagesNavigator":
		case "ProfileNavigator":
		default:
			return ProfileImage;
	}
}

const BottomTabIcons: React.FC<IProps> = (props) => {

	let highlight = colors.gray;
		if (props.navigation.isFocused()) {
			highlight = colors.lime;
		}

	return (
		<View style={{flex: 1, padding: 5}}>
			<View style={{justifyContent: "center", alignItems: "center", height: 20, width: 20, backgroundColor: highlight}} />
		</View>
	);
};

const style = StyleSheet.create({
	icon: {
		width: 20,
		height: 20
	},
});

export default BottomTabIcons;
