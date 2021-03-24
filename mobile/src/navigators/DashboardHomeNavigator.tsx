import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import DashboardHome from "../screens/dashboard/DashboardHome";
import DreamCalculatorNavigator from "./DreamCalculatorNavigator";

const DashboardHomeStack = createStackNavigator();

const DashboardHomeNavigator: React.FC = () => {

	return (
		<DashboardHomeStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<DashboardHomeStack.Screen
				name="DashboardHome"
				component={DashboardHome}
			/>

			<DashboardHomeStack.Screen
				name="DreamCalculatorNavigator"
				component={DreamCalculatorNavigator}
			/>
		</DashboardHomeStack.Navigator>
	);
}

export default DashboardHomeNavigator;
