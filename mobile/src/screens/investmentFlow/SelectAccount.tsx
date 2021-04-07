import React, {useLayoutEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import IndoRadioButton from "../../components/inputs/toggles/IndoRadio";
import IndoButton from "../../components/buttons/IndoButton";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const placeholder1 = {
	header: "Wells Fargo",
	subHeader: "Checking ...2545",
}

const SelectAccount: React.FC<IProps> = (props) => {

	const [account, setAccount] = useState();

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: ""
		});
	}, [props.navigation]);

	function back() {
		props.navigation.goBack();
	}

	function next() {
		props.navigation.push("ReviewDetails");
	}

	function createRadioOption(item: any, index: number) {
		return (
			<IndoRadioButton
				key={`radio-item-${index}`}
				value={account === item.header}
				setValue={() => setAccount(item.header)}
				radioAlign="flex-start"
			>
				<View style={{marginTop: -10}}>
					<IndoText style={globalStyles.h2}>{item.header}</IndoText>
					{item.subHeader && <IndoText>{item.subHeader}</IndoText>}
				</View>
			</IndoRadioButton>
		);
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, {paddingHorizontal: 30, justifyContent: "space-between"}]}>
			<View style={style.headerContainer}>
				<IndoText style={[globalStyles.h1, {paddingBottom: 15}]}>Select an account</IndoText>
				{createRadioOption(placeholder1, 1)}
				{createRadioOption({header: "Add Account"}, 1)}
			</View>
			<View style={{alignItems: "center"}}>
				<IndoText style={{textAlign: "left"}}>If your transfer reverses or the selected bank is unlinked, we'll pause your recurring investments</IndoText>
				<IndoButton onPress={next} disabled={account === undefined}>Continue</IndoButton>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	headerContainer: {

	}
});
export default SelectAccount;
