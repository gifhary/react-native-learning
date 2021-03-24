import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "../theme/colors";
import DashboardHomeNavigator from "./DashboardHomeNavigator";
import MyRocketNavigator from "./MyRocketNavigator";
import ProductsNavigator from "./ProductsNavigator";
import MessagesNavigator from "./MessagesNavigator";
import ProfileNavigator from "./ProfileNavigator";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const DashboardTabs = createBottomTabNavigator();

const DashboardNavigator: React.FC<IProps> = (props) => {

	return (
		<DashboardTabs.Navigator
			initialRouteName="Home"
			tabBarOptions={{
				activeTintColor: colors.cyan,
			}}
		>
			<DashboardTabs.Screen
				name="DashboardHomeNavigator"
				component={DashboardHomeNavigator}
			/>

			<DashboardTabs.Screen
				name="MyRocketNavigator"
				component={MyRocketNavigator}
			/>

			<DashboardTabs.Screen
				name="ProductsNavigator"
				component={ProductsNavigator}
			/>

			<DashboardTabs.Screen
				name="MessagesNavigator"
				component={MessagesNavigator}
			/>

			<DashboardTabs.Screen
				name="ProfileNavigator"
				component={ProfileNavigator}
			/>
		</DashboardTabs.Navigator>
	);
};

export default DashboardNavigator;
