import React from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const ProfileBankAccountList: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Profile Bank Account List</IndoText>
		</SafeAreaView>
	);
};

export default ProfileBankAccountList;
