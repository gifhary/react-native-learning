import React from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const ProfileEditBankAccount: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Profile Edit Bank Account</IndoText>
		</SafeAreaView>
	);
};

export default ProfileEditBankAccount;
