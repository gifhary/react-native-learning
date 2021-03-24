import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MyRocketMain from "../screens/myRocket/MyRocketMain";

const MyRocketStack = createStackNavigator();

const MyRocketNavigator: React.FC = () => {

	return (
		<MyRocketStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="MyRocketMain"
		>
			<MyRocketStack.Screen
				name="MyRocketMain"
				component={MyRocketMain}
			/>
		</MyRocketStack.Navigator>
	);
};

export default MyRocketNavigator;
