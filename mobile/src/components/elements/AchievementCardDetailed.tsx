import React from "react";
import {
    Image, ImageSourcePropType,
    StyleSheet, TouchableOpacity, useWindowDimensions,
    View,
} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";
import ProfileImage from "./ProfileImage";
import LinearGradient from "react-native-linear-gradient";

interface IProps {
    profileImage: ImageSourcePropType;
    source: ImageSourcePropType;
    header: string;
    subHeader: string;
    labelHeader: string;
    label: string;
    subLabel?: string;
    leftHeader: string;
    leftSubHeader: string;
    rightHeader: string;
    rightSubHeader: string;
    onPress?: any;
}

const AchievementCardDetailed: React.FC<IProps> = (props) => {

    const {
        source,
        profileImage,
        header,
        subHeader,
        labelHeader,
        label,
        subLabel,
        leftHeader,
        leftSubHeader,
        rightHeader,
        rightSubHeader,
        onPress
    } = props;
    const window = useWindowDimensions();

    const renderElement = (
        <View style={[style.container]}>
            <LinearGradient colors={[colors.yellow, colors.orange]}>
                <View style={[style.header]}>
                    <View>
                        <ProfileImage source={profileImage} mod={0.09}/>
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 15}}>
                        <IndoText style={style.headerText}>{header}</IndoText>
                        <IndoText style={style.subHeaderText}>{subHeader}</IndoText>
                    </View>
                </View>

                <View style={[style.footer]}>
                    <View style={{flex: 1}}>
                        <Image source={source} style={style.image}
                        />
                    </View>
                    <View style={{flex: 2, backgroundColor: colors.white, alignItems: "flex-start", padding: 15}}>
                        <IndoText style={{fontWeight: "400", color: colors.black}}>{labelHeader}</IndoText>

                        <View style={{alignItems: "flex-start", paddingVertical: 2}}>
                            <IndoText style={{fontWeight: "700", color: colors.black}}>{label}</IndoText>
                            <IndoText style={{fontWeight: "700", color: colors.black}}>{subLabel}</IndoText>
                        </View>
                        <View style={{
                            paddingVertical: 2,
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-between"
                        }}>
                            <View style={{alignItems: "flex-start"}}>
                                <IndoText style={{color: colors.black, fontWeight: "400"}}>{leftHeader}</IndoText>
                                <IndoText style={{color: colors.orange, fontWeight: "400"}}>{leftSubHeader}</IndoText>
                            </View>
                            <View style={{alignItems: "flex-end"}}>
                                <IndoText style={{color: colors.black, fontWeight: "400"}}>{rightHeader}</IndoText>
                                <IndoText style={{color: colors.orange, fontWeight: "400"}}>{rightSubHeader}</IndoText>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>

    );

    if (onPress) {
        return (
            <TouchableOpacity style={[style.view]} onPress={onPress} activeOpacity={0.8}>
                {renderElement}
            </TouchableOpacity>
        );
    } else {
        return (
            <View style={[style.view, {width: window.width}]}>
                {renderElement}
            </View>
        );
    }
}


AchievementCardDetailed.defaultProps = {}

const style = StyleSheet.create({
    view: {
        flex: 1,
        minHeight: 200,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
    },
    container: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
        overflow: "hidden",
    },
    header: {
        flex: 1,
        minHeight: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    headerText: {
        textAlign: "left",
        color: colors.white,
        fontWeight: "bold"
    },
    subHeaderText: {
        textAlign: "left",
        color: colors.white,
    },
    footer: {
        flexDirection: "row",
        flex: 3,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
});

export default AchievementCardDetailed;