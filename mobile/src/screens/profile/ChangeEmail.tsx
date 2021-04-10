import React, {useState} from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const ChangeEmail: React.FC<IProps> = (props) => {

	const [email, setEmail] = useState<string>();

	function next() {
		props.navigation.goBack();
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {justifyContent: "space-between"}]}>
			<View>
				<IndoText style={globalStyles.h1}>Change Email</IndoText>
				<IndoText style={[globalStyles.h3, {paddingHorizontal: 10, paddingTop: 20 }]}>Enter your new email address</IndoText>
				<IndoTextInput value={email} onChangeText={(e) => setEmail(e)}/>
			</View>
			<View style={{alignItems: "center"}}>
				<IndoButton onPress={next} >Submit</IndoButton>
			</View>
		</SafeAreaView>
	);
};

export default ChangeEmail;
