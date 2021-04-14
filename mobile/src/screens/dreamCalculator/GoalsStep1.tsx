import React, {useLayoutEffect, useState} from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import AchievementCard from "../../components/elements/AchievementCard";
import IndoButton from "../../components/buttons/IndoButton";

interface IProps {
	navigation: StackNavigationProp<any>;
}

export enum EAchievements {
	CAR = "a car",
	NEW_HOME = "a new home",
	VACATION = "a vacation",
	WEDDING = "a wedding",
	BABY = "a baby",
	EMERGENCY = "an emergency",
	EATING_OUT = "eating out",
	SET_OWN_GOAL = "your goal",
}

const pageValues = {
	header: "Dreams do come true",
	bodyText: "Saving for a new car, home or trying to create a business? We can help you get to your goals quicker. Let's mark that next big milestone off your bucket-list."
}

const GoalsStep1: React.FC<IProps> = (props) => {

	const [achievement, setAchievement] = useState<EAchievements | undefined>(undefined);
	const DreamButtons = [
		{
			label: "Car",
			source: {uri: "https://via.placeholder.com/300"},
			onPress: () => {setAchievement(EAchievements.CAR)},
			value: EAchievements.CAR,
		},
		{
			label: "New Home",
			source: {uri: "https://via.placeholder.com/300"},
			onPress: () => {setAchievement(EAchievements.NEW_HOME)},
			value: EAchievements.NEW_HOME,
		},
		{
			label: "Vacation",
			source: {uri: "https://via.placeholder.com/300"},
			onPress: () => {setAchievement(EAchievements.VACATION)},
			value: EAchievements.VACATION,
		},
		{
			label: "Wedding",
			source: {uri: "https://via.placeholder.com/300"},
			onPress: () => {setAchievement(EAchievements.WEDDING)},
			value: EAchievements.WEDDING,
		},
		{
			label: "Baby",
			source: {uri: "https://via.placeholder.com/300"},
			onPress: () => {setAchievement(EAchievements.BABY)},
			value: EAchievements.BABY,
		},
		{
			label: "Emergency",
			source: {uri: "https://via.placeholder.com/300"},
			onPress: () => {setAchievement(EAchievements.EMERGENCY)},
			value: EAchievements.EMERGENCY,
		},
		{
			label: "Eating Out",
			source: {uri: "https://via.placeholder.com/300"},
			onPress: () => {setAchievement(EAchievements.EATING_OUT)},
			value: EAchievements.EATING_OUT,
		},
		{
			label: "Set My Own Goal",
			source: {uri: "https://via.placeholder.com/300"},
			onPress: () => {setAchievement(EAchievements.SET_OWN_GOAL)},
			value: EAchievements.SET_OWN_GOAL,
		},
	]

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: "",
			headerBackTitle: "",
		});
	}, [props.navigation]);

	function nextPage() {
		props.navigation.push("GoalsStep2", {choice: achievement});
	}
	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<KeyboardAwareScrollView style={globalStyles.pagePadding}>
				<IndoText style={[globalStyles.h1, {textTransform: "uppercase", textAlign: "center", paddingBottom: 10}]}>{pageValues.header}</IndoText>
				<IndoText style={{textAlign: "center"}}>{pageValues.bodyText}</IndoText>
				<View style={{flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
					{DreamButtons?.map((item, index) =>
						<AchievementCard key={`achievement-card-${index}`} source={item.source} label={item.label} selected={achievement === item.value} onPress={item.onPress}/>
					)}

				</View>
				<View style={{alignItems: "center", paddingVertical: 30}}>
					<IndoButton onPress={nextPage} disabled={achievement === undefined}>Set My Goal</IndoButton>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default GoalsStep1;
