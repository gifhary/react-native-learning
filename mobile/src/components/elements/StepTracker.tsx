import React from "react";
import {
	StyleSheet, useWindowDimensions,
	View,
} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";

interface IProps {
	progress: EStepTracker,
}

export enum EStepTracker {
	START,
	MIDDLE,
	END,
}
const StepTracker: React.FC<IProps> = (props) => {

	const window = useWindowDimensions();

	function progressElement() {
		const renderItem = <View style={[style.limeBox, {width: window.width / 3}]} />;
		const renderArray = []
		switch (props.progress) {
			case EStepTracker.END:
				renderArray.push(renderItem);
			case EStepTracker.MIDDLE:
				renderArray.push(renderItem);
			case EStepTracker.START:
				renderArray.push(renderItem);
				break;
			default:
				return <View/>;

		}
		return renderArray.map(item => item);
	}

	return (
		<View style={style.view}>
			{progressElement}
		</View>
	);
}


StepTracker.defaultProps = {
	progress: EStepTracker.START,
}

const style = StyleSheet.create({
	view: {
		flexDirection: "row",
	},
	limeBox: {
		marginHorizontal: 5,
		backgroundColor: colors.lime,
		height: 2,
		borderWidth: 1,
		borderColor: colors.lime,
		borderRadius: 5,
	}
});

export default StepTracker;