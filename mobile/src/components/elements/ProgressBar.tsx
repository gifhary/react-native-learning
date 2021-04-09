import React from "react";
import {
	StyleSheet,
	View,
} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";
import LinearGradient from "react-native-linear-gradient";

interface IProps {
	progress: number,
	total: number,
}

const ProgressBar: React.FC<IProps> = (props) => {

	const {progress, total} = props;

	return (
		<View style={{width: "100%"}}>
			<View style={[style.view]}>
				<LinearGradient  style={[style.orangeBar, {flex: progress / total}]} colors={[colors.yellow, colors.orange]} />
			</View>
			<View>
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
	orangeBar: {
		height: 20,
	},
	progressText: {
		paddingVertical: 5,
		textAlign: "left",
	}
});

export default ProgressBar;