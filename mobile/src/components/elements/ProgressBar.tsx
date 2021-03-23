import React from "react";
import {
	StyleSheet, useWindowDimensions,
	View,
} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";

interface IProps {
	progress: number,
	total: number,
}

const ProgressBar: React.FC<IProps> = (props) => {

	const window = useWindowDimensions();
	const {progress, total} = props;

	return (
		<View style={{width: window.width, paddingHorizontal: 15}}>
			<View style={[style.view]}>
				<View style={[style.limeBar, {flex: progress / total}]}/>
			</View>
			<View style={{width: window.width}}>
				<IndoText style={style.progressText}>{Math.round((progress / total) * 100)}%</IndoText>
			</View>
		</View>
	);
}


ProgressBar.defaultProps = {}

const style = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: "row",
		height: 20,
		backgroundColor: colors.gray,
		overflow: "hidden",
		borderRadius: 5,
	},
	limeBar: {
		backgroundColor: colors.lime,
		height: 20,
	},
	progressText: {
		paddingVertical: 5,
		textAlign: "left",
	}
});

export default ProgressBar;