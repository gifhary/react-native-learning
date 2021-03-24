import React from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const KYCApplicationStep1: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>KYC Step 1</IndoText>
		</SafeAreaView>
	);
};

export default KYCApplicationStep1;
