import React, { useState } from "react";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { EAchievements } from "./GoalsStep1";
import { StyleSheet, TouchableWithoutFeedback, useWindowDimensions, View } from "react-native";
import { IndoTextInput } from "../../components/inputs/IndoInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IndoButton from "../../components/buttons/IndoButton";
import CircleButton from "../../components/buttons/CircleButton";
import colors from "../../theme/colors";
import NumberKeyboard from "../../components/keyboard/NumberKeyboard";
import MoneyInput from "../../components/inputs/MoneyInput";

interface IProps {
    route?: RouteProp<{ choice: EAchievements }, "GoalsStep2">;
    navigation: StackNavigationProp<any>;
}

function getValue(choice: EAchievements) {
    switch (choice) {
        case EAchievements.CAR:
            return "$20,000";
        case EAchievements.NEW_HOME:
            return "$1,000,000";
        case EAchievements.VACATION:
            return "$5,000";
        case EAchievements.WEDDING:
            return "$30,000";
        case EAchievements.BABY:
            return "$500,000";
        case EAchievements.EMERGENCY:
            return "$5,000";
        case EAchievements.EATING_OUT:
            return "$100";
        case EAchievements.SET_OWN_GOAL:
        default:
            return "$400,000";
    }
}

const GoalsStep2: React.FC<IProps> = (props) => {
    const window = useWindowDimensions();
    const route = props?.route?.params?.choice;
    const [investment, setInvestment] = useState("");
    const amountLimit = 11;

    //if user paste certain thing in the textInput other than number, auto remove
    function setInvestmentAmount(e: string) {
        //sanitize, remove non number stuff
        const onlyNumber = e.replace(/[^0-9]/g, '');

        if (onlyNumber.length <= amountLimit) {
            setInvestment(onlyNumber);
        }
    }

    function next(): void {
        props.navigation.navigate("GoalsStep3", { ...props.route?.params, goalAmount: investment });
    }

    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <View style={[globalStyles.pagePadding, style.view]}>
                <View>
                    <IndoText style={[globalStyles.h1, style.alignCenter]}>How much will your goal cost?</IndoText>
                    <IndoText style={style.bodyText}>We estimate {route} will
                        cost {getValue(route)}</IndoText>
                </View>

                <View style={[style.input, { width: window.width * 0.5 }]}>
                    <MoneyInput amount={investment} />
                </View>

                <NumberKeyboard text={investment} setText={setInvestmentAmount} />

                <View style={style.alignCenter}>
                    <IndoButton disabled={investment === ""} onPress={next}>Continue</IndoButton>
                </View>
            </View>

        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    view: {
        width: "100%",
        height: "50%",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    bodyText: {
        textAlign: "center",
        paddingVertical: 10
    },
    alignCenter: {
        alignItems: "center",
    },
    input: {
        paddingVertical: 15,
    },
});

export default GoalsStep2;
