import React, {useEffect} from "react";
import globalStyles from "../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {Image, StyleSheet, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import IndoText from "../components/IndoText";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const SplashScreen: React.FC<IProps> = (props) => {

	useEffect(() => {
		setTimeout(() => {
			props.navigation.replace("AuthenticationNavigator");
		}, 1500);
	}, []);

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<View style={style.container}>
				<IndoText>Loading screen</IndoText>
				<Image
					source={{uri: "https://via.placeholder.com/300"}}
					style={style.image}
				/>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		padding: 25
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
});

export default SplashScreen;
