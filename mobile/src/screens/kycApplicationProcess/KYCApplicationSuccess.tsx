import React from "react";
import {Image, StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const KYCApplicationSuccess: React.FC<IProps> = (props) => {

	function next() {
		props.navigation.replace("DashboardNavigator");
	}
	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {justifyContent: "space-between"}]}>
			<View style={style.container}>
				<View>
					<Image  style={{width: 150, height: 150}} source={{uri: "https://via.placeholder.com/300"}} />
				</View>
				<IndoText style={[globalStyles.h1, style.header]}>Success!</IndoText>
				<IndoText style={style.paragraph1}>We will manually verify & cross check this info and it will be approved in less than a day. We just want to make sure we follow KYC regulations and that you are not on the grey list.</IndoText>
				<IndoText style={{fontWeight: "normal"}}>
					<IndoText style={{fontWeight: "bold", paddingVertical: 15, textAlign: "center"}}>Today you earned 15 crystals! </IndoText>
					Use these crystals to launch your rocket
				</IndoText>
			</View>
			<View style={{alignItems: "center"}}>
				<IndoButton onPress={next}>Done</IndoButton>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	container: {
		paddingVertical: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		paddingVertical: 15
	},
	paragraph1: {
		paddingVertical: 15,
		textAlign: "center"
	},
	formInputContainer: {
		marginHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		width: "100%"
	}
})

export default KYCApplicationSuccess;
