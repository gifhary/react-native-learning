import React, {useEffect, useLayoutEffect, useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "../../theme/colors";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const AmountToInvest: React.FC<IProps> = (props) => {

	const [investmentAmount, setInvestmentAmount] = useState<string>();

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: ""
		});
	}, [props.navigation]);

	function setPresetAmount(amount: string) {
		setInvestmentAmount(amount);
	}


	function next() {
		props.navigation.push("SelectAccount");
	}

	function back() {
		props.navigation.goBack();
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, style.customSpacing]}>
			<View style={style.headerContainer}>
				<IndoText style={[globalStyles.h1, {textAlign: "center", paddingBottom: 15}]}>How much money can you
					invest today?</IndoText>
			</View>
			<IndoTextInput keyboardType="decimal-pad" value={investmentAmount} onChangeText={(e) => setInvestmentAmount(e)} style={{alignSelf: "center", width: "50%"}} />
			<View style={[globalStyles.hr, {marginBottom: 20, paddingBottom: 10}]}/>
			<View style={style.buttonItemContainer}>
				<TouchableOpacity style={[style.buttonItem, investmentAmount === "500.00" && style.borderOrange]} onPress={() => setPresetAmount("500.00")}>
					<IndoText>Rp500.00</IndoText>
				</TouchableOpacity>
				<TouchableOpacity style={[style.buttonItem, investmentAmount === "1000.00" && style.borderOrange]} onPress={() => setPresetAmount("1000.00")}>
					<IndoText>Rp1000.00</IndoText>
				</TouchableOpacity>
				<TouchableOpacity style={[style.buttonItem, investmentAmount === "1500.00" && style.borderOrange]}  onPress={() => setPresetAmount("1500.00")}>
					<IndoText>Rp1500.00</IndoText>
				</TouchableOpacity>
			</View>
			<IndoText style={{textAlign: "center", paddingVertical: 10}}>Minimum Rp100.00</IndoText>
			<View style={{alignItems: "center"}}>
				<IndoButton onPress={next} disabled={investmentAmount === undefined}>Continue</IndoButton>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	customSpacing: {
		paddingHorizontal: 30
	},
	headerContainer: {
		flexDirection: "column",
		justifyContent: "space-between",
		width: "100%"
	},
	buttonItemContainer: {
		flexDirection: "row",
		justifyContent: "space-around"
	},
	buttonItem: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderWidth: 1
	},
	borderOrange: {
		borderWidth: 2,
		borderColor: colors.orange
	},
});

export default AmountToInvest;
