import React from "react";
import {
	Image,
	StyleSheet,
	View,
} from "react-native";
import IndoText from "../IndoText";
import globalStyles from "../../theme/globalStyles";
import colors from "../../theme/colors";

interface IProps {
	header?: string;
	amount: number;
	conditional: string;
	conditionalAmount: number;
}

const CrystalRewardElement: React.FC<IProps> = (props) => {

	return (
		<View style={style.view}>
			<IndoText style={globalStyles.h4}>{props.header ? props.header : "Obtained Crystal"}</IndoText>
			<View style={style.iconContainer}>
				<IndoText style={globalStyles.h4}>{props.amount}</IndoText>
				<Image style={style.icon} source={{uri: "https://via.placeholder.com/50"}} />
			</View>
			<IndoText><IndoText style={globalStyles.h3}>{props.conditionalAmount}</IndoText> {props.conditional}</IndoText>
		</View>
	)
}


CrystalRewardElement.defaultProps = {
}

const style = StyleSheet.create({
	view: {
		minHeight: 100,
		width: "100%",
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "space-around"
	},
	iconContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: colors.gray,
		paddingHorizontal: 10,
		paddingVertical: 5
	},
	icon: {
		width: 20,
		height: 20,
		marginLeft: 10
	},
});

export default CrystalRewardElement;