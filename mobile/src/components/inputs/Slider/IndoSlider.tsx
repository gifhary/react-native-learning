import React, {useEffect} from "react";
import Slider from '@react-native-community/slider';
import {
	StyleSheet, useWindowDimensions, View,
} from "react-native";
import colors from "../../../theme/colors";
import IndoText from "../../IndoText";

interface IProps {
	min?: number;
	max?: number;
	controlledValue: number;
	setValue: any;
	valueSuffix?: string;
	label?: string;
}

const IndoSlider: React.FC<IProps> = (props) => {

	const window = useWindowDimensions();
	const {min, max, controlledValue, setValue, label, valueSuffix} = props;

	function setSliderValue(e: any) {
		const tempValue = Math.round(e);
		setValue(tempValue);
	}

	return (
		<>
			<View style={[style.labelContainer, {width: window.width}]}>
				<IndoText style={style.labelStyle}>{label}</IndoText>
			</View>
			<Slider
				{...props}
				style={{width: (window.width - 25), height: 40}}
				minimumValue={min}
				maximumValue={max}
				minimumTrackTintColor={colors.lime}
				maximumTrackTintColor={colors.gray}
				thumbTintColor={colors.lime}
				onValueChange={setSliderValue}
			/>
			<View style={[style.valueContainer, {width: window.width}]}>
				<IndoText style={style.valueStyle}>{controlledValue}{valueSuffix}</IndoText>
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
	},
	labelStyle: {
		paddingRight: 20,
	},
	valueContainer: {
		alignItems: "flex-start",
	},
	valueStyle: {
		paddingLeft: 20,
	},
});

export default IndoSlider;