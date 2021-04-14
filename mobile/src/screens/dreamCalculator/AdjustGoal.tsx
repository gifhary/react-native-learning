import React, {useLayoutEffect} from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const AdjustGoal: React.FC<IProps> = (props) => {

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: "",
			headerBackTitle: "",

		});
	}, [props.navigation]);

	function goBack() {
		props.navigation.goBack();
	}

	function adjustGoalAmount() {
		props.navigation.push("GoalsStep2");
	}
	function selectNewGoal() {
		props.navigation.push("GoalsStep1");
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea]}>
			<IndoText onPress={goBack} style={[globalStyles.h4, {textAlign: "right", paddingHorizontal: 30, paddingVertical: 10}]}>x</IndoText>
			<IndoText style={[globalStyles.h1, {textAlign: "center"}]}>What would you like to do?</IndoText>
			<View style={{alignItems: "center", paddingVertical: 20}}>
				<IndoButton onPress={adjustGoalAmount}>Adjust Goal Amount</IndoButton>
				<IndoButton onPress={selectNewGoal} color="outline-orange">Select A New Goal</IndoButton>
			</View>
		</SafeAreaView>
	);
};

export default AdjustGoal;
