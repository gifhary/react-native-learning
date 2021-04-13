import React, {ReactNode} from "react";
import {
	ImageSourcePropType, Pressable,
	StyleSheet, useWindowDimensions,
	View,
} from "react-native";
import IndoText from "../IndoText";
import ProfileImage from "./ProfileImage";
import globalStyles from "../../theme/globalStyles";

export interface OffsetImageHeaderProps {
    source: string | ImageSourcePropType;
    header: string;
    subHeader?: string;
    onPress?: any;
    rightElement?: ReactNode;
}

const OffsetImageHeader: React.FC<OffsetImageHeaderProps> = (props) => {

    const {source, header, subHeader, onPress, rightElement} = props;

    const bodyContent: ReactNode = (
        <View style={{flexDirection: "row", alignItems: "center", width: "100%"}}>
            <View style={style.image}>
                <ProfileImage source={source as ImageSourcePropType} mod={0.1}/>
            </View>
            <View style={style.body}>
                <IndoText style={style.header}>{header}</IndoText>
                {subHeader && <IndoText style={style.subHeader}>{subHeader}</IndoText>}
            </View>
            {onPress && (
                <View style={{justifyContent: "center"}}>
                    <IndoText style={globalStyles.h4}>{">"}</IndoText>
                </View>
            )}
            {rightElement &&
                    rightElement
            }
        </View>
    );

    if (onPress) {
		return (
			<Pressable onPress={onPress} style={[style.view]}>
				{bodyContent}
			</Pressable>
		);
	} else {
		return (
			<View style={[style.view]}>
				{bodyContent}
			</View>
		);
	}
}


OffsetImageHeader.defaultProps = {}

const style = StyleSheet.create({
    view: {
        flexDirection: "row",
        paddingVertical: 25,
        minHeight: 90,
    },
    body: {
        flexDirection: "column",
        width: "80%",
        paddingHorizontal: 15,
    },
    image: {},
    header: {
        textAlign: "left",
        fontWeight: "bold"
    },
    subHeader: {
        textAlign: "left",
    }
});

export default OffsetImageHeader;