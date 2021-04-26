import React, {ReactNode} from "react";
import {StyleSheet, View} from "react-native";
import IndoText from "../IndoText";
import colors from "../../theme/colors";
import {IDemoButton, IDemoButtonGroup} from "../../utils/devRootButtonList";
import IndoButton from "../buttons/IndoButton";
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

const DemoButtonList: React.FC<IDemoButtonGroup> = (props) => {

	const navigation = useNavigation<StackNavigationProp<any>>();

	/**
	 * Render each button.
	 *
	 * @param button
	 * @param i
	 */
	function makeButton(button: IDemoButton, i: number): ReactNode {
		function onPress(): void {
			navigation.push(button.screen, button.params);
		}

		return (
			<IndoButton
				key={`${props.title}-button_${i}`}
				onPress={onPress}
				size="bg"
			>
				{button.label}
			</IndoButton>
		);
	}

	return (
		<View style={style.container}>
			<IndoText style={style.title}>
				{props.title}
			</IndoText>

			<View style={style.line}/>

			{props.buttons.map(makeButton)}
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 22,
		marginTop: 20,
	},
	line: {
		height: 1,
		width: 300,
		backgroundColor: colors.gray,
		alignSelf: "center",
		marginVertical: 7
	},
});

export default DemoButtonList;
