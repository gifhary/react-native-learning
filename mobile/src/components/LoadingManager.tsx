import React from "react";
import {connect} from "react-redux";
import {IStore} from "../redux/defaultStore";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {getHeight, getWidth} from "../utils/getDimensions";
import colors from "../theme/colors";

interface IProps {
	loadingIncrement?: number;
}

const LoadingManager: React.FC<IProps> = (props) => {

	if (!props.loadingIncrement || props.loadingIncrement < 1) {
		return null;
	}

	return (
		<View style={style.container}>
			<ActivityIndicator
				animating={true}
				color={colors.white}
				size="small"
			/>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		height: getHeight(),
		width: getWidth(),
		backgroundColor: "rgba(0, 0, 0, 0.4)",
		zIndex: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default connect((store: IStore, props: IProps) => {
	return {
		loadingIncrement: store.metaStore.loadingIncrement,
		...props,
	}
})(LoadingManager);
