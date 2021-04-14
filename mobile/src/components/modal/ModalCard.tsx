import * as React from "react";
import {StyleSheet, TextStyle, View} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";
import ModalCloseButton from "./ModalCloseButton";

interface IProps {
	onClose?: () => void;
	title?: string;
	titleStyle?: TextStyle;
}

const ModalCard: React.FC<IProps> = (props) => {

	return (
		<View style={style.card}>
			<View style={style.cardHeader}>
				{props.title && (
					<IndoText style={[style.titleStyle, props.titleStyle]}>{props.title}</IndoText>
				)}
				{props.onClose && (
					<View style={style.closeButtonContainer}>
						<ModalCloseButton
							onPress={props.onClose}
							style={style.closeButton}
						/>
					</View>
				)}
			</View>

			{props.children}
		</View>
	);
};

const style = StyleSheet.create({
	card: {
		paddingHorizontal: 24,
		paddingTop: 15,
		paddingBottom: 25,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: colors.orange,
		backgroundColor: colors.white,

		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 3,
		shadowOpacity: 0.5,

		width: "100%",
	},
	cardHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	titleStyle: {
		fontWeight: "bold",
		color: colors.orange,
		fontSize: 26,
		flex: 9
	},
	closeButtonContainer: {
		flex: 1,
	},
	closeButton: {
		position: "absolute",
		top: -3,
		right: -9,
	},
});

export default ModalCard;
