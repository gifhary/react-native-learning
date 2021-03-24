import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import WelcomeCarousel from "../screens/welcomeWalkthrough/WelcomeCarousel";
import WelcomeLandingPage from "../screens/welcomeWalkthrough/WelcomeLandingPage";

const WelcomeWalkthroughStack = createStackNavigator();

const WelcomeWalkthroughNavigator: React.FC = () => {

	return (
		<WelcomeWalkthroughStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="WelcomeCarousel"
		>
			<WelcomeWalkthroughStack.Screen
				name="WelcomeCarousel"
				component={WelcomeCarousel}
				options={{
					animationEnabled: false,
				}}
			/>

			<WelcomeWalkthroughStack.Screen
				name="WelcomeLandingPage"
				component={WelcomeLandingPage}
			/>
		</WelcomeWalkthroughStack.Navigator>
	);
}

export default WelcomeWalkthroughNavigator;
