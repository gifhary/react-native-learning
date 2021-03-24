import React, {ReactNode} from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import globalStyles from "../theme/globalStyles";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import IndoText from "../components/IndoText";
import IndoButton from "../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "../theme/colors";
import {demoButtons, IDemoButton, IDemoButtonGroup} from "../utils/devRootButtonList";
import DemoButonList from "../components/demo/DemoButonList";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const MainDevRoot: React.FC<IProps> = (props) => {

	/**
	 * Make the testing button groups for quick navigation.
	 *
	 * @param buttonGroup
	 * @param i
	 */
	function makeNavigationButtons(buttonGroup: IDemoButtonGroup, i: number): ReactNode {
		return (
			<DemoButonList
				key={`demo-button-group_${i}`}
				title={buttonGroup.title}
				buttons={buttonGroup.buttons}
			/>
		);
	}

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<KeyboardAwareScrollView style={globalStyles.pagePadding}>
				<IndoText style={{fontWeight: "bold", fontSize: 28}}>Main Dev Root</IndoText>

				<IndoText style={{fontSize: 14}}>
					This screen can be used as a dev tool to easily access any other screen at any step in any navigator.
					{"\n"}{"\n"}
					Some screens may appear with multiple buttons, such as the flows that can be accessed via the Dashboard (ie. profile, messages, etc.)
					{"\n"}{"\n"}
					You can add more screens to the list in the "devRootButtonList.ts" file found in the utils directory.
				</IndoText>

				{demoButtons.map(makeNavigationButtons)}

				<View style={{height: 60}}/>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	)
}

export default MainDevRoot
