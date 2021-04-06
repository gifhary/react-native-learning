import React from "react";
import {
	StyleSheet, TouchableOpacity,
	View,
} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";

interface IProps {
	header: string;
	subHeader: string;
	leftHeader: string;
	leftSubHeader: string;
	rightHeader: string;
	rightSubHeader: string;
	aside?: string;
	onPress?: any;
	selected?: boolean;
}

const ProductsCard: React.FC<IProps> = (props) => {

	const {header, subHeader, leftHeader, leftSubHeader, rightHeader, rightSubHeader, aside, selected, onPress} = props;

	const renderElement = (
		<View style={[style.container]}>
			<View style={[style.cardContainer, selected ? {borderWidth: 1, borderColor: colors.navy} : null]}>
				<IndoText style={style.textStyleNavy}>{header}</IndoText>

				<View>
					<IndoText style={{fontWeight: "700", color: colors.navy}}>{subHeader}</IndoText>
				</View>
				<View style={style.cardSubHeaderContainer}>
					<View>
						<IndoText style={style.textStyleNavy}>{leftHeader}</IndoText>
						<IndoText style={style.textStyleLime}>{leftSubHeader}</IndoText>
					</View>
					<View style={{alignItems: "flex-end"}}>
						<IndoText style={style.textStyleNavy}>{rightHeader}</IndoText>
						<IndoText style={style.textStyleLime}>{rightSubHeader}</IndoText>
					</View>
				</View>
			</View>
			{aside &&
            <View style={{paddingVertical: 10}}>
                <IndoText>{aside} people invest with this product</IndoText>
            </View>
			}
		</View>
	);

	if (onPress) {
		return (
			<TouchableOpacity style={style.view} onPress={onPress} activeOpacity={0.8}>
				{renderElement}
			</TouchableOpacity>
		);
	} else {
		return (
			<View style={[style.view]}>
				{renderElement}
			</View>

		);
	}
}


ProductsCard.defaultProps = {
	selected: false,
}

const style = StyleSheet.create({
	view: {
		minHeight: 150,
		paddingHorizontal: 15,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 3,
		shadowOpacity: 0.5,
	},
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	headerText: {
		textAlign: "left",
		color: colors.white,
		fontWeight: "bold"
	},
	subHeaderText: {
		textAlign: "left",
		color: colors.white,
	},
	cardContainer: {
		backgroundColor: colors.white,
		padding: 15,
		borderRadius: 5,
		overflow: "hidden",
	},
	cardSubHeaderContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
	},
	textStyleNavy: {
		color: colors.navy,
		fontWeight: "400",
	},
	textStyleLime: {
		color: colors.lime,
		fontWeight: "400",
	},
});

export default ProductsCard;