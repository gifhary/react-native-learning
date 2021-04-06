import React from "react";
import {
	ImageSourcePropType,
	StyleSheet, useWindowDimensions,
	View,
} from "react-native";
import IndoText from "../IndoText";
import ProfileImage from "./ProfileImage";
const image = require("../../../assets/icons/Artboard_1_copy_188x.png");

interface IProps {
	source: ImageSourcePropType;
	header: string;
	subHeader: string,
}

const OffsetImageHeader: React.FC<IProps> = (props) => {

	const {source, header, subHeader} = props;

	return (
		<View style={[style.view]}>
			<View style={style.image}>
				<ProfileImage source={source} mod={0.1}/>
			</View>
			<View style={style.body}>
				<IndoText style={style.header}>{header}</IndoText>
				<IndoText style={style.subHeader}>{subHeader}</IndoText>
			</View>
		</View>
	);
}


OffsetImageHeader.defaultProps = {
}

const style = StyleSheet.create({
	view: {
		flexDirection: "row",
		paddingVertical: 25,
		minHeight: 100,
	},
	body: {
		flexDirection: "column",
		width: "80%",
		paddingHorizontal: 15,
	},
	image: {
	},
	header: {
		textAlign: "left",
		fontWeight: "bold"
	},
	subHeader: {
		textAlign: "left",
	}
});

export default OffsetImageHeader;