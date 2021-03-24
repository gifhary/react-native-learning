import React from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const SelectAccount: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Select Account</IndoText>
		</SafeAreaView>
	);
};

export default SelectAccount;
