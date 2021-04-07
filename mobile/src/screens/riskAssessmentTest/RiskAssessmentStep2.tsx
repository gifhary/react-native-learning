import React, {useLayoutEffect, useState} from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";
import IndoRadioButton from "../../components/inputs/toggles/IndoRadio";

interface IProps {
	navigation: StackNavigationProp<any>;
}

interface IInvestmentOption {
	risk: EInvestment,
	header: string,
	subHeader: string,
}

enum EInvestment {
	MANAGE,
	CONSERVATIVE,
	SOME,
	MODERATE,
	HIGH
}

const radioOptions: IInvestmentOption[] = [
	{
		risk: EInvestment.MANAGE,
		header: "Spare change only",
		subHeader: "I'll invest in small amounts whenever I can.",
	},
	{
		risk: EInvestment.CONSERVATIVE,
		header: "Some of my cash",
		subHeader: "Less than 10% of my total available cash.",
	},
	{
		risk: EInvestment.SOME,
		header: "Half of my cash",
		subHeader: "25-50% of my total available cash.",
	},
	{
		risk: EInvestment.MODERATE,
		header: "Most of my cash",
		subHeader: "51-75% of my total available cash.",
	},
	{
		risk: EInvestment.HIGH,
		header: "Almost all of my cash",
		subHeader: "Over 75% of my total available cash.",
	},
]

const RiskAssessmentStep2: React.FC<IProps> = (props) => {

	const [investment, setInvestment] = useState<EInvestment | undefined>(undefined);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: ""
		});
	}, [props.navigation]);

	function back() {
		props.navigation.goBack();
	}

	function next() {
		props.navigation.replace("RiskAssessmentResults");
	}

	function createRadioOption(item: IInvestmentOption, index: number) {
		return (
			<IndoRadioButton
				key={`radio-item-${index}`}
				value={investment === item.risk}
				setValue={() => setInvestment(item.risk)}
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
			<View style={{flexDirection: "column", justifyContent: "space-between", width: "100%"}}>
				<IndoText style={[globalStyles.h1, {paddingBottom: 20}]}>Initially, how much money do you plan to invest?</IndoText>
				{radioOptions.map(createRadioOption)}
			</View>
			<View style={{alignItems: "center"}}>
				<IndoButton onPress={next} disabled={investment === undefined}>Next</IndoButton>
			</View>
		</SafeAreaView>
	);
};

export default RiskAssessmentStep2;
