import React, {useLayoutEffect} from "react";
import {StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import IndoButton from "../../components/buttons/IndoButton";
import moment from "moment";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const placeholder = {
	name: "XMutual Fund",
	amount: "$122",
	investment: {
		repeat: "Monthly",
		startDate: moment().format("MMM DD, YYYY"),
		paymentMethod: "Wells Fargo",
	},
}

const ReviewDetails: React.FC<IProps> = (props) => {

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: ""
		});
	}, [props.navigation]);

	function next() {
		props.navigation.replace("InvestmentSuccess");
	}

	function back() {
		props.navigation.goBack();
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, {paddingHorizontal: 30, justifyContent: "space-between"}]}>
			<View>
				<IndoText style={[globalStyles.h1, {paddingBottom: 15}]}>Review</IndoText>
				<View style={[globalStyles.hr, style.itemSpacer]}>
					<IndoText style={{fontWeight: "bold"}}>Amount</IndoText>
					<IndoText>{placeholder.amount}</IndoText>
				</View>
				<View style={[globalStyles.hr, style.itemSpacer]}>
					<View>
					<IndoText style={{fontWeight: "bold"}}>Recurring Investment</IndoText>
					<IndoText>Starts on {placeholder.investment.startDate}</IndoText>
					<IndoText>Pay with {placeholder.investment.paymentMethod}</IndoText>
					</View>
					<IndoText>{placeholder.investment.repeat}</IndoText>
				</View>
			</View>

			<View style={{alignItems: "center"}}>
				<IndoButton onPress={next}>Confirm Investment</IndoButton>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	itemSpacer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 15,
		marginBottom: 15
	},
})

export default ReviewDetails;
