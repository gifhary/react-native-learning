import React, {useLayoutEffect} from "react";
import {Image, ScrollView, StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const RiskAssessmentResults: React.FC<IProps> = (props) => {

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerShown: false
		});
	}, [props.navigation]);

	function nextPage() {
		props.navigation.replace("RiskAssessmentRecommendations");
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, style.customSpacing]}>
			<ScrollView>
				<View style={{justifyContent: "center", alignItems: "center"}}>
					<IndoText style={globalStyles.h2}>Your Risk Assessment type is:</IndoText>
					<IndoText style={globalStyles.h1}>Moderate</IndoText>
					<IndoText>This portfolio was selected based on your answers and goals. Your investments will be
						diversified across the buckets below.</IndoText>
					<View style={{paddingVertical: 50}}>
						<Image style={{width: 200, height: 200}} source={{uri: "https://via.placeholder.com/300"}}/>
					</View>
					<IndoText style={globalStyles.h2}>What this means:</IndoText>
					<IndoText
						style={[globalStyles.h3, {fontWeight: "normal", fontStyle: "italic", paddingVertical: 10}]}>"Balance
						is key."</IndoText>
					<IndoText style={{paddingVertical: 15}}>Neither aggressive nor timid, the moderate investor has the
						most versatility in growing
						wealth. He/she does not shy away from riskier choices for higher returns, but always balances it
						out
						with safer instruments in the market. With your eggs always kept in different baskets, breakfast
						will always be served.</IndoText>
				</View>
				<View style={{alignItems: "center"}}>
					<IndoButton onPress={nextPage}>See Recommendations</IndoButton>
				</View>
			</ScrollView>

		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	customSpacing: {
		paddingHorizontal: 30,
		justifyContent: "space-between"
	}
});

export default RiskAssessmentResults;
