import React, {MutableRefObject, ReactNode, useEffect, useLayoutEffect, useRef, useState} from "react";
import {Keyboard, StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "../../theme/colors";
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const placeholder = {
    password: "1234",
}

interface IProps {
    navigation: StackNavigationProp<any>;
}

enum EPageState {
    CURRENT,
    NEW,
}

/**
 * https://github.com/xamous/react-native-smooth-pincode-input
 * @param props
 * @constructor
 */
const ChangePin: React.FC<IProps> = (props) => {

    const [pin, setPin] = useState<string>();
    const [newPin, setNewPin] = useState<string>();
    const [pageState, setPageState] = useState(EPageState.CURRENT);

    const pinInput = useRef(null);

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: "",
            headerBackTitle: ""
        });
    }, [props.navigation]);

    useEffect(() => {
        if (pin && pin.length >= placeholder.password.length) {
            Keyboard.dismiss();
        }
        if (newPin && newPin.length >= placeholder.password.length) {
            Keyboard.dismiss();
        }

    }, [pin, newPin]);

    function next(pageState: EPageState) {
        switch (pageState) {
            case EPageState.CURRENT:
                setPageState(EPageState.NEW);
                setPin("");
                break;
            case EPageState.NEW:
                props.navigation.goBack();
        }
    }

    function _checkCode() {
        if (pin !== placeholder.password) {
            if (pinInput === undefined) {
                return;
            }
            (pinInput.current as any)?.shake().then(() => setPin(""));
            (pinInput.current as any)?.focus();
        } else {
            next(pageState);
        }
    }

    function _submit() {
        //an API call
        props.navigation.goBack();
    }

    function createPinInput(): ReactNode {

        function textChange(code: string) {
            switch (pageState) {
                case EPageState.CURRENT:
                    setPin(code);
                    break;
                case EPageState.NEW:
                    setNewPin(code);
                    (newPin !== undefined && newPin?.length >= 4) && Keyboard.dismiss();
                    break;
                default:
                    setPin(code);
            }
        }

        return (
            <View style={[globalStyles.pagePadding, style.inputContainer]}>
                <View>
                    <IndoText
                        style={globalStyles.h1}>{pageState === EPageState.CURRENT ? "Change Pin" : "New Pin"}</IndoText>
                    <View style={{alignItems: "center"}}>
                        <IndoText style={[globalStyles.h3, style.inputHeader]}>
                            {pageState === EPageState.CURRENT ? (
                                "Enter your old pin"
                            ) : (
                                "Enter new pin"
                            )}
                        </IndoText>
                        <SmoothPinCodeInput
                            ref={pinInput as unknown as MutableRefObject<SmoothPinCodeInput>}
                            placeholder={
                                <View style={style.inputBullets}/>
                            }
                            mask={<View style={style.inputBulletsAfter}/>
                            }
                            maskDelay={1000}
                            password={true}
                            cellStyle={null}
                            cellStyleFocused={null}
                            value={(pageState === EPageState.CURRENT) ? pin as string : newPin as string}
                            onTextChange={textChange}
                            codeLength={4}
                        />
                    </View>
                </View>
                <IndoText style={[globalStyles.h4, {textAlign: "center"}]}>Forgot PIN?</IndoText>
                <View style={{alignItems: "center"}}>
                    <IndoButton onPress={pageState === EPageState.CURRENT ? _checkCode : _submit}>Submit</IndoButton>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={[globalStyles.safeArea]}>
            {createPinInput()}

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    inputContainer: {
        justifyContent: "space-between",
        height: "100%"
    },
    inputHeader: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    inputBullets: {
        width: 20,
        height: 20,
        borderRadius: 25,
        opacity: 0.3,
        backgroundColor: colors.orange,
    },
    inputBulletsAfter: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: colors.orange,
    }
})
export default ChangePin;
