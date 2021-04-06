import React, {useEffect, useState} from "react";
import {Alert, StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import IndoButton from "../../components/buttons/IndoButton";
import Svg, {Rect} from "react-native-svg";
import colors from "../../theme/colors";

const WelcomeLandingPage: React.FC = () => {

	const [email, setEmail] = useState<string>();

	useEffect(() => {
		console.log(email);
	}, [email]);

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {justifyContent: "center"}]}>
			<View style={{alignItems: "center"}}>
				<IndoText style={[globalStyles.h1, {paddingHorizontal: 10}]}>Welcome!</IndoText>
				<IndoText style={{paddingBottom: 50}}>Make your best financial decisions, whether you're saving for a trip, looking to pay off debt or start a business.</IndoText>
				<View style={{paddingVertical: 25}}>
					<Svg width={250} height={150} viewBox="0 0 350 300">
						<Rect
							x={100}
							y={0}
							width={150}
							height={200}
							fill={"gray"}
							fillRule="evenodd"
						/>
					</Svg>
				</View>
				<IndoText style={{paddingBottom: 50}}>Please try out our game feature. It will give you <IndoText style={{fontWeight: "bold"}}>Rp50,000</IndoText> after every level!</IndoText>
				<IndoButton color="outline-cyan">Play Now!</IndoButton>
			</View>
		</SafeAreaView>
	);
};

export default WelcomeLandingPage;
