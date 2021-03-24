import React from "react";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const GoalsStep3: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Goals Step 3</IndoText>
		</SafeAreaView>
	);
};

export default GoalsStep3;
