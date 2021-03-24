import React from "react";
import IndoText from "../components/IndoText";
import globalStyles from "../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";

const SplashScreen: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>
				Splash Screen
			</IndoText>
		</SafeAreaView>
	);
};

export default SplashScreen;
