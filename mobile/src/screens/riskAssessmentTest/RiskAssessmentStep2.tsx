import React from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const RiskAssessmentStep2: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Risk Assessment Step 2</IndoText>
		</SafeAreaView>
	);
};

export default RiskAssessmentStep2;
