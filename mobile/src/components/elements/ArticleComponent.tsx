import React from "react";
import {
	Image,
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
		x={0}
		y={0}
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
	source?: string;
	buttonText?: string;
}


const ArticleComponent: React.FC<IProps> = (props) => {

	return (
		<View style={[globalStyles.pagePadding, style.view]}>
			<View style={style.imageContainer}>
				<Image style={style.image} source={{uri: props.source}} />
			</View>
			<View style={style.body}>
				<IndoText style={globalStyles.h3}>{props.header}</IndoText>
				<IndoText style={{paddingVertical: 10}}>{props.buttonText}</IndoText>
			</View>
		</View>
	);
}


ArticleComponent.defaultProps = {
	header: "Placeholder Header",
	subHeader: "Placeholder SubHeader",
	source: "https://via.placeholder.com/300",
	buttonText: "Placeholder Text"
}

const style = StyleSheet.create({
	view: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: colors.gray,
		paddingVertical: 30,
	},
	imageContainer: {
		flex: 1,
		maxHeight: 100,
		paddingRight: 25
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain"
	},
	body: {
		flex: 4,
	}
});

export default ArticleComponent;