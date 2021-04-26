import React from "react";
import {
	StyleSheet, useWindowDimensions,
	View,
} from "react-native";

interface IProps {
	progress: EStepTracker,
	activeColor: string,
	inactiveColor: string,
}

export enum EStepTracker {
	START,
	MIDDLE,
	END,
}
const StepTracker: React.FC<IProps> = (props) => {

	const { progress } = props;
	const window = useWindowDimensions();

	function renderBars(progress: EStepTracker) {
		const tempArray = [];
		for (let i = 0; i <= 2; i++) {
			if (i == progress) {
				tempArray.push(<View key={i} style={[style.activeBox, { width: 35, backgroundColor: props.activeColor, borderColor: props.activeColor }]} />);
			} else {
				tempArray.push(<View key={i} style={[style.inactiveBox, { width: 8, backgroundColor: props.inactiveColor, borderColor: props.inactiveColor}]} />);
			}
		}
		return tempArray;
	}

	return (
		<View style={style.view}>
			{renderBars(progress).map(item => item)}
		</View>
	);
}


StepTracker.defaultProps = {
	progress: EStepTracker.START,
}

const style = StyleSheet.create({
	view: {
		flexDirection: "row",
		height: 15,
	},
	inactiveBox: {
		marginHorizontal: 3,
		height: 8,
		borderWidth: 1,
		borderRadius: 5,
	},
	activeBox: {
		marginHorizontal: 3,
		height: 8,
		borderWidth: 1,
		borderRadius: 5,
	}
});

export default StepTracker;