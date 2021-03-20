import React, {useEffect, useState} from "react";
import {
	Modal,
	StyleSheet,
	TextInputProps,
	View,
	Platform,
	Keyboard,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback
} from "react-native";
import colors from "../../../theme/colors";
import {Picker} from "@react-native-picker/picker";
import IndoButton from "../../buttons/IndoButton";
import {getHeight, getWidth} from "../../../utils/getDimensions";
import {useKeyboardVisible} from "../../../utils/hooks/useKeyboardVisible";
import {IndoSelectButton} from "./IndoSelectButton";
import IndoText from "../../IndoText";

interface IProps extends TextInputProps {
	value: any,
	setValue: any,
	data: any,
	multiSelection?: boolean,
	placeholder?: string,
}

export const IndoSelectDropdown: React.FC<IProps> = (props) => {

	const {value, setValue, data, multiSelection, placeholder} = props;
	const [open, setOpen] = useState(false);
	const keyboardVisible = useKeyboardVisible();
	const [tempValue, setTempValue] = useState();
	const [pristine, setPristine] = useState(true);

	useEffect(() => {
		if (!pristine) {
			onChangeHelperIOS(data[0].value);
		}
	}, [pristine]);

	function toggleOpen(): void {
		if (Platform.OS === "ios") {
			if (keyboardVisible) {
				Keyboard.dismiss();
			}

			setOpen(!open);
		}
	}

	function onChangeHelperIOS(itemValue: any): void {
		if (multiSelection === false) {
			const selectedOption = data.filter((item: any) => item.value === itemValue);
			setValue(selectedOption);
			setTempValue(itemValue);
		} else {
			setTempValue(itemValue);
		}
		console.log("itemValue", itemValue);
	}

	function selectOption() {
		const selectedOption = data.filter((item: any) => item.value === tempValue);

		if (value.some((item: any) => item.value === selectedOption[0].value)) {
			setValue(value.filter((item: any) => item.value !== selectedOption[0].value));
		} else {
			setValue([...value, ...selectedOption]);
		}

	}

	function deleteOption(selection: any) {
		setValue(value.filter((item: any) => item !== selection));
	}

	function renderPickerItems(item: any, i: number) {
		const selected = !!value.find((current: any) => current.label === item.label);
		return (
			<Picker.Item
				key={`picker-item_${i}`}
				label={item.label}
				value={item.value}
				color={selected ? colors.lime : undefined}
			/>
		);
	}

	function createDropdownItem(item: any, index: number) {

		return (
			<TouchableOpacity key={Math.random()} onPress={() => deleteOption(item)}>
				<IndoText key={`dropdown-item-${index}`} style={style.dropdownItem}>{item.label}</IndoText>
			</TouchableOpacity>
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
									selectedValue={tempValue}
									onValueChange={onChangeHelperIOS}
									itemStyle={[{fontWeight: "700"}]}
								>
									{data.map(renderPickerItems)}
								</Picker>
							<View style={{flexDirection: "row", justifyContent: "center"}}>
								{!!multiSelection &&<IndoButton
									onPress={selectOption}
									color="navy"
									size="sm"
								>
									Select
								</IndoButton>}
								<IndoButton
									onPress={toggleOpen}
									color="outline-navy"
									size="sm"
								>
									Close
								</IndoButton>
							</View>
						</View>
					</View>
				</Modal>
			)}
				<IndoSelectButton
					staticPlaceholder={multiSelection}
					placeholder={placeholder && placeholder}
					value={!multiSelection ? value : undefined} onPress={toggleOpen}
					onPressOut={() => {setPristine(false)}}
					open={open}
				/>
			{!!multiSelection && value.length > 0 &&
				<View style={style.dropdownContainer}>
					{value.map(createDropdownItem)}
				</View>
			}
		</View>
	);
};

IndoSelectDropdown.defaultProps = {
	multiSelection: false,
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
		paddingBottom: 50,
	},
	dropdownContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	dropdownItem: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
		marginVertical: 5,
		marginRight: 10,
		backgroundColor: colors.lime,
		overflow: "hidden",
		color: colors.white,
	},
});