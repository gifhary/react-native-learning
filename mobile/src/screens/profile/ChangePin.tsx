import React, {useState} from "react";
import {View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "../../theme/colors";
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

interface IProps {
    navigation: StackNavigationProp<any>;
}

const ChangePin: React.FC<IProps> = (props) => {

    const [pin, setPin] = useState<string>();

    function next() {
        props.navigation.goBack();
    }

    return (
        <SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding, {justifyContent: "space-between"}]}>
            <View>
                <IndoText style={globalStyles.h1}>New Pin</IndoText>
                <View style={{alignItems: "center"}}>
                    <IndoText style={[globalStyles.h3, {paddingHorizontal: 10, paddingTop: 20}]}>Enter your old
                        pin</IndoText>
                    <SmoothPinCodeInput
                        placeholder={
                            <View style={{
                                width: 10,
                                height: 10,
                                borderRadius: 25,
                                opacity: 0.3,
                                backgroundColor: colors.orange,
                            }}/>
                        }
                        mask={<View style={{
                            width: 10,
                            height: 10,
                            borderRadius: 25,
                            backgroundColor: colors.orange,
                        }}/>
                        }
                        maskDelay={1000}
                        password={true}
                        cellStyle={null}
                        cellStyleFocused={null}
                        value={pin}
                        onTextChange={(code: any) => setPin(code)}
                    />
                </View>

            </View>
            <View style={{alignItems: "center"}}>
                <IndoButton onPress={next}>Submit</IndoButton>
            </View>
        </SafeAreaView>
    );
};

export default ChangePin;
