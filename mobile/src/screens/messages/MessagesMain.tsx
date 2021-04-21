import IndoText from "../../components/IndoText";
import React, {useLayoutEffect} from "react";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import MessageBubble, {EMessageProfilePosition} from "../../components/elements/MessageBubble";
import {View} from "react-native";
import IndoButton from "../../components/buttons/IndoButton";

interface IProps {
	navigation: StackNavigationProp<any>;
}

const placeholder = {
	text: "Do you have a question? Select from our frequently asked questions below or create your own.",
	source: "https://via.placeholder.com/300",
	app: true,
}

const MessagesMain: React.FC<IProps> = (props) => {

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: ""
		});
	}, [props.navigation]);

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			<KeyboardAwareScrollView style={globalStyles.pagePadding}>
			<IndoText style={globalStyles.h1}>Messages</IndoText>
				<View>
					<View>
						<MessageBubble text={placeholder.text} source={{uri: placeholder.source}} imagePosition={placeholder.app ? EMessageProfilePosition.LEFT : EMessageProfilePosition.RIGHT} />
					</View>
					<View>
						<IndoButton>Hello</IndoButton>
					</View>
				</View>

			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default MessagesMain;
