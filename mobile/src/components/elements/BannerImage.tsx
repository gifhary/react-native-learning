import React from "react";
import {
	ImageSourcePropType,
	StyleSheet,
	View,
} from "react-native";
import IndoText from "../IndoText";
import globalStyles from "../../theme/globalStyles";
import Svg, {Rect} from "react-native-svg";
import IndoButton from "../buttons/IndoButton";
import colors from "../../theme/colors";
const placeholderSquare = (
	<Svg width={150} height={150} viewBox="0 0 300 300">
	<Rect
		x={50}
		y={100}
		width={200}
		height={200}
		fill={colors.black}
		fillRule="evenodd"
	/>
</Svg>
);
interface IProps {
	header?: string;
	subHeader?: string;
	source?: ImageSourcePropType | any;
	buttonText?: string;
}


const BannerImage: React.FC<IProps> = (props) => {

	return (
		<View style={[globalStyles.pagePadding, style.view]}>
			<IndoText style={globalStyles.h1}>{props.header}</IndoText>
			{props.source}
			<IndoText style={[globalStyles.h3, {paddingVertical: 15}]}>{props.subHeader}</IndoText>
			<IndoButton>{props.buttonText}</IndoButton>
		</View>
	);
}


BannerImage.defaultProps = {
	header: "Placeholder Header",
	subHeader: "Placeholder SubHeader",
	source: placeholderSquare,
	buttonText: "Placeholder Text"
}

const style = StyleSheet.create({
	view: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.gray,
		paddingVertical: 30,
	},
});

export default BannerImage;