import {SafeAreaView, Text} from "react-native";
import React from "react";
import globalStyles from "../theme/globalStyles";

const DemoPage: React.FC = () => {
	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<Text>Put components here</Text>
		</SafeAreaView>
	)
}

export default DemoPage