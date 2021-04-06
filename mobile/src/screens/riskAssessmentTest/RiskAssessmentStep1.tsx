import React, {useState} from "react";
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

interface IRiskOption {
	risk: ERisk,
	header: string,
	subHeader: string,
}

enum ERisk {
	MANAGE,
	CONSERVATIVE,
	SOME,
	MODERATE,
	HIGH
}

const radioOptions: IRiskOption[] = [
	{
		risk: ERisk.HIGH,
		header: "High-growth",
		subHeader: "Mostly holding high risk investments for increased returns.",
	},
	{
		risk: ERisk.MODERATE,
		header: "Moderate growth",
		subHeader: "Even balance between high, medium, and low risk investments",
	},
	{
		risk: ERisk.SOME,
		header: "Some growth",
		subHeader: "Majority of investments are medium and low risk investments",
	},
	{
		risk: ERisk.CONSERVATIVE,
		header: "Conservative growth",
		subHeader: "Even distribution between medium and low risk investments.",
	},
	{
		risk: ERisk.MANAGE,
		header: "Manage market volatility",
		subHeader: "Exclusively low risk investments.",
	},
]

const RiskAssessmentStep1: React.FC<IProps> = (props) => {

	const [risk, setRisk] = useState<ERisk | undefined>(undefined);

	function back() {
		props.navigation.goBack();
	}

	function next() {
		props.navigation.push("RiskAssessmentStep2");
	}

	function createRadioOption(item: IRiskOption, index: number) {
		return (
			<IndoRadioButton
				key={`radio-item-${index}`}
				value={risk === item.risk}
				setValue={() => setRisk(item.risk)}
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
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {justifyContent: "space-between"}]}>
			<View style={{flexDirection: "column", justifyContent: "space-between", width: "100%"}}>
				<IndoText onPress={back} style={globalStyles.h1}>←</IndoText>
				<IndoText style={[globalStyles.h1, {textAlign: "center", paddingBottom: 25}]}>What is Your Risk?</IndoText>
				{radioOptions.map(createRadioOption)}
			</View>
			<View style={{alignItems: "center"}}>
				<IndoButton onPress={next} disabled={risk === undefined}>Next</IndoButton>
			</View>
		</SafeAreaView>
	);
};

export default RiskAssessmentStep1;
