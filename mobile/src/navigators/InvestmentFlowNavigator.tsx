import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import PaymentMethod from "../screens/investmentFlow/PaymentMethod";
import AmountToInvest from "../screens/investmentFlow/AmountToInvest";
import SelectAccount from "../screens/investmentFlow/SelectAccount";
import ReviewDetails from "../screens/investmentFlow/ReviewDetails";
import InvestmentSuccess from "../screens/investmentFlow/InvestmentSuccess";
import colors from "../theme/colors";

const InvestmentFlowStack = createStackNavigator();

const InvestmentFlowNavigator: React.FC = () => {

	return (
		<InvestmentFlowStack.Navigator
			screenOptions={{
				headerShown: true,
			}}
			initialRouteName="PaymentMethod"
		>
			<InvestmentFlowStack.Screen
				name="PaymentMethod"
				component={PaymentMethod}
			/>

			<InvestmentFlowStack.Screen
				name="AmountToInvest"
				component={AmountToInvest}
			/>

			<InvestmentFlowStack.Screen
				name="SelectAccount"
				component={SelectAccount}
			/>

			<InvestmentFlowStack.Screen
				name="ReviewDetails"
				component={ReviewDetails}
			/>

			<InvestmentFlowStack.Screen
				name="InvestmentSuccess"
				component={InvestmentSuccess}
			/>
		</InvestmentFlowStack.Navigator>
	);
}

export default InvestmentFlowNavigator;
