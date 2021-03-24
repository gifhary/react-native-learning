import React from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const WelcomeLandingPage: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Welcome Landing Page (Login/Signup)</IndoText>
		</SafeAreaView>
	);
};

export default WelcomeLandingPage;
