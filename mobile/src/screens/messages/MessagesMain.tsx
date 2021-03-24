import {View} from "react-native";
import IndoText from "../../components/IndoText";
import React from "react";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const MessagesMain: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Messages Main</IndoText>
		</SafeAreaView>
	);
};

export default MessagesMain;
