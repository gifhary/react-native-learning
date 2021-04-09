import React from "react";
import {Image, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const WelcomeLandingPage: React.FC<IProps> = (props) => {

	function next() {
		props.navigation.replace("DashboardNavigator");
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {justifyContent: "center"}]}>
			<View style={{alignItems: "center"}}>
				<IndoText style={[globalStyles.h1, {paddingHorizontal: 10}]}>Welcome!</IndoText>
				<IndoText>Make your best financial decisions, whether you're saving for a trip, looking to pay off debt or start a business.</IndoText>
				<View style={{paddingVertical: 25}}>
					<Image style={{width: 200, height: 200}} source={{uri: "https://via.placeholder.com/300"}} />
				</View>
				<IndoText style={{paddingBottom: 50}}>Please try out our game feature. It will give you <IndoText style={{fontWeight: "bold"}}>Rp50,000</IndoText> after every level!</IndoText>
				<IndoButton color="outline-orange" onPress={next}>Play Now!</IndoButton>
			</View>
		</SafeAreaView>
	);
};

export default WelcomeLandingPage;
