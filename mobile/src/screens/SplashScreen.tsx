import React, {useEffect} from "react";
import globalStyles from "../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {Image, StyleSheet, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import IndoText from "../components/IndoText";
import { StatusBar } from "react-native";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const fotoBagas = "https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/144224018_413537379982866_4191379143646138514_n.jpg?tp=1&_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ka9hczreefsAX9urVn9&edm=ABfd0MgAAAAA&ccb=7-4&oh=25f1c199d32ebbc9c81d46dd67022743&oe=60AB1D97&_nc_sid=7bff83";

const SplashScreen: React.FC<IProps> = (props) => {

	useEffect(() => {
		setTimeout(() => {
			props.navigation.replace("AuthenticationNavigator");
		}, 1500);
	}, []);

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<StatusBar translucent backgroundColor="transparent" />
			<View style={style.container}>
				<IndoText>Loading screen</IndoText>
				<Image
					source={{uri: fotoBagas}}
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
