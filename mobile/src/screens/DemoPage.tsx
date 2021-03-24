import {SafeAreaView, View} from "react-native";
import React, {useState} from "react";
import globalStyles from "../theme/globalStyles";
import IndoText from "../components/IndoText";
import IndoButton from "../components/buttons/IndoButton";
import colors from "../theme/colors";
import {IndoTextInput} from "../components/inputs/IndoInput";
import IndoLabel from "../components/inputs/IndoLabel";
import {IndoSelectDropdown} from "../components/inputs/SelectDropdown/IndoSelectDropdown";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import IndoCheckBox from "../components/inputs/toggles/IndoCheckbox";
import IndoRadioButton from "../components/inputs/toggles/IndoRadio";
import StepTracker, {EStepTracker} from "../components/elements/StepTracker";
import IndoSlider from "../components/inputs/Slider/IndoSlider";
import ProgressBar from "../components/elements/ProgressBar";
import ProfileImage from "../components/elements/ProfileImage";
import MessageBubble, {EMessageProfilePosition} from "../components/elements/MessageBubble";
const profileTest = require("../../assets/icons/Artboard_1_copy_188x.png");

const dummyData = [
	{label: "test", value: "test"},
	{label: "nest", value: "nest"},
	{label: "best", value: "best"},
	{label: "pest", value: "pest"},
];

enum ERadio {
	test1,
	test2
}
const DemoPage: React.FC = () => {

	const [test1, setTest1] = useState([]);
	const [test2, setTest2] = useState([]);
	const [test3, setTest3] = useState(false);
	const [test4, setTest4] = useState<ERadio| undefined>(undefined);

	const [sliderTest, setSliderTest] = useState(0);

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<KeyboardAwareScrollView>

				<View>
					<View style={{alignItems: "center"}}>
						<IndoText style={{color: colors.navy, paddingVertical: 10}}>Messages</IndoText>
						<MessageBubble source={profileTest} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nisi, euismod ut massa nec, porta sollicitudin ex." />
						<MessageBubble source={profileTest} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nisi, euismod ut massa nec, porta sollicitudin ex." imagePosition={EMessageProfilePosition.LEFT}/>
					</View>
				</View>

				<View>
					<View style={{alignItems: "center"}}>
						<IndoText style={{color: colors.navy, paddingVertical: 10}}>Profile Image</IndoText>
						<ProfileImage source={profileTest} />
					</View>
				</View>

				<View>
					<View style={{alignItems: "center"}}>
						<IndoText style={{color: colors.navy, paddingVertical: 10}}>Progress Bar</IndoText>
						<ProgressBar progress={50} total={100} />
					</View>
				</View>

				<View>
					<View style={{alignItems: "center"}}>
						<IndoText style={{color: colors.navy, paddingVertical: 10}}>Sliders</IndoText>
						<IndoSlider controlledValue={sliderTest} setValue={setSliderTest} label="Slider Name" valueSuffix="%"/>
					</View>
				</View>

				<View>
					<View style={{alignItems: "center"}}>
						<IndoText style={{color: colors.navy, paddingVertical: 10}}>Checkbox/Radios</IndoText>
					</View>

					<IndoCheckBox value={test3} setValue={setTest3}>Checkbox Label</IndoCheckBox>

					<View style={{flexDirection: "row", justifyContent: "space-between", width: "50%"}}>
						<IndoRadioButton
							value={test4 === ERadio.test1}
							setValue={() => setTest4(ERadio.test1)}
						>
							Radio 1
						</IndoRadioButton>
						<IndoRadioButton
							value={test4 === ERadio.test2}
							setValue={() => setTest4(ERadio.test2)}
						>
							Radio 2
						</IndoRadioButton>
					</View>
				</View>

				<View>
					<View style={{alignItems: "center"}}>
						<IndoText style={{color: colors.navy, paddingVertical: 10}}>Step Tracker</IndoText>
						<StepTracker progress={EStepTracker.START} />
						<StepTracker progress={EStepTracker.MIDDLE} />
						<StepTracker progress={EStepTracker.END} />
					</View>
				</View>

			<View>
				<View style={{alignItems: "center"}}>
					<IndoText style={{color: colors.navy, paddingVertical: 10}}>Field Inputs</IndoText>
				</View>

				<IndoLabel>Test Label</IndoLabel>
				<IndoTextInput placeholder="Test Placeholder..." />

				<IndoLabel>Test Multi Dropdown</IndoLabel>
				<IndoSelectDropdown value={test1} setValue={setTest1} data={dummyData} multiSelection={true} placeholder="Test Dropdown" />

				<IndoLabel>Test Dropdown</IndoLabel>
				<IndoSelectDropdown value={test2} setValue={setTest2} data={dummyData} />
			</View>

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
				<IndoButton color={"outline-navy"} bubble={"!"} onPress={() => {}}>Hello</IndoButton>

			</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	)
}

export default DemoPage