import React from "react";
import {
	ImageSourcePropType,
	StyleSheet, useWindowDimensions,
	View,
} from "react-native";
import colors from "../../theme/colors";
import ProfileImage from "./ProfileImage";
import IndoText from "../IndoText";

interface IProps {
	source: ImageSourcePropType;
	text: string;
	imagePosition?: EMessageProfilePosition,
}

export enum EMessageProfilePosition {
	LEFT,
	RIGHT
}

const MessageBubble: React.FC<IProps> = (props) => {

	const window = useWindowDimensions();
	const {source, text, imagePosition} = props;

	return (
		<View style={[style.view, {width: window.width, padding: 15}]}>
			{imagePosition === EMessageProfilePosition.LEFT && <View style={style.image}>
                <ProfileImage source={source} mod={0.15}/>
            </View>}
			<View style={style.talkBubble}>
				<View style={imagePosition === EMessageProfilePosition.LEFT ? style.talkBubbleLeft : style.talkBubbleRight}>
					<IndoText style={{textAlign: "left"}}>{text}</IndoText>
				</View>
			</View>
			{imagePosition === EMessageProfilePosition.RIGHT && <View style={style.image}>
				<ProfileImage source={source} mod={0.15}/>
			</View>}
		</View>
	);
}


MessageBubble.defaultProps = {
	imagePosition: EMessageProfilePosition.RIGHT,
}

const style = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	talkBubble: {
		flex: 1,
	},
	talkBubbleRight: {
		marginHorizontal: 10,
		minHeight: 80,
		padding: 15,
		backgroundColor: colors.white,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 25,
		shadowColor: colors.black,
		shadowOffset: {
			height: 2,
			width: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,
	},
	talkBubbleLeft: {
		marginHorizontal: 10,
		minHeight: 80,
		padding: 15,
		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 25,
		shadowColor: colors.black,
		shadowOffset: {
			height: 2,
			width: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,
	},
	image: {flexDirection: "column",
		alignSelf: "flex-end"
	}
});

export default MessageBubble;