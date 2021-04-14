import React, {useState} from "react";
import {View} from "react-native";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoImagePicker from "../../components/inputs/IndoImagePicker";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const UploadGoalImage: React.FC<IProps> = (props) => {

    const [imageValue, setImageValue] = useState();

    return (
        <SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding]}>

                <View style={{height: "100%", alignItems: "center", justifyContent: "space-around"}}>
                    <View>
                        <IndoImagePicker imageValue={imageValue} setValue={setImageValue}/>
                    </View>
                    <IndoTextInput placeholder="Goal name" />
                    <IndoButton>Submit</IndoButton>
                </View>

        </SafeAreaView>
    );
};

export default UploadGoalImage;
