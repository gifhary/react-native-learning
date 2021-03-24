import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MessagesMain from "../screens/messages/MessagesMain";

const MessagesStack = createStackNavigator();

const MessagesNavigator: React.FC = () => {

	return (
		<MessagesStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="MessagesMain"
		>
			<MessagesStack.Screen
				name="MessagesMain"
				component={MessagesMain}
			/>
		</MessagesStack.Navigator>
	);
};

export default MessagesNavigator;
