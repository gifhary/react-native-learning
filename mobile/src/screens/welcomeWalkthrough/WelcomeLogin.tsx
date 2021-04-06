import React, {useState} from "react";
import {Alert, StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
	navigation: StackNavigationProp<any>;
}
const WelcomeLogin: React.FC<IProps> = (props) => {

	const [email, setEmail] = useState<string>();

	function next() {
		props.navigation.replace("WelcomeLandingPage");
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, {justifyContent: "center"}]}>
			<View style={{flex: 1}}/>
			<View style={style.center}>
				<IndoTextInput value={email} onChangeText={(e) => setEmail(e)} />
				<IndoTextInput secureTextEntry={true} autoCompleteType="password" />
				<IndoText style={{paddingVertical: 15}}>Forgot Password?</IndoText>
			</View>
			<View style={style.center}>
				<IndoButton onPress={next} >Sign In</IndoButton>
				<IndoButton onPress={() => {Alert.alert("Make sign up")}} color="outline-cyan">Sign Up</IndoButton>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default WelcomeLogin;
