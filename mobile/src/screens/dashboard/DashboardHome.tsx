import React from "react";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const DashboardHome: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Dashboard Home</IndoText>
		</SafeAreaView>
	);
};

export default DashboardHome;
