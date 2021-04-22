import IndoText from "../../components/IndoText";
import React, {useEffect, useLayoutEffect, useState} from "react";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import MessageBubble, {EMessageProfilePosition} from "../../components/elements/MessageBubble";
import {Pressable, ScrollView, StyleSheet, View} from "react-native";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import colors from "../../theme/colors";
import KeyboardStickyView from 'rn-keyboard-sticky-view';
import {cloneDeep} from "lodash";

interface IProps {
    navigation: StackNavigationProp<any>;
}

const initialMessageRender = {
    text: "Do you have a question? Select from our frequently asked questions below or create your own.",
    source: "https://via.placeholder.com/300",
    app: true,
}

const placeholder = [
    {
        header: "Should I liquidate my fund now?",
        key: 0,
    },
    {
        header: "Am I making Money?",
        key: 1,
    },
]

const MessagesMain: React.FC<IProps> = (props) => {

    const [messageList, setMessageList] = useState([initialMessageRender]);
    const [questionList, setQuestionList] = useState(placeholder);

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: ""
        });
    }, [props.navigation]);

    useEffect(() => {
        console.log(messageList);
    }, [messageList]);

    function createQuestionElement(item: any, index: number) {
        function _onPress() {
            const messageCopy = cloneDeep(messageList);
            messageCopy.push({
                text: item.header,
                source: "https://via.placeholder.com/300",
                app: false,
            });
            setMessageList(messageCopy);
        }


        return (
            <Pressable key={`question-element-${index}`} onPress={_onPress} style={style.questionElement}>
                <IndoText style={style.questionElementText}>{item.header}</IndoText>
            </Pressable>
        );
    }


    return (
        <SafeAreaView style={[globalStyles.safeArea]}>
            <KeyboardStickyView style={{height: "100%"}}>

                <View style={{width: "90%"}}>
                    <IndoText style={globalStyles.h1}>Messages</IndoText>
                    <ScrollView style={{height: "71%", width: "100%"}}>
                        {messageList.length > 0 && messageList.map((item, index) => {
                            return (
                                <MessageBubble
                                    key={`message-bubble-${index}`}
                                    text={item.text}
                                    source={{uri: item.source}}
                                    imagePosition={item.app ? EMessageProfilePosition.LEFT : EMessageProfilePosition.RIGHT}
                                />
                            );
                        })
                        }
                    </ScrollView>
                </View>
                <View style={{alignItems: "flex-end", width: "100%"}}>
                    {questionList.length > 0 && questionList.map(createQuestionElement)}
                    <View style={{width: "61%", paddingHorizontal: 10}}>
                        <IndoTextInput placeholder="Ask a Custom Question"/>
                    </View>
                </View>
                <View style={{height: 100}}/>
            </KeyboardStickyView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    questionElement: {
        borderColor: colors.orange,
        borderRadius: 20,
        borderWidth: 1,
        minHeight: 40,
        minWidth: 230,
        justifyContent: "center",
        paddingHorizontal: 10,
        margin: 5
    },
    questionElementText: {
        textAlign: "right",
    }
});

export default MessagesMain;
