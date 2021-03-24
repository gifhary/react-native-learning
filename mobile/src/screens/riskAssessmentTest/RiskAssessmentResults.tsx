import React from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const RiskAssessmentResults: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Risk Assessment Results</IndoText>
		</SafeAreaView>
	);
};

export default RiskAssessmentResults;
