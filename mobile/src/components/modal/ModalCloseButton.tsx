import * as React from "react";
import {StyleSheet, TouchableOpacity, View, ViewStyle} from "react-native";
import IndoText from "../IndoText";
import colors from "../../theme/colors";

interface IProps {
	onPress: () => void;
	style?: ViewStyle;
}

const ModalCloseButton: React.FC<IProps> = (props) => {

	return (
		<View style={props.style}>
			<TouchableOpacity
				onPress={props.onPress}
				activeOpacity={0.7}
			>
				<IndoText style={style.orange}>X</IndoText>
			</TouchableOpacity>
		</View>
	);
};

const style = StyleSheet.create({
	orange: {color: colors.orange}
});

export default ModalCloseButton;
