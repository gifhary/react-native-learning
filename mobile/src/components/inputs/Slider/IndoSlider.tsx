import React from "react";
import {
	StyleSheet, useWindowDimensions, View,
} from "react-native";
import colors from "../../../theme/colors";
import IndoText from "../../IndoText";
import Slider from "@react-native-community/slider";

interface IProps {
	min?: number;
	max?: number;
	controlledValue: number;
	setValue: any;
	valueSuffix?: string;
	label?: string;
}

const IndoSlider: React.FC<IProps> = (props) => {

	const {min, max, controlledValue, setValue, label, valueSuffix} = props;

	function setSliderValue(e: any) {
		const tempValue = Math.round(e);
		setValue(tempValue);
	}

	return (
		<>
			<View style={style.labelContainer}>
				<IndoText style={style.labelStyle}>{label}</IndoText>
			</View>
			<Slider
				{...props}
				style={style.slider}
				minimumValue={min}
				maximumValue={max}
				minimumTrackTintColor={colors.yellow}
				maximumTrackTintColor={colors.gray}
				thumbTintColor={colors.orange}
				onValueChange={setSliderValue}
			/>
			<View style={[style.valueContainer]}>
				<IndoText style={style.valueStyle}>{controlledValue} {valueSuffix}</IndoText>
			</View>
		</>
	);
}


IndoSlider.defaultProps = {
	min: 0,
	max: 100,
}

const style = StyleSheet.create({
	labelContainer: {
		alignItems: "flex-end",
		width: "100%",
	},
	labelStyle: {
		color: colors.black,
		textDecorationLine: "underline",
	},
	slider: {
		width: "100%",
		height: 40,
	},
	valueContainer: {
		alignItems: "flex-start",
		width: "100%"
	},
	valueStyle: {
		paddingLeft: 20,
	},
});

export default IndoSlider;