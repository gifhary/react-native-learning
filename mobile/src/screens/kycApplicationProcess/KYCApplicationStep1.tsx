import React from "react";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import OffsetImageHeader from "../../components/elements/OffsetImageHeader";
import IndoText from "../../components/IndoText";
import {StyleProp, TextStyle, View} from "react-native";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";
const image = require("../../../assets/icons/Artboard_1_copy_188x.png");

interface IProps {
	navigation: StackNavigationProp<any>;
}

const placeholder1 = {
	image: "https://via.placeholder.com/300",
	header: "FDIC Insurance",
	subHeader: "Savings are FDIC-insured up to $250,000 through our partner banks.",
}

const placeholder2 = {
	image: "https://via.placeholder.com/300",
	header: "SIPC Protection",
	subHeader: "Investments are SIPC protected up to $500,000",
}

const placeholder3 = {
	image: "https://via.placeholder.com/300",
	header: "Powerful Security",
	subHeader: "We protect your data like it's our own.",
}

const placeholder4 = {
	image: "https://via.placeholder.com/300",
	header: "Serious Privacy",
	subHeader: "We never see or store your login credentials.",
}

const KYCApplicationStep1: React.FC<IProps> = (props) => {

	function next() {
		props.navigation.push("KYCApplicationStep2");
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {justifyContent: "space-between"}]}>
			<View>
				<OffsetImageHeader source={{uri: placeholder1.image}} header={placeholder1.header} subHeader={placeholder1.subHeader} />
				<OffsetImageHeader source={{uri: placeholder2.image}} header={placeholder2.header} subHeader={placeholder2.subHeader} />
				<OffsetImageHeader source={{uri: placeholder3.image}} header={placeholder3.header} subHeader={placeholder3.subHeader} />
				<OffsetImageHeader source={{uri: placeholder4.image}} header={placeholder4.header} subHeader={placeholder4.subHeader} />
			</View>
			<View style={{alignItems: "center"}}>
				<IndoText style={{paddingVertical: 15}}>by Continuing, you agree to E-Sign Consent and authorize our app to invest and save money for your goals.</IndoText>
				<IndoButton onPress={next}>Agree & Continue</IndoButton>
			</View>
		</SafeAreaView>
	);
};

export default KYCApplicationStep1;
