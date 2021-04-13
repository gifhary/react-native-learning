import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ProfileMain from "../screens/profile/ProfileMain";
import ProfileGetCrystals from "../screens/profile/ProfileGetCrystals";
import AccountSettings from "../screens/profile/AccountSettings";
import ChangeEmail from "../screens/profile/ChangeEmail";
import ChangePin from "../screens/profile/ChangePin";
import ProfileBankAccountList from "../screens/profile/ProfileBankAccountList";
import ProfileAddBankAccount from "../screens/profile/ProfileAddBankAccount";
import ProfileEditBankAccount from "../screens/profile/ProfileEditBankAccount";

const ProfileStack = createStackNavigator();

const ProfileNavigator: React.FC = () => {

	return (
		<ProfileStack.Navigator
			screenOptions={{
				headerShown: true,
			}}
			initialRouteName="ProfileMain"
		>
			<ProfileStack.Screen
				name="ProfileMain"
				component={ProfileMain}
			/>

			<ProfileStack.Screen
				name="ProfileGetCrystals"
				component={ProfileGetCrystals}
			/>

			<ProfileStack.Screen
				name="AccountSettings"
				component={AccountSettings}
			/>

			<ProfileStack.Screen
				name="ChangeEmail"
				component={ChangeEmail}
			/>

			<ProfileStack.Screen
				name="ChangePin"
				component={ChangePin}
			/>

			<ProfileStack.Screen
				name="ProfileBankAccountList"
				component={ProfileBankAccountList}
			/>

			<ProfileStack.Screen
				name="ProfileAddBankAccount"
				component={ProfileAddBankAccount}
			/>

			<ProfileStack.Screen
				name="ProfileEditBankAccount"
				component={ProfileEditBankAccount}
			/>
		</ProfileStack.Navigator>
	);
};

export default ProfileNavigator;
