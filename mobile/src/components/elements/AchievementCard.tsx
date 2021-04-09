import React from "react";
import {
	Image, ImageSourcePropType,
	StyleSheet, TouchableOpacity, useWindowDimensions,
	View,
} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";
const chroma = require("chroma-js");

interface IProps {
	source: ImageSourcePropType;
	label: string;
	onPress?: any;
}

const AchievementCard: React.FC<IProps> = (props) => {

	const {source, label, onPress} = props;
	const window = useWindowDimensions();

	if (onPress) {
		return (
			<TouchableOpacity style={[style.view, {width: window.width / 2.3}]} onPress={onPress} activeOpacity={0.8}>
				<Image source={source}
					   style={[style.image]}
				/>
				<View style={[style.header]}>
					<IndoText style={{textAlign: "center", color: colors.white}}>{label}</IndoText>
				</View>
			</TouchableOpacity>
		);
	} else {

		return (
			<View style={[style.view, {width: window.width / 2.3}]}>
			<Image source={source}
				   style={[style.image]}
			/>
			<View style={[style.header]}>
				<IndoText style={{textAlign: "center", color: colors.white}}>{label}</IndoText>
			</View>
		</View>
		);
	}
}


AchievementCard.defaultProps = {}

const style = StyleSheet.create({
	view: {
		height: 200,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.black,
		overflow: "hidden",
		borderRadius: 5,
	},
	header: {
		flex: 1,
		alignSelf: "flex-end",
		backgroundColor: `${chroma(colors.yellow).alpha(0.6)}`,
		minHeight: 55,
		padding: 15,
		position: "absolute",
		left: 0,
		right: 0,
	},
	image: {
		flex: 1,
		height: "100%",
		resizeMode: 'cover',
	},
});

export default AchievementCard;