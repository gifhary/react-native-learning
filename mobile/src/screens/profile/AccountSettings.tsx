import React, {useLayoutEffect} from "react";
import {ImageSourcePropType, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import OffsetImageHeader, {OffsetImageHeaderProps} from "../../components/elements/OffsetImageHeader";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

interface IProps {
    navigation: StackNavigationProp<any>;
}

const AccountSettings: React.FC<IProps> = (props) => {

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: "",
            headerBackTitle: "",
        });
    }, [props.navigation]);

    const renderTabs: OffsetImageHeaderProps[] = [
        {
            header: "Change Email",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push("ChangeEmail"),
        },
        {
            header: "Change Telephone Number",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push(""),
        },
        {
            header: "Change PIN",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push("ChangePin"),
        },
        {
            header: "Change Bank Account",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push(""),
        },
        {
            header: "Heir Notification",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push(""),
        },
        {
            header: "Connected Devices",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push(""),
        },
        {
            header: "Terms and Conditions",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push(""),
        },
        {
            header: "Privacy Policy",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push(""),
        },
    ];

    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <KeyboardAwareScrollView style={globalStyles.pagePadding}>

                <IndoText style={globalStyles.h1}>Account & Settings</IndoText>
                <View>
                    {renderTabs.map((item, index) =>
                        <OffsetImageHeader key={`account-settings-${index}`} source={{uri: item.source} as ImageSourcePropType} header={item.header}
                                           subHeader={item.subHeader}
                                           onPress={item.onPress}/>
                    )}
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default AccountSettings;
