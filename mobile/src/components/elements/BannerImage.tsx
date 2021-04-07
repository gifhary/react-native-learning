import React from "react";
import {
	Image,
	ImageSourcePropType,
	StyleSheet,
	View,
} from "react-native";
import IndoText from "../IndoText";
import globalStyles from "../../theme/globalStyles";
import IndoButton from "../buttons/IndoButton";
import colors from "../../theme/colors";

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
			<View style={style.imageContainer}>
				<Image style={style.image} source={{uri: props.source}} />
			</View>
			<IndoText style={[globalStyles.h3, {paddingVertical: 15}]}>{props.subHeader}</IndoText>
			<IndoButton>{props.buttonText}</IndoButton>
		</View>
	);
}


BannerImage.defaultProps = {
	header: "Placeholder Header",
	subHeader: "Placeholder SubHeader",
	source: "https://via.placeholder.com/300",
	buttonText: "Placeholder Text"
}

const style = StyleSheet.create({
	view: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.gray,
		paddingVertical: 30,
	},
	imageContainer: {
		padding: 20,
	},
	image: {
		width: 100,
		height: 100
	}
});

export default BannerImage;