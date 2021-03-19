import {SafeAreaView, View} from "react-native";
import React from "react";
import globalStyles from "../theme/globalStyles";
import IndoText from "../components/IndoText";
import IndoButton from "../components/buttons/IndoButton";
import colors from "../theme/colors";

const DemoPage: React.FC = () => {

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePaddingHorizontal]}>
			<View style={{alignItems: "center"}}>
				<IndoText style={{color: colors.navy, paddingVertical: 10}}>Buttons</IndoText>
				<IndoButton color={"navy"} onPress={() => {}}>Primary Button</IndoButton>
				<IndoButton color={"outline-navy"} onPress={() => {}}>Border Variant</IndoButton>
				<IndoButton color={"cyan"} onPress={() => {}}>Secondary Button</IndoButton>
				<IndoButton color={"outline-cyan"} onPress={() => {}}>Secondary Button</IndoButton>
				<IndoButton color={"lime"} onPress={() => {}}>Hello</IndoButton>
				<IndoButton color={"outline-lime"} onPress={() => {}}>Hello</IndoButton>
				<IndoButton disabled onPress={() => {}}>Hello</IndoButton>
				<IndoButton color={"outline-gray"} onPress={() => {}}>Hello</IndoButton>
				<IndoButton color={"navy"} bubble={"!"} onPress={() => {}}>Hello</IndoButton>
			</View>
		</SafeAreaView>
	)
}

export default DemoPage