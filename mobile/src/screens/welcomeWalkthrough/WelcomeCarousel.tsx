import React from "react";
import IndoText from "../../components/IndoText";
import SafeAreaView from "react-native-safe-area-view";
import globalStyles from "../../theme/globalStyles";

const WelcomeCarousel: React.FC = () => {

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<IndoText>Welcome Carousel</IndoText>
		</SafeAreaView>
	);
};

export default WelcomeCarousel;
