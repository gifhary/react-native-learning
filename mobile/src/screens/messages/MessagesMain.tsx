import IndoText from "../../components/IndoText";
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import MessageBubble, {EMessageProfilePosition} from "../../components/elements/MessageBubble";
import {KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, View} from "react-native";
import {IndoTextInput} from "../../components/inputs/IndoInput";
import colors from "../../theme/colors";

interface IProps {
    navigation: StackNavigationProp<any>;
}

const initialMessageRender = {
    text: "Do you have a question? Select from our frequently asked questions below or create your own.",
    source: "https://via.placeholder.com/300",
    app: true,
}

const placeholderQuestions = [
    {
        header: "Should I liquidate my fund now?",
        key: 0,
    },
    {
        header: "Am I making Money?",
        key: 1,
    },
]

const placeholderResponse = [
    {
        text: "Great question! This is the answer to your question.",
        source: "https://via.placeholder.com/300",
        app: true,
        key: 0,
    },
    {
        text: "Great question 2! This is the answer to your question.",
        source: "https://via.placeholder.com/300",
        app: true,
        key: 1,
    },
]

const MessagesMain: React.FC<IProps> = (props) => {

    const [messageList, setMessageList] = useState<any>([]);
    const [questionList, setQuestionList] = useState(placeholderQuestions);
    const [messageResponse, setMessageResponse] = useState<any>();

    const scrollViewRef = useRef(ScrollView);

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: ""
        });
    }, [props.navigation]);

    // initial render for first message on 
    useEffect(() => {
        setTimeout(() => setMessageList([initialMessageRender]), 1000);
        return () => clearTimeout(setTimeout(() => setMessageList([initialMessageRender]), 1000));
    }, []);

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].app === false) {
            setTimeout(() => setMessageList([...messageList, messageResponse]), 1000);
        }
        return () => clearTimeout(setTimeout(() => setMessageList([...messageList, messageResponse])));
    }, [messageResponse]);

    function createQuestionElement(item: any, index: number) {

        function _onPress() {
            setMessageList([...messageList, {
                text: item.header,
                source: "https://via.placeholder.com/300",
                app: false,
            }]);
            setQuestionList(questionList.filter(selection => selection !== item));
            createNewResponse(item);
        }

        return (
            <Pressable key={`question-element-${index}`} onPress={_onPress} style={style.questionElement}>
                <IndoText style={style.questionElementText}>{item.header}</IndoText>
            </Pressable>
        );
    }

    function createNewMessage(item: any) {
        setMessageResponse([]);
        setMessageList([...messageList, {
            text: item.nativeEvent.text,
            source: "https://via.placeholder.com/300",
            app: false,
        }]);
        if (questionList.filter(selection => selection !== item).length < 1) {
            setMessageResponse({
                text: `Sorry, I don't know the answer to "${item.nativeEvent.text}".`,
                source: "https://via.placeholder.com/300",
                app: true,
            });
        } else {
            setMessageResponse({
                text: `Sorry, I don't know the answer to "${item.nativeEvent.text}".`,
                source: "https://via.placeholder.com/300",
                app: true,
            });
        }
    }

    function createNewResponse(item: any) {
        const preppedResponse = placeholderResponse.filter(selection => selection.key === item.key);
        if (preppedResponse.length > 0) {
            setMessageResponse(preppedResponse[0]);
        } else {
            setMessageResponse({
                text: "Sorry, I don't know the answer to " + item.text,
                source: "https://via.placeholder.com/300",
                app: true,
            });
        }
    }

    return (
        <SafeAreaView style={[globalStyles.safeArea]}>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: "100%", justifyContent: "space-between"}}>
            <View style={{flex: 1, width: "100%", paddingHorizontal: 5}}>
                    <IndoText style={globalStyles.h1}>Messages</IndoText>
                    <ScrollView
                        ref={scrollViewRef as any}
                        onContentSizeChange={(contentWidth, contentHeight)=> {scrollViewRef.current.scrollToEnd({animated: true})}}
                        style={{width: "100%"}}
                    >
                        {messageList.length > 0 && messageList.map((item: any, index: number) => {
                            return (
                                <MessageBubble
                                    key={`message-bubble-${index}`}
                                    text={item?.text}
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
                        <IndoTextInput
                            placeholder="Ask a Custom Question"
                            onSubmitEditing={createNewMessage}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
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
        margin: 5,
    },
    questionElementText: {
        textAlign: "right",
    }
});

export default MessagesMain;
