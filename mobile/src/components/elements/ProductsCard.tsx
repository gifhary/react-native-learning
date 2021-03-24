import React from "react";
import {
	StyleSheet, TouchableOpacity, useWindowDimensions,
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
	onPress?: any;
}

const ProductsCard: React.FC<IProps> = (props) => {

	const {header, subHeader, leftHeader, leftSubHeader, rightHeader, rightSubHeader, onPress} = props;
	const window = useWindowDimensions();

	const renderElement = (
		<View style={style.container}>
			<View style={[style.footer]}>
				<View style={{flex: 1, backgroundColor: colors.white, alignItems: "flex-start", padding: 15}}>
					<IndoText style={{fontWeight: "400", color: colors.navy}}>{header}</IndoText>

					<View style={{alignItems: "flex-start", paddingVertical: 2}}>
						<IndoText style={{fontWeight: "700", color: colors.navy}}>{subHeader}</IndoText>
					</View>
					<View style={{
						paddingVertical: 2,
						flexDirection: "row",
						width: "100%",
						justifyContent: "space-between"
					}}>
						<View style={{alignItems: "flex-start"}}>
							<IndoText style={{color: colors.navy, fontWeight: "400"}}>{leftHeader}</IndoText>
							<IndoText style={{color: colors.lime, fontWeight: "400"}}>{leftSubHeader}</IndoText>
						</View>
						<View style={{alignItems: "flex-end"}}>
							<IndoText style={{color: colors.navy, fontWeight: "400"}}>{rightHeader}</IndoText>
							<IndoText
								style={{color: colors.lime, fontWeight: "400"}}>{rightSubHeader}</IndoText>
						</View>
					</View>
				</View>
			</View>
		</View>
	);

	if (onPress) {
		return (
			<TouchableOpacity style={[style.view, {width: window.width}]} onPress={onPress} activeOpacity={0.8}>
				{renderElement}
			</TouchableOpacity>
		);
	} else {
		return (
			<View style={[style.view, {width: window.width}]}>
				{renderElement}
			</View>
		);
	}
}


ProductsCard.defaultProps = {}

const style = StyleSheet.create({
	view: {
		flex: 1,
		minHeight: 150,
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
	headerText: {
		textAlign: "left",
		color: colors.white,
		fontWeight: "bold"
	},
	subHeaderText: {
		textAlign: "left",
		color: colors.white,
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

export default ProductsCard;