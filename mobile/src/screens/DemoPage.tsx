import {SafeAreaView, View} from "react-native";
import React, {useState} from "react";
import globalStyles from "../theme/globalStyles";
import IndoText from "../components/IndoText";
import IndoButton from "../components/buttons/IndoButton";
import colors from "../theme/colors";
import {IndoTextInput} from "../components/inputs/IndoInput";
import IndoLabel from "../components/inputs/IndoLabel";
import {IndoSelectDropdown} from "../components/inputs/IndoSelectDropdown";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const dummyData = [
	{label: "test", value: "test"},
	{label: "nest", value: "nest"},
	{label: "best", value: "best"},
	{label: "pest", value: "pest"},
];

const DemoPage: React.FC = () => {

	const [test, setTest] = useState("");

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePaddingHorizontal]}>
			<KeyboardAwareScrollView>


			<View style={{alignItems: "center"}}>

				<IndoText style={{color: colors.navy, paddingVertical: 10}}>Buttons</IndoText>
				<IndoButton color={"navy"} onPress={() => {console.log("hello?")}}>Primary Button</IndoButton>
				{/*<IndoButton color={"outline-navy"} onPress={() => {}}>Border Variant</IndoButton>*/}
				{/*<IndoButton color={"cyan"} onPress={() => {}}>Secondary Button</IndoButton>*/}
				{/*<IndoButton color={"outline-cyan"} onPress={() => {}}>Secondary Button</IndoButton>*/}
				{/*<IndoButton color={"lime"} onPress={() => {}}>Hello</IndoButton>*/}
				{/*<IndoButton color={"outline-lime"} onPress={() => {}}>Hello</IndoButton>*/}
				{/*<IndoButton disabled onPress={() => {}}>Hello</IndoButton>*/}
				{/*<IndoButton color={"outline-gray"} onPress={() => {}}>Hello</IndoButton>*/}
				{/*<IndoButton color={"navy"} bubble={"!"} onPress={() => {}}>Hello</IndoButton>*/}
				{/*<IndoButton color={"outline-navy"} bubble={"!"} onPress={() => {}}>Hello</IndoButton>*/}

				<IndoText style={{color: colors.navy, paddingVertical: 10}}>Field Inputs</IndoText>

			</View>
			<View>
				<IndoLabel>Test Label</IndoLabel>
				<IndoTextInput placeholder="Test Placeholder..." />
			</View>
			<View>
				<IndoLabel>Test Dropdown</IndoLabel>
				<IndoSelectDropdown value={test} onChange={setTest} data={dummyData} placeholder="Test Dropdown..." />
			</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	)
}

export default DemoPage