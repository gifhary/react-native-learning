import React, { useEffect } from "react";
import globalStyles from "../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import IndoText from "../components/IndoText";
import { StatusBar } from "react-native";
import colors from "../theme/colors";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const fotoBagas = "https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/144224018_413537379982866_4191379143646138514_n.jpg?tp=1&_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ka9hczreefsAX9urVn9&edm=ABfd0MgAAAAA&ccb=7-4&oh=25f1c199d32ebbc9c81d46dd67022743&oe=60AB1D97&_nc_sid=7bff83";

const SplashScreen: React.FC<IProps> = (props) => {
	const window = useWindowDimensions();

	useEffect(() => {
		setTimeout(() => {
			props.navigation.replace("AuthenticationNavigator");
		}, 1500);
	}, []);

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<StatusBar translucent backgroundColor="transparent" />
			<View style={style.biggerContainer}>
				<View style={[style.container, { height: window.height * 0.44 }]}>
					<Image
						source={require("../../assets/icons/rocket_icon_logo.png")}
						style={style.iconLogo}
					/>
					<Image
						source={require("../../assets/icons/rocket_logo.png")}
						style={style.logo}
					/>
					<IndoText style={globalStyles.h4}>Prepare to launch..</IndoText>
				</View>
				<Image
					source={require("../../assets/icons/cloud.png")}
					style={[style.cloud, { width: window.width, bottom: -window.height * 0.05 }]}
				/>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	biggerContainer: {
		flex: 1,
		backgroundColor: colors.orange
	},
	container: {
		zIndex: 1,
		position: "absolute",
		bottom: 50,
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	iconLogo: {
		height: 150,
		resizeMode: "contain",
	},
	logo: {
		height: 25,
		width: 117,
		resizeMode: "contain",
	},
	cloud: {
		position: "absolute",
	},
});

export default SplashScreen;
