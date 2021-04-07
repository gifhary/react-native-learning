import React from "react";
import {StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import Svg, {Rect} from "react-native-svg";
import {StackNavigationProp} from "@react-navigation/stack";
import moment from "moment";
import IndoButton from "../../components/buttons/IndoButton";

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

const InvestmentSuccess: React.FC<IProps> = (props) => {

	function next() {
		props.navigation.replace("DashboardNavigator");
	}

	function createInfoListItem(title: any, value: any) {
		return (
			<View style={[globalStyles.hr, style.itemSpacer]}>
				<View>
					<IndoText style={{fontWeight: "bold"}}>{title}</IndoText>
				</View>
				<IndoText>{value}</IndoText>
			</View>
		);
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {justifyContent: "space-between"}]}>
			<View>
				<Svg width={350} height={250} viewBox="0 0 300 300">
					<Rect
						x={0}
						y={75}
						width={300}
						height={150}
						fill={"gray"}
						fillRule="evenodd"
					/>
				</Svg>
				<IndoText style={[globalStyles.h1, {textAlign: "center"}]}>Congratulations!</IndoText>
				<IndoText>Your goal is set and your order to invest in {placeholder.name} every month is scheduled. The
					first order will tale place on {placeholder.investment.startDate}.</IndoText>
				<View style={{paddingVertical: 20}}>
					{createInfoListItem("Amount", placeholder.amount)}
					{createInfoListItem("Frequency", placeholder.investment.repeat)}
					{createInfoListItem("Payment method", placeholder.investment.paymentMethod)}
					{createInfoListItem("Starts", placeholder.investment.startDate)}
				</View>
			</View>
			<View style={{alignItems: "center"}}>
				<IndoButton onPress={next}>Done</IndoButton>
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

export default InvestmentSuccess;
