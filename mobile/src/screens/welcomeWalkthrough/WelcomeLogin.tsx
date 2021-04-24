import React, {useState} from "react";
import {Alert, StyleSheet, useWindowDimensions, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

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
            <KeyboardAwareScrollView style={[globalStyles.pagePadding]}>
                <View style={{flex: 1, height: window.height/5}} />
                    <View style={style.center}>
                        <IndoText style={style.label}>Email</IndoText>
                        <IndoTextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="Email..."/>
                        <IndoText style={style.label}>Password</IndoText>
                        <IndoTextInput secureTextEntry={true} autoCompleteType="password" placeholder="Password..."/>
                        <IndoText style={{textAlign: "center", paddingVertical: 15}}>Forgot Password?</IndoText>
                    </View>
                    <View style={style.center}>
                        <IndoButton color = "yellow" size="bg" onPress={next}>Sign In</IndoButton>
                        <IndoButton onPress={() => {
                            Alert.alert("Make sign up");
                        }} color="outline-orange"
                        size="bg">Sign Up</IndoButton>
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
    label: {
        alignSelf: "flex-start",
        paddingHorizontal: 15
    }
});

export default WelcomeLogin;
