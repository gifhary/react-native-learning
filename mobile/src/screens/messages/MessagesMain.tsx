import IndoText from "../../components/IndoText";
import React, {useLayoutEffect} from "react";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import MessageBubble, {EMessageProfilePosition} from "../../components/elements/MessageBubble";
import {ScrollView, useWindowDimensions, View} from "react-native";
import IndoButton from "../../components/buttons/IndoButton";
import {IndoTextInput} from "../../components/inputs/IndoInput";

interface IProps {
    navigation: StackNavigationProp<any>;
}

const initialMessageRender = {
    text: "Do you have a question? Select from our frequently asked questions below or create your own.",
    source: "https://via.placeholder.com/300",
    app: true,
}

const MessagesMain: React.FC<IProps> = (props) => {

    const window = useWindowDimensions();
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: ""
        });
    }, [props.navigation]);

    return (
        <SafeAreaView style={globalStyles.safeArea}>

            <View style={globalStyles.pagePadding}>
                <IndoText style={globalStyles.h1}>Messages</IndoText>
                <ScrollView style={{height: "72%", borderWidth: 1}}>
                    <MessageBubble text={initialMessageRender.text} source={{uri: initialMessageRender.source}}
                                   imagePosition={initialMessageRender.app ? EMessageProfilePosition.LEFT : EMessageProfilePosition.RIGHT}/>
                </ScrollView>
            </View>
                <View style={{alignItems: "flex-end"}}>
                    <IndoButton>Hello</IndoButton>
                    <IndoButton>Hello</IndoButton>
                    <View style={{width: "61%", paddingHorizontal: 10}}>
                        <IndoTextInput>Ask a Custom Question</IndoTextInput>
                    </View>
                </View>
        </SafeAreaView>
    );
};

export default MessagesMain;
