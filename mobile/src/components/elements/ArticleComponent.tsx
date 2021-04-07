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
	source?: ImageSourcePropType | any;
	buttonText?: string;
}


const ArticleComponent: React.FC<IProps> = (props) => {

	return (
		<View style={[globalStyles.pagePadding, style.view]}>
			<View style={{flex: 1}}>
				<View style={{width: 50, height: 50, backgroundColor: colors.cyan}} />
			</View>
			<View style={{flex: 4}}>
				<IndoText style={globalStyles.h3}>{props.header}</IndoText>
				<IndoText style={{paddingVertical: 10}}>{props.buttonText}</IndoText>
			</View>
		</View>
	);
}


ArticleComponent.defaultProps = {
	header: "Placeholder Header",
	subHeader: "Placeholder SubHeader",
	source: placeholderSquare,
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
});

export default ArticleComponent;