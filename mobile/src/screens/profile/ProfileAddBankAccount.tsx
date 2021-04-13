import React, {useLayoutEffect} from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {IndoTextInput} from "../../components/inputs/IndoInput";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const ProfileAddBankAccount: React.FC<IProps> = (props) => {

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: "",
			headerBackTitle: "",
		});
	}, [props.navigation]);

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<KeyboardAwareScrollView style={globalStyles.pagePadding}>
				<IndoText style={globalStyles.h1}>Change Bank Account</IndoText>
				<View style={{paddingTop: 30}}>
					<IndoText style={globalStyles.h4}>Enter your bank details</IndoText>
					<IndoTextInput placeholder={"Account Name"}/>
					<IndoTextInput placeholder={"Account Number"}/>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default ProfileAddBankAccount;
