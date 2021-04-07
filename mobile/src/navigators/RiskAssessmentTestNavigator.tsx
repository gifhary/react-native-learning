import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import RiskAssessmentStep1 from "../screens/riskAssessmentTest/RiskAssessmentStep1";
import RiskAssessmentStep2 from "../screens/riskAssessmentTest/RiskAssessmentStep2";
import RiskAssessmentResults from "../screens/riskAssessmentTest/RiskAssessmentResults";
import RiskAssessmentRecommendations from "../screens/riskAssessmentTest/RiskAssessmentRecommendations";
import IndoText from "../components/IndoText";
import globalStyles from "../theme/globalStyles";

const RiskAssessmentStack = createStackNavigator();

const RiskAssessmentTestNavigator: React.FC = () => {

	return (
		<RiskAssessmentStack.Navigator
			screenOptions={{
				headerShown: true,
			}}
			initialRouteName="RiskAssessmentStep1"
		>
			<RiskAssessmentStack.Screen
				name="RiskAssessmentStep1"
				component={RiskAssessmentStep1}
				options={{
					headerTitle: () => <IndoText style={globalStyles.h1}>What is your Risk?</IndoText>
				}}
			/>

			<RiskAssessmentStack.Screen
				name="RiskAssessmentStep2"
				component={RiskAssessmentStep2}
			/>

			<RiskAssessmentStack.Screen
				name="RiskAssessmentResults"
				component={RiskAssessmentResults}
			/>

			<RiskAssessmentStack.Screen
				name="RiskAssessmentRecommendations"
				component={RiskAssessmentRecommendations}
			/>
		</RiskAssessmentStack.Navigator>
	);
}

export default RiskAssessmentTestNavigator;
