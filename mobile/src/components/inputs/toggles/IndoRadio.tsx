import React, {ReactNode} from "react";
import {StyleSheet, TouchableOpacity, View, ViewStyle} from "react-native";
import colors from "../../../theme/colors";
import IndoText from "../../IndoText";

interface IProps {
	value: boolean;
	setValue?(): void;
	children: ReactNode;
	activeOpacity?: number;
	style?: ViewStyle;
}

const IndoRadioButton: React.FC<IProps> = (props) => {

	return (
		<View style={[styles.view, props.style]}>
			<TouchableOpacity
				style={styles.touchable}
				activeOpacity={props.value ? 1 : props.activeOpacity}
				onPress={props.setValue}
			>
				<View style={styles.radio}>
					{props.value && (
						<View style={styles.radioInner}/>
					)}
				</View>

				<View>
					{typeof props.children === "string" ? <IndoText>{props.children}</IndoText> : props.children}
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
	radio: {
		width: 20,
		height: 20,
		borderRadius: 3,
		borderWidth: 1.3,
		backgroundColor: colors.navy,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	radioInner: {
		width: 14,
		height: 14,
		backgroundColor: colors.white,
	},
})

IndoRadioButton.defaultProps = {
	activeOpacity: 0.6,
};

export default IndoRadioButton;
