import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import GoalsStep1 from "../screens/dreamCalculator/GoalsStep1";
import GoalsStep2 from "../screens/dreamCalculator/GoalsStep2";
import GoalsStep3 from "../screens/dreamCalculator/GoalsStep3";
import AdjustGoal from "../screens/dreamCalculator/AdjustGoal";
import UploadGoalImage from "../screens/dreamCalculator/UploadGoalImage";

const DreamCalculatorStack = createStackNavigator();

const DreamCalculatorNavigator: React.FC = () => {

	return (
		<DreamCalculatorStack.Navigator
			screenOptions={{
				headerShown: true,
			}}
			initialRouteName="GoalsStep1"
		>
			<DreamCalculatorStack.Screen
				name="GoalsStep1"
				component={GoalsStep1}
			/>

			<DreamCalculatorStack.Screen
				name="GoalsStep2"
				component={GoalsStep2}
			/>

			<DreamCalculatorStack.Screen
				name="GoalsStep3"
				component={GoalsStep3}
			/>

			<DreamCalculatorStack.Screen
				name="AdjustGoal"
				component={AdjustGoal}
			/>

			<DreamCalculatorStack.Screen
				name="UploadGoalImage"
				component={UploadGoalImage}
			/>
		</DreamCalculatorStack.Navigator>
	);
};

export default DreamCalculatorNavigator;
