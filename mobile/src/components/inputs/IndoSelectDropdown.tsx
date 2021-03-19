import React, {useState} from "react";
import {
	Modal,
	StyleSheet,
	TextInputProps,
	View,
	Text, Platform, Keyboard,
} from "react-native";
import colors from "../../theme/colors";
import {Picker} from "@react-native-picker/picker";
import IndoButton from "../buttons/IndoButton";
import {getHeight, getWidth} from "../../utils/getDimensions";
import {useKeyboardVisible} from "../../utils/hooks/useKeyboardVisible";

interface IProps extends TextInputProps {
	value: any,
	onChange: any,
	data: any,
}

export const IndoSelectDropdown: React.FC<IProps> = (props) => {

	const [open, setOpen] = useState(false);
	const keyboardVisible = useKeyboardVisible();

	function toggleOpen(): void {
		if (Platform.OS === "ios") {
			if (keyboardVisible) {
				Keyboard.dismiss();
			}

			setOpen(!open);
		}
	}

	function onChangeHelperIOS(itemValue: any): void {
		props.onChange(itemValue);
	}

	function renderPickerItems(item: any, i: number) {
		return (
			<Picker.Item
				key={`picker-item_${i}`}
				label={item.label}
				value={item.value}
			/>
		);
	}

	return (
		<View style={style.view}>
			{Platform.OS === "ios" && (
				<Modal
					visible={open}
					transparent={true}
					animationType="fade"
				>
					<View style={style.modalContent}>
						<View style={style.pickerContainer}>
							<Picker
								selectedValue={props.value}
								onValueChange={onChangeHelperIOS}
							>
								{props.data.map(renderPickerItems)}
							</Picker>

							<IndoButton
								onPress={toggleOpen}
								color="outline-navy"
							>
								Close
							</IndoButton>
							<View style={{height:100}} />
						</View>
					</View>
				</Modal>
			)}
			<View>
				<IndoButton color="outline-navy" onPress={toggleOpen} >Hello</IndoButton>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	view: {
		width: "100%",
		padding: 10,
	},
	shadow: {
		marginTop: 5,
		borderRadius: 7,
		backgroundColor: colors.white,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 3,
		shadowOpacity: 0.5,
	},
	modalContent: {
		height: getHeight(),
		width: getWidth(),
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		justifyContent: "flex-end",
	},
	pickerContainer: {
		backgroundColor: "white",
	},
});