import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MainDevRoot from "../screens/MainDevRoot";
import SplashScreen from "../screens/SplashScreen";
import DemoPage from "../screens/DemoPage";
import DashboardNavigator from "./DashboardNavigator";
import AuthenticationNavigator from "./AuthenticationNavigator";

const RootNavigatorStack = createStackNavigator();

const RootNavigator: React.FC = () => {

	return (
		<RootNavigatorStack.Navigator
			headerMode="none"
			initialRouteName={__DEV__ ? "MainDevRoot" : "SplashScreen"}
		>
			{__DEV__ && (
				<RootNavigatorStack.Screen
					name="MainDevRoot"
					component={MainDevRoot}
				/>
			)}

			{__DEV__ && (
				<RootNavigatorStack.Screen
					name="DemoPage"
					component={DemoPage}
				/>
			)}

			<RootNavigatorStack.Screen
				name="SplashScreen"
				component={SplashScreen}
			/>

			<RootNavigatorStack.Screen
				name="AuthenticationNavigator"
				component={AuthenticationNavigator}
			/>

			<RootNavigatorStack.Screen
				name="DashboardNavigator"
				component={DashboardNavigator}
			/>
		</RootNavigatorStack.Navigator>
	);
}

export default RootNavigator;
