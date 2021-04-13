import React, {useEffect, useLayoutEffect, useState} from "react";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {RouteProp} from "@react-navigation/native";
import {EAchievements} from "./GoalsStep1";
import {StackNavigationProp} from "@react-navigation/stack";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import AchievementCard from "../../components/elements/AchievementCard";
import {StyleSheet, View} from "react-native";
import IndoSlider from "../../components/inputs/Slider/IndoSlider";
import IndoButton from "../../components/buttons/IndoButton";

interface IProps {
	route?: RouteProp<{ choice: EAchievements }, "GoalsStep2">;
	navigation: StackNavigationProp<any>;
}

const GoalsStep3: React.FC<IProps> = (props) => {

	const [payment, setPayment] = useState(1);
	const [time, setTime] = useState(0);
	const [maxTime, setMaxTime] = useState<number>();

	const goalAmount = parseInt(props.route?.params.goalAmount, 10);

	useEffect(() => {
		setMaxTime((goalAmount / (payment * 12)));
	}, [time, payment]);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: "",
			headerBackTitle: "",
		});
	}, [props.navigation]);

	function saveGoal() {
		// TODO add API here to save goal card and navigate to dashboard?
		props.navigation.goBack();
	}
	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<KeyboardAwareScrollView style={globalStyles.pagePadding}>
				<IndoText style={globalStyles.h1}>Investment Simulation</IndoText>
				<AchievementCard source={{uri: "https://via.placeholder.com/300"}} label={props.route?.params?.choice} size={"lg"} />
				<IndoText style={{paddingVertical: 20}}>
					If you invest <IndoText style={style.bold}>${payment} Month</IndoText> you could buy a car
					for <IndoText style={style.bold}>{"Rp $" + goalAmount}</IndoText> in <IndoText style={style.bold}>{maxTime?.toFixed(2)} Years.</IndoText>
				</IndoText>
				<IndoSlider label={"Payment"} controlledValue={payment} setValue={setPayment} min={1} max={goalAmount} />
				<IndoSlider label={"Time"} controlledValue={time} setValue={setTime} valueSuffix={"Years"} min={1} max={maxTime} />

				<View style={{alignItems: "center", paddingVertical: 30}}>
					<IndoButton onPress={saveGoal}>Add Goal to My Home</IndoButton>
					<IndoButton>Select New Goal</IndoButton>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	bold: {
		fontWeight: "bold",
		textDecorationLine: "underline",
	}
})

export default GoalsStep3;
