import React, {ReactNode} from "react";
import {StyleSheet, TouchableOpacity, View, ViewStyle} from "react-native";
import colors from "../../../theme/colors";
import IndoText from "../../IndoText";

interface IProps {
	value: boolean;
	children: ReactNode;
	setValue?: any;
	style?: ViewStyle;
}

const IndoCheckBox: React.FC<IProps> = (props) => {


	return (
		<View style={[styles.view, props.style]}>
			<TouchableOpacity style={styles.touchable} onPress={() => props.setValue(!props.value)} activeOpacity={0.6}>
				<View style={[styles.checkbox, {backgroundColor: props.value ? colors.navy : "transparent"}]}>
					{props.value && (
						<IndoText style={styles.check} allowFontScaling={false}>
							✓
						</IndoText>
					)}
				</View>

				<View>
					{typeof props.children === "string" ? <IndoText>{props.children}</IndoText>: props.children}
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		paddingHorizontal: 10,
		paddingVertical: 12,
	},
	touchable: {
		flexDirection: "row",
	},
	checkbox: {
		width: 20,
		height: 20,
		borderRadius: 3,
		borderWidth: 1.3,
		borderColor: colors.navy,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 13,
	},
	check: {
		fontSize: 20,
		fontWeight: "900",
		color: colors.white,
		justifyContent: "center",
		alignItems: "center",
	},
})

export default IndoCheckBox;
