import React from "react";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const RiskAssessmentRecommendations: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Risk Assessment Recommendations</IndoText>
		</SafeAreaView>
	);
};

export default RiskAssessmentRecommendations;
