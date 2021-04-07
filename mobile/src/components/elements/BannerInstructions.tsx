import React from "react";
import {
	ImageSourcePropType,
	StyleSheet,
	View,
} from "react-native";
import IndoText from "../IndoText";
import globalStyles from "../../theme/globalStyles";
import colors from "../../theme/colors";

interface IProps {
	header?: string;
	subHeader?: string;
	source?: ImageSourcePropType | any;
	buttonText?: string;
}


const BannerInstructions: React.FC<IProps> = (props) => {

	return (
		<View style={[globalStyles.pagePadding, style.view]}>
			<View style={{flexDirection: "row"}}>
				<View style={{flex: 4}}>
					<IndoText style={globalStyles.h1}>{props.header}</IndoText>
					<IndoText style={{paddingVertical: 10}}>{props.subHeader}</IndoText>
				</View>
			</View>
			{props.children}
		</View>
	);
}


BannerInstructions.defaultProps = {
	header: "",
	subHeader: "",
	buttonText: ""
}

const style = StyleSheet.create({
	view: {
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: colors.gray,
		paddingVertical: 30,
	},
});

export default BannerInstructions;