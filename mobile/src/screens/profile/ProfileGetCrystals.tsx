import React, {useLayoutEffect} from "react";
import {Image, StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import IndoButton from "../../components/buttons/IndoButton";
import Clipboard from '@react-native-clipboard/clipboard';
import CrystalRewardElement from "../../components/elements/CrystalRewardElement";

const placeholderImage = "https://via.placeholder.com/300";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const placeholder = {
	referralCode: "#LUNA001",
	amount: 10,
	conditionalAmount: 2,
	conditional: "friends join",
}

const ProfileGetCrystals: React.FC<IProps> = (props) => {

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: "",
			headerBackTitle: "",
		});
	}, [props.navigation]);

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {alignItems: "center"}]}>
			<Image style={style.imageStyle} source={{uri: placeholderImage}}/>
			<IndoText style={style.textStyle}>Invite Friends and Get Crystals!</IndoText>
			<IndoText style={style.textStyle}>Get 15 crystals for every friend who registers on Rocket using your referral code.</IndoText>
			<IndoText style={style.textStyle}>Your friend also gets 15 crystals which can be used to play the rocket game.</IndoText>
			<IndoTextInput style={{textAlign: "center"}} value={placeholder.referralCode} editable={false}/>
			<View style={{flexDirection: "row", width: "100%"}}>
				<IndoButton color="outline-orange" size="50%" onPress={() => Clipboard.setString(placeholder.referralCode)}>Copy</IndoButton>
				<IndoButton size="50%">Share</IndoButton>
			</View>
			<View style={{width: "100%", padding: 10}}>
				<CrystalRewardElement amount={placeholder.amount} conditionalAmount={placeholder.conditionalAmount} conditional={placeholder.conditional} />
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	imageStyle: {
		width: 125,
		height: 125,
	},
	textStyle: {
		paddingVertical: 20,
		textAlign: "center"
	}
})
export default ProfileGetCrystals;
