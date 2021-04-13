import React, {useLayoutEffect, useState} from "react";
import {ImageSourcePropType, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {StackNavigationProp} from "@react-navigation/stack";
import OffsetImageHeader from "../../components/elements/OffsetImageHeader";
import IndoRadioButton from "../../components/inputs/toggles/IndoRadio";
import IndoButton from "../../components/buttons/IndoButton";

interface IProps {
    navigation: StackNavigationProp<any>;
}

interface IBankInfo {
    firstName: string,
    lastName: string,
    bankNumber: string
    source: string | ImageSourcePropType;
}

const placeholder: IBankInfo[] = [
    {
        firstName: "Jenny",
        lastName: "Luna",
		bankNumber: "0542252456",
		source: "https://via.placeholder.com/300",
    },
    {
        firstName: "Jenny",
        lastName: "Luna",
		bankNumber: "2511246522",
		source: "https://via.placeholder.com/300",
    },
];


const ProfileBankAccountList: React.FC<IProps> = (props) => {

    const [bankAccount, setBankAccount] = useState("0542252456");
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: "",
            headerBackTitle: "",

        });
    }, [props.navigation]);

    function createBankAccount(item: IBankInfo, index: number) {
    	return (
    		<View key={`bank-account-${index}`}>
                <OffsetImageHeader source={{uri: item.source} as ImageSourcePropType}
                                   header={`${item.firstName} ${item.lastName}`}
                                   subHeader={item.bankNumber}
                                   rightElement={
                                       <IndoRadioButton
                                           value={bankAccount === item.bankNumber}
                                           setValue={() => setBankAccount(item.bankNumber)}
                                       />
                                   }
                />
            </View>
		);
	}
    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <KeyboardAwareScrollView style={globalStyles.pagePadding}>
                <IndoText style={globalStyles.h1}>Bank Account</IndoText>
				{placeholder.map(createBankAccount)}
                <View style={{alignItems: "center", paddingVertical: 30}}>
                    <IndoButton>+ Add new Account</IndoButton>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default ProfileBankAccountList;
