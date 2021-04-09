import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import WelcomeWalkthroughNavigator from "./WelcomeWalkthroughNavigator";
import KYCApplicationProcessNavigator from "./KYCApplicationProcessNavigator";
import RiskAssessmentTestNavigator from "./RiskAssessmentTestNavigator";
import InvestmentFlowNavigator from "./InvestmentFlowNavigator";

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator: React.FC = () => {

	return (
		<AuthenticationStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="WelcomeWalkthroughNavigator"

		>
			<AuthenticationStack.Screen
				name="WelcomeWalkthroughNavigator"
				component={WelcomeWalkthroughNavigator}
			/>

			<AuthenticationStack.Screen
				name="KYCApplicationProcessNavigator"
				component={KYCApplicationProcessNavigator}
			/>

			<AuthenticationStack.Screen
				name="RiskAssessmentTestNavigator"
				component={RiskAssessmentTestNavigator}
			/>

			<AuthenticationStack.Screen
				name="InvestmentFlowNavigator"
				component={InvestmentFlowNavigator}
			/>
		</AuthenticationStack.Navigator>
	);
};

export default AuthenticationNavigator;
