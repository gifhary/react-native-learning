import React, {useLayoutEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoRadioButton from "../../components/inputs/toggles/IndoRadio";
import {StackNavigationProp} from "@react-navigation/stack";
import IndoButton from "../../components/buttons/IndoButton";

interface IProps {
	navigation: StackNavigationProp<any>;
}

interface IInvestmentSchedule {
	schedule: ESchedule,
	header: string,
	subHeader: string,
}

enum ESchedule {
	ONCE,
	DAILY,
	WEEKLY,
	MONTHLY,
	BIWEEKLY
}

const radioOptions: IInvestmentSchedule[] = [
	{
		schedule: ESchedule.ONCE,
		header: "One Time Payment",
		subHeader: "Pay what you can today",
	},
	{
		schedule: ESchedule.DAILY,
		header: "Daily",
		subHeader: "Every market day (Monday-Friday)",
	},
	{
		schedule: ESchedule.WEEKLY,
		header: "Weekly",
		subHeader: "Every Wednesday",
	},
	{
		schedule: ESchedule.MONTHLY,
		header: "Monthly",
		subHeader: "The 2nd of every month",
	},
	{
		schedule: ESchedule.BIWEEKLY,
		header: "Biweekly",
		subHeader: "Every two weeks on Wednesday",
	},
]

const PaymentMethod: React.FC<IProps> = (props) => {

	const [schedule, setSchedule] = useState<ESchedule>();

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: ""
		});
	}, [props.navigation]);

	function next() {
		props.navigation.push("AmountToInvest");
	}

	function back() {
		props.navigation.goBack();
	}

	function createRadioOption(item: IInvestmentSchedule, index: number) {
		return (
			<IndoRadioButton
				key={`radio-item-${index}`}
				value={schedule === item.schedule}
				setValue={() => setSchedule(item.schedule)}
				radioAlign="flex-start"
			>
				<View style={{marginTop: -10}}>
					<IndoText style={globalStyles.h2}>{item.header}</IndoText>
					<IndoText>{item.subHeader}</IndoText>
				</View>
			</IndoRadioButton>
		);
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, {paddingHorizontal: 30, justifyContent: "space-between"}]}>
			<View style={style.radioContainer}>
				<IndoText style={[globalStyles.h1, {textAlign: "center", paddingBottom: 15}]}>Choose Investment Schedule</IndoText>
				<IndoText style={[{textAlign: "center", paddingBottom: 25}]}>Let us know how often you'd like to invest, we'll remind you accordingly!</IndoText>
				{radioOptions.map(createRadioOption)}
			</View>
			<View style={{alignItems: "center"}}>
				<IndoText style={{textAlign: "left"}}>If your transfer reverses or the selected bank is unlinked, we'll pause your recurring investments</IndoText>
				<IndoButton onPress={next} disabled={schedule === undefined}>Next</IndoButton>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	radioContainer: {
		flexDirection: "column",
		justifyContent: "space-between",
		width: "100%"
	},
});

export default PaymentMethod;
