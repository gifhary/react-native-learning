import React, { useState } from "react";
import { Alert, Pressable, StatusBar, StyleSheet, useWindowDimensions, View } from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import { IndoTextInput } from "../../components/inputs/IndoInput";
import IndoButton from "../../components/buttons/IndoButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../theme/colors";

interface IProps {
    navigation: StackNavigationProp<any>;
}

const WelcomeLogin: React.FC<IProps> = (props) => {

    const [email, setEmail] = useState<string>();
    const window = useWindowDimensions();

    function next() {
        props.navigation.replace("WelcomeLandingPage");
    }

    return (
        <SafeAreaView style={[globalStyles.safeArea]}>
            <StatusBar translucent backgroundColor="transparent" />
            <KeyboardAwareScrollView style={[globalStyles.pagePadding]}>
                <View style={{ flex: 1, height: window.height / 5 }} />
                <IndoText style={[globalStyles.h1, { paddingBottom: 10, }]}>Sign In</IndoText>

                <View style={style.inputGroup}>
                    <IndoText style={globalStyles.h4}>Email</IndoText>
                    <IndoTextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="Email..." />
                </View>

                <View style={style.inputGroup}>
                    <IndoText style={globalStyles.h4}>Password</IndoText>
                    <IndoTextInput secureTextEntry={true} autoCompleteType="password" placeholder="Password..." />
                </View>
                <IndoText style={{ color: colors.orange }}>Forgot password?</IndoText>

                <View style={style.center}>
                    <IndoButton color="yellow" size="bg" onPress={next} style={style.button}>Sign In</IndoButton>

                    <Pressable onPress={() => {
                        Alert.alert("Make sign up");
                    }}>
                        <IndoText style={{ color: colors.orange }}>Sign Up</IndoText>
                    </Pressable>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputGroup: {
        paddingVertical: 8
    },
    button: {
        paddingVertical: 25,
    }
});

export default WelcomeLogin;
