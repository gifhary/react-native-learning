import React from "react";
import {StyleSheet, View} from "react-native";
const ProfileImage = require("../../../assets/icons/Artboard_1_copy_188x.png");
const test = require("../../../assets/icons/Cyan-Triangle.png");
import colors from "../../theme/colors";
import Svg, {Rect} from "react-native-svg";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
	route: any;
	navigation: StackNavigationProp<any>;
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
			highlight = colors.orange;
		}

	return (
		<View style={{flex: 1, padding: 5}}>
			<View style={[style.imageContainer]} >
				<Svg width={100} height={100} viewBox="0 0 300 300">
					<Rect
						x={100}
						y={125}
						width={100}
						height={50}
						fill={highlight}
						fillRule="evenodd"
					/>
				</Svg>
			</View>

		</View>
	);
};

const style = StyleSheet.create({
	imageContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: 20,
		width: 20,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	}
});

export default BottomTabIcons;
