import React from "react";
import {StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoButton from "../../components/buttons/IndoButton";
import Svg, {Rect} from "react-native-svg";
import colors from "../../theme/colors";

const KYCApplicationSuccess: React.FC = () => {

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {justifyContent: "space-between"}]}>
			<View style={style.container}>
				<View>
					{/*<Image source={getIcon(props.route.name)} style={style.image} />*/}
					<Svg width={250} height={250} viewBox="0 0 300 300">
						<Rect
							x={100}
							y={150}
							width={100}
							height={150}
							fill={colors.gray}
							fillRule="evenodd"
						/>
					</Svg>
				</View>
				<IndoText style={[globalStyles.h1, style.header]}>KYC Success</IndoText>
				<IndoText style={style.paragraph1}>We will manually verify & cross check this info and it will be approved in less than a day. We just want to make sure we follow KYC regulations and that you are not on the grey list.</IndoText>
				<IndoText style={{fontWeight: "normal"}}>
					<IndoText style={{fontWeight: "bold", paddingVertical: 15, textAlign: "center"}}>Today you earned 15 crystals! </IndoText>
					Use these crystals to launch your rocket
				</IndoText>
			</View>
			<View style={{alignItems: "center"}}>
				<IndoButton>Done</IndoButton>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	container: {
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
