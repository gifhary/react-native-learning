import React from "react";
import {
	Image, ImageSourcePropType,
	StyleSheet,
	View,
} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";
import globalStyles from "../../theme/globalStyles";
import IndoButton from "../buttons/IndoButton";

interface IProps {
	newGoal?: boolean;
	value?: string | number;
	header?: string;
	headerColor?: string;
	bodyText?: string;
	backgroundImage?: string | ImageSourcePropType;
    onPress?: () => void;
}

/**
 * Component that renders either a hero image with a number value on the top right portion of the component and an optional child element rendered below the hero image
 * @param props newGoal - will conditionally render a full hero image with value displayed on the top right of the image or an image with header and body text
 * @param props value - number that will appear in the top right of the component
 * @param props header - header that will conditionally render if `props.newGoal` is set to true
 * @param props headerColor - header text color
 * @param props bodyText - body text that will conditionally render if `props.newGoal` is set to true
 * @param props backgroundImage - image to be displayed on the component
 * @param props onPress - function that is to be called for the conditional call to action button at the end of the component
 * @constructor
 */
const InvestingCard: React.FC<IProps> = (props) => {

    return (
        <>
            <View style={{position: "relative"}}>
                {!props.newGoal ? (
                    <Image source={props.backgroundImage as ImageSourcePropType} style={style.heroImage}/>
                ): (
                    <View>
                        <Image source={props.backgroundImage as ImageSourcePropType} style={style.heroImage} />
                        <IndoText style={[globalStyles.h2, {color: props.headerColor ? props.headerColor : colors.black, left: 0, right: 0, textAlign: "center", paddingTop: 30, position: "absolute"}]}>Dream Investing</IndoText>
                        <View style={{padding: 30, alignItems: "center"}}>
                            <IndoText style={{textAlign: "center"}}>{props.bodyText}</IndoText>
                            {props.onPress &&
                                <IndoButton style={{paddingTop: 30}} onPress={props.onPress}>Set My Goal</IndoButton>
                            }
                        </View>
                    </View>
                )}
                <View style={style.fuelIcon}>
                    <IndoText style={globalStyles.h4}>{props.value}</IndoText>
                    <Image style={style.image} source={{uri: "https://via.placeholder.com/50"}}/>
                </View>
            </View>
            {props.children}
        </>
    );
}


InvestingCard.defaultProps = {
    newGoal: true,
}

const style = StyleSheet.create({

    heroImage: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
    },

    fuelIcon: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        top: 20,
        right: 20,
        borderRadius: 10,
        backgroundColor: colors.gray,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
	image: {
    	width: 20,
		height: 20,
		marginLeft: 10
	},
});

export default InvestingCard;