import {SafeAreaView, View} from "react-native";
import React, {useEffect, useState} from "react";
import globalStyles from "../theme/globalStyles";
import IndoText from "../components/IndoText";
import IndoButton from "../components/buttons/IndoButton";
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
import AchievementCard from "../components/elements/AchievementCard";
import AchievementCardDetailed from "../components/elements/AchievementCardDetailed";
import ProductsCard from "../components/elements/ProductsCard";
import IndoImagePicker from "../components/inputs/IndoImagePicker";
import {ImagePickerResponse} from "react-native-image-picker";

const profileTest = require("../../assets/icons/Artboard_1_copy_188x.png");
const car2Test = require("../../assets/icons/download.jpeg");

const dummyData = [
    {label: "test", value: "test"},
    {label: "nest", value: "nest"},
    {label: "best", value: "best"},
    {label: "rest", value: "rest"},
];

enum ERadio {
    test1,
    test2
}

const DemoPage: React.FC = () => {

    const [test1, setTest1] = useState([]);
    const [test2, setTest2] = useState([]);
    const [test3, setTest3] = useState(false);
    const [test4, setTest4] = useState<ERadio | undefined>(undefined);

    const [sliderTest, setSliderTest] = useState(0);
    const [testImageValue, setTestImageValue] = useState<ImagePickerResponse>();

    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <KeyboardAwareScrollView>

                <IndoText style={globalStyles.h1}>Buttons</IndoText>

                <View style={{alignItems: "center"}}>

                    <IndoText style={{paddingVertical: 10}}>Buttons</IndoText>
                    <IndoButton color={"orange"} onPress={() => {
                    }}>Primary Button</IndoButton>
                    <IndoButton color={"outline-orange"} onPress={() => {
                    }}>Border Variant</IndoButton>
                    <IndoButton color={"yellow"} onPress={() => {
                    }}>Secondary Button</IndoButton>
                    <IndoButton color={"outline-yellow"} onPress={() => {
                    }}>Secondary Button</IndoButton>
                    <IndoButton disabled onPress={() => {
                    }}>Option Unavailable</IndoButton>
                    <IndoButton color={"outline-gray"} onPress={() => {
                    }}>Border Variant</IndoButton>
                    <IndoButton color={"yellow"} bubble={"!"} onPress={() => {
                    }}>Alert Button</IndoButton>
                    <IndoButton color={"outline-yellow"} bubble={"!"} onPress={() => {
                    }}>Alert Variant</IndoButton>

                </View>

                <View>
                    <View style={{alignItems: "center"}}>
                        <IndoText style={{paddingVertical: 10}}>Field Inputs</IndoText>
                    </View>

                    <View style={{paddingHorizontal: 10}} >
                        <IndoLabel>Test Label</IndoLabel>
                        <IndoTextInput placeholder="Test Placeholder..."/>
                    </View>

                    <IndoLabel>Test Multi Dropdown</IndoLabel>
                    <IndoSelectDropdown value={test1} setValue={setTest1} data={dummyData} multiSelection={true}
                                        placeholder="Test Dropdown"/>

                    <IndoLabel>Test Dropdown</IndoLabel>
                    <IndoSelectDropdown value={test2} setValue={setTest2} data={dummyData}/>
                </View>

                <View>
                    <View style={{alignItems: "center"}}>
                        <IndoText style={{paddingVertical: 10}}>Checkbox/Radios</IndoText>
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
                        <IndoText style={{paddingVertical: 10}}>Sliders</IndoText>
                        <IndoSlider controlledValue={sliderTest} setValue={setSliderTest} label="Slider Name"
                                    valueSuffix="%"/>
                    </View>
                </View>

                <View>
                    <View style={{alignItems: "center"}}>
                        <IndoText style={{paddingVertical: 10}}>Step Tracker</IndoText>
                        <StepTracker progress={EStepTracker.START}/>
                        <StepTracker progress={EStepTracker.MIDDLE}/>
                        <StepTracker progress={EStepTracker.END}/>
                    </View>
                </View>

                <View>
                    <View style={{alignItems: "center", padding: 15}}>
                        <IndoText style={{paddingVertical: 10}}>Progress Bar</IndoText>
                        <ProgressBar progress={1} total={3}/>
                        <ProgressBar progress={50} total={100}/>
                        <ProgressBar progress={7} total={9}/>
                    </View>
                </View>

                <View>
                    <View style={{alignItems: "center"}}>
                        <IndoText style={{paddingVertical: 10}}>Profile Image</IndoText>
                        <ProfileImage source={profileTest}/>
                    </View>
                </View>

                <View>
                    <View style={{alignItems: "center"}}>
                        <IndoText style={{paddingVertical: 10}}>Messages</IndoText>
                        <MessageBubble source={profileTest}
                                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nisi, euismod ut massa nec, porta sollicitudin ex."/>
                        <MessageBubble source={profileTest}
                                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nisi, euismod ut massa nec, porta sollicitudin ex."
                                       imagePosition={EMessageProfilePosition.LEFT}/>
                    </View>
                </View>

                <View>
                    <View style={{alignItems: "center"}}>
                        <IndoText style={{paddingVertical: 10}}>Achievement Card</IndoText>
                        <AchievementCard source={car2Test} label="Test Label"/>
                    </View>
                </View>

                <View>
                    <View style={{alignItems: "center"}}>
                        <IndoText style={{paddingVertical: 10}}>Achievement Card Detailed</IndoText>
                        <AchievementCardDetailed
                            profileImage={profileTest}
                            source={car2Test}
                            header="Test Header"
                            subHeader="Test text for subheader..."
                            labelHeader="Name"
                            label="Lorem Ipsum Label"
                            subLabel="Sub Label"
                            leftHeader="Left Label"
                            leftSubHeader="Left SubHeader"
                            rightHeader="Right Label"
                            rightSubHeader="Right SubHeader"
                        />
                    </View>
                </View>

                <View style={{width: "100%"}}>
                    <View style={{alignItems: "center"}}>
                        <IndoText style={{paddingVertical: 10}}>Products Card</IndoText>
                        <ProductsCard
                            header="Name"
                            subHeader="Lorem Ipsum Equity Fund"
                            leftHeader="Left Label"
                            leftSubHeader="Left SubHeader"
                            rightHeader="Right Label"
                            rightSubHeader="Right SubHeader"
                        />
                    </View>
                </View>

                <View style={{alignItems: "center"}}>
                    <IndoText style={{paddingBottom: 10}}>Image Picker</IndoText>
                    <IndoImagePicker imageValue={testImageValue} setValue={setTestImageValue} />
                </View>

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default DemoPage