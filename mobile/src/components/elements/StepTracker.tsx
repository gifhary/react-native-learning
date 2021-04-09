import React from "react";
import {
	StyleSheet, useWindowDimensions,
	View,
} from "react-native";
import colors from "../../theme/colors";

interface IProps {
	progress: EStepTracker,
}

export enum EStepTracker {
	START ,
	MIDDLE,
	END,
}
const StepTracker: React.FC<IProps> = (props) => {

	const {progress} = props;
	const window = useWindowDimensions();

	function renderBars(progress: EStepTracker) {
		const tempArray = [];
		for (let i = 0; i <= 2; i++) {
			if (i <= progress) {
				tempArray.push(<View key={i} style={[style.orangeBox, {width: (window.width / 3 - 15)}]} />);
			} else {
				tempArray.push(<View key={i} style={[style.grayBox, {width: (window.width / 3 - 15)}]} />);
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
	grayBox: {
		marginHorizontal: 5,
		backgroundColor: colors.gray,
		height: 3,
		borderWidth: 1,
		borderColor: colors.gray,
		borderRadius: 5,
	},
	orangeBox: {
		marginHorizontal: 5,
		backgroundColor: colors.yellow,
		height: 3,
		borderWidth: 1,
		borderColor: colors.yellow,
		borderRadius: 5,
	}
});

export default StepTracker;