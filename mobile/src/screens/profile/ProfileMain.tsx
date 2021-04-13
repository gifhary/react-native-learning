import React, {useLayoutEffect} from "react";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ImageSourcePropType, View} from "react-native";
import OffsetImageHeader, {OffsetImageHeaderProps} from "../../components/elements/OffsetImageHeader";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
    navigation: StackNavigationProp<any>;
}


const placeholder = {
    firstName: "Jenny",
    lastName: "Luna",
    email: "jenny@gmail.com",

}

const ProfileMain: React.FC<IProps> = (props) => {

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerShown: false,
        });
    }, [props.navigation]);

    const renderTabs: OffsetImageHeaderProps[] = [
        {
            header: "Get Crystals!",
            subHeader: "Invite Friends",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push("ProfileGetCrystals"),
        },
        {
            header: "Investing",
            subHeader: "Balances, Status, Gold",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push(""),
        },
        {
            header: "Account & Settings",
            subHeader: "Information about you",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push("AccountSettings"),
        },
        {
            header: "Bank Connections",
            subHeader: "Information about you",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push("ProfileBankAccountList"),
        },
        {
            header: "Help",
            subHeader: "Help center and support",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push(""),
        },
        {
            header: "Log Out",
            subHeader: "Exit account",
            source: "https://via.placeholder.com/300",
            onPress: () => props.navigation.push(""),
        },
    ];

    return (
        <SafeAreaView style={[globalStyles.safeArea]}>
            <KeyboardAwareScrollView style={globalStyles.pagePadding}>
                <View>
                    <IndoText style={globalStyles.h1}>{placeholder.firstName} {placeholder.lastName}</IndoText>
                    <IndoText>{placeholder.email}</IndoText>
                </View>
                <View>
                    {renderTabs.map((item, index) =>
                        <OffsetImageHeader key={`profile-item-${index}`} source={{uri: item.source} as ImageSourcePropType} header={item.header}
                                           subHeader={item.subHeader}
                                           onPress={item.onPress}/>
                    )}
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default ProfileMain;
