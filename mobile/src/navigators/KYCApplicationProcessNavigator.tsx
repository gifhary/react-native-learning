import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import KYCApplicationStep1 from "../screens/kycApplicationProcess/KYCApplicationStep1";
import KYCApplicationStep2 from "../screens/kycApplicationProcess/KYCApplicationStep2";
import KYCApplicationSuccess from "../screens/kycApplicationProcess/KYCApplicationSuccess";

const KYCApplicationProcessStack = createStackNavigator();

const KYCApplicationProcessNavigator: React.FC = () => {

	return (
		<KYCApplicationProcessStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="KYCApplicationStep1"
		>
			<KYCApplicationProcessStack.Screen
				name="KYCApplicationStep1"
				component={KYCApplicationStep1}
			/>

			<KYCApplicationProcessStack.Screen
				name="KYCApplicationStep2"
				component={KYCApplicationStep2}
			/>

			<KYCApplicationProcessStack.Screen
				name="KYCApplicationSuccess"
				component={KYCApplicationSuccess}
			/>

		</KYCApplicationProcessStack.Navigator>
	);
};

export default KYCApplicationProcessNavigator;
