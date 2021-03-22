import React, {useEffect, useState} from "react";
import {
	Modal,
	StyleSheet,
	TextInputProps,
	View,
	Platform,
	Keyboard,
	TouchableOpacity,
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
	enabled?: boolean
}

export const IndoSelectDropdown: React.FC<IProps> = (props) => {

	const {value, setValue, data, multiSelection, placeholder, enabled} = props;
	const [open, setOpen] = useState(false);
	const keyboardVisible = useKeyboardVisible();
	const [tempValue, setTempValue] = useState(undefined);
	const [pristine, setPristine] = useState(true);

	useEffect(() => {
		if (!pristine) {
			if (Platform.OS === "ios") onChangeHelperIOS(data[0].value);
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
	}

	function onChangeHelperAndroid(itemValue: any): void {
		if (multiSelection === false) {
			const selectedOption = data.filter((item: any) => item.value === itemValue);
			setValue(selectedOption);
			setTempValue(itemValue);
		} else {
			const selectedOption = data.filter((item: any) => item.value === itemValue);
			if (value.some((item: any) => item.value === selectedOption[0].value)) {
				setValue(value.filter((item: any) => item.value !== selectedOption[0].value));
			} else {
				setValue([...value, ...selectedOption]);
			}
		}

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
					color={(selected ? colors.lime : undefined)}
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
					onPressOut={() => {
						setPristine(false);
					}}
					open={open}
				/>
			{!!multiSelection && value.length > 0 &&
				<View style={style.dropdownContainer}>
					{value.map(createDropdownItem)}
				</View>
			}
			{Platform.OS !== "ios" && (
				<View style={style.androidPickerAdjuster}>
					<Picker
						selectedValue={value}
						onValueChange={onChangeHelperAndroid}
						prompt={placeholder}
						enabled={enabled}
					>
						<Picker.Item
							key={`picker-default-item`}
							label={"Options:"}
							value={undefined}
							color={colors.black}
						/>
						{data.map(renderPickerItems)}
					</Picker>
				</View>
			)}
		</View>
	);
};

IndoSelectDropdown.defaultProps = {
	multiSelection: false,
	enabled: true,
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
	androidPickerAdjuster: {
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 40,
		opacity: 0,
		width: "100%",
	},
});