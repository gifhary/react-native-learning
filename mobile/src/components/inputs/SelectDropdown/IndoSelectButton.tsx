import React, {useEffect, useRef} from "react";
import {StyleSheet, View, TouchableOpacity, TouchableOpacityProps, Animated, Easing, Image} from "react-native";
import colors from "../../../theme/colors";
import IndoText from "../../IndoText";
const test = require("../../../../assets/icons/Artboard_1_copy_188x.png");

interface IProps extends TouchableOpacityProps {
	placeholder?: string,
	value?: any,
	staticPlaceholder?: boolean;
	open?: boolean;
}

export const IndoSelectButton: React.FC<IProps> = (props) => {

	const {placeholder, staticPlaceholder, value, open} = props;

	const rotation = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(rotation, {
			toValue: open === true ? 1 : 0,
			duration: 100,
			easing: Easing.linear,
			useNativeDriver: true,
		}).start();
	}, [open]);

	const spin = rotation.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "180deg"],
	});

	return (
		<TouchableOpacity {...props} style={style.view} activeOpacity={0.8}>
			<View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
				<IndoText style={{opacity: value && value.length > 0 ? 1 : 0.5}}>
					{staticPlaceholder ? placeholder : value && (value.length > 0 ? value[0].label : placeholder)}
				</IndoText>
				<Animated.Image style={[{
					transform: [{ rotate: spin}],
					width: 20,
					height: 20,
				}]}
				source={test} />
			</View>
		</TouchableOpacity>
	);
};

IndoSelectButton.defaultProps = {
	placeholder: "Select Option",
	staticPlaceholder: false,
	open: false,
};

const style = StyleSheet.create({
	view: {
		width: "100%",
		paddingHorizontal: 10,
		paddingVertical: 12,
		borderWidth: 1.3,
		borderRadius: 5,
		backgroundColor: colors.white,
	},
});