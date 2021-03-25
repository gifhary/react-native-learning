import React from "react";
import {BottomTabBar, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "../theme/colors";
import DashboardHomeNavigator from "./DashboardHomeNavigator";
import MyRocketNavigator from "./MyRocketNavigator";
import ProductsNavigator from "./ProductsNavigator";
import MessagesNavigator from "./MessagesNavigator";
import ProfileNavigator from "./ProfileNavigator";
import BottomTabIcons from "../components/buttons/BottomTabIcons";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const DashboardTabs = createBottomTabNavigator();

const DashboardNavigator: React.FC<IProps> = (props) => {

	return (
		<DashboardTabs.Navigator
			screenOptions={(props) => ({
				tabBarIcon: () => {
					return <BottomTabIcons {...props} />;
				},
			})}

			initialRouteName="Home"
			tabBarOptions={{
				activeTintColor: colors.cyan,
			}}
		>
			<DashboardTabs.Screen
				name="DashboardHomeNavigator"
				component={DashboardHomeNavigator}
				options={{
					title: "Home"
				}}
			/>

			<DashboardTabs.Screen
				name="MyRocketNavigator"
				component={MyRocketNavigator}
				options={{
					title: "Launch"
				}}
			/>

			<DashboardTabs.Screen
				name="ProductsNavigator"
				component={ProductsNavigator}
				options={{
					title: "Products"
				}}
			/>

			<DashboardTabs.Screen
				name="MessagesNavigator"
				component={MessagesNavigator}
				options={{
					title: "Messages"
				}}
			/>

			<DashboardTabs.Screen
				name="ProfileNavigator"
				component={ProfileNavigator}

				options={{
					title: "Profile"
				}}
			/>
		</DashboardTabs.Navigator>
	);
};

export default DashboardNavigator;
