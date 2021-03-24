import React from "react";
import {
	Image, ImageSourcePropType,
	StyleSheet, TouchableOpacity, useWindowDimensions,
	View,
} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";
import chroma from "chroma-js";
import ProfileImage from "./ProfileImage";

interface IProps {
	profileImage: ImageSourcePropType;
	source: ImageSourcePropType;
	header: string;
	subHeader: string;
	labelHeader: string;
	label: string;
	subLabel: string;
	onPress?: any;
}

const AchievementCardDetailed: React.FC<IProps> = (props) => {

	const {source, profileImage, header, subHeader, labelHeader, label, subLabel, onPress} = props;
	const window = useWindowDimensions();

	return (
		<View style={[style.view, {width: window.width}]}>
			<View style={style.container}>
				<View style={[style.header]}>
					<View>
						<ProfileImage source={profileImage} mod={0.09}/>
					</View>
					<View style={{flex: 1, paddingHorizontal: 15}}>
						<IndoText style={{textAlign: "left", color: colors.white, fontWeight: "bold"}}>{header}</IndoText>
						<IndoText style={{textAlign: "left", color: colors.white}}>{subHeader}</IndoText>
					</View>
				</View>

				<View style={[style.footer]}>
					<View style={{flex: 1}}>
						<Image source={source} style={style.image}
						/>
					</View>
					<View style={{flex: 2, backgroundColor: colors.white, alignItems: "flex-start", padding: 15}}>
						<IndoText>{labelHeader}</IndoText>

						<IndoText>{label}</IndoText>
						<IndoText>{subLabel}</IndoText>
						<View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
							<IndoText>{subLabel}</IndoText>
							<IndoText>{subLabel}</IndoText>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}


AchievementCardDetailed.defaultProps = {}

const style = StyleSheet.create({
	view: {
		flex: 1,
		minHeight: 200,
		padding: 15,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 3,
		shadowOpacity: 0.5,
	},
	container: {
		width: "100%",
		height: "100%",
		borderRadius: 5,
		overflow: "hidden",
	},
	header: {
		flex: 1,
		backgroundColor: colors.lime,
		minHeight: 10,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 15,
	},
	footer: {
		flexDirection: "row",
		flex: 3,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
});

export default AchievementCardDetailed;