import React, {useLayoutEffect, useState} from "react";
import {View} from "react-native";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoImagePicker from "../../components/inputs/IndoImagePicker";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

interface IProps {
    navigation: StackNavigationProp<any>;
}

const UploadGoalImage: React.FC<IProps> = (props) => {

    const [imageValue, setImageValue] = useState();

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: "",
            headerBackTitle: "",
        });
    }, [props.navigation]);

    return (
        <SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding]}>
            <KeyboardAwareScrollView>

                <View style={{height: "100%", alignItems: "center", justifyContent: "space-around"}}>
                    <View>
                        <IndoImagePicker imageValue={imageValue} setValue={setImageValue}/>
                    </View>
                    <IndoTextInput placeholder="Goal name"/>
                </View>
                <View style={{paddingTop: "20%", alignItems: "center"}}>
                    <IndoButton>Submit</IndoButton>
                </View>
            </KeyboardAwareScrollView>

        </SafeAreaView>
    );
};

export default UploadGoalImage;
