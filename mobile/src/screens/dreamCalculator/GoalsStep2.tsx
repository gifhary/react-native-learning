import React, {useState} from "react";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {EAchievements} from "./GoalsStep1";
import {StyleSheet, View} from "react-native";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import IndoButton from "../../components/buttons/IndoButton";

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

    const route = props?.route?.params?.choice;
	const [investment, setInvestment] = useState<string>();

	function setInvestmentAmount(e: string) {
		setInvestment(e);
	}

	function next(): void {
		props.navigation.navigate("GoalsStep3", {...props.route?.params, goalAmount: investment});
	}

    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <KeyboardAwareScrollView style={[globalStyles.pagePadding]} contentContainerStyle={style.view}>
                <View>
                    <IndoText style={[globalStyles.h1, style.alignCenter]}>How much will your goal cost?</IndoText>
                    <IndoText style={style.bodyText}>We estimate {route} will
                        cost {getValue(route)}</IndoText>
                </View>
                <IndoTextInput keyboardType="decimal-pad" value={investment} onChangeText={setInvestmentAmount} />
                <View style={style.alignCenter}>
                    <IndoButton disabled={investment === undefined} onPress={next}>Continue</IndoButton>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    view: {
    	width: "100%",
    	height: "50%",
		justifyContent: "space-between"
    },
	bodyText: {
    	textAlign: "center",
		paddingVertical: 10
	},
	alignCenter: {
    	alignItems: "center",
	}
});

export default GoalsStep2;
