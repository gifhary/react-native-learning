import React, { useRef, useState } from "react";
import IndoText from "../../components/IndoText";
import SafeAreaView from "react-native-safe-area-view";
import globalStyles from "../../theme/globalStyles";
import { Image, StatusBar, TouchableOpacity, useWindowDimensions, View } from "react-native";
import StepTracker, { EStepTracker } from "../../components/elements/StepTracker";
import { StackNavigationProp } from "@react-navigation/stack";
import Carousel from "react-native-snap-carousel";
import IndoButton from "../../components/buttons/IndoButton";
import colors from "../../theme/colors";
import { Icon } from 'react-native-elements'


interface IProps {
    navigation: StackNavigationProp<any>;
}

interface PageInfo {
    progress: EStepTracker;
    image: string;
    body: string;
    bodyColor: string;
    trackerActiveColor: string;
    trackerInactiveColor: string;
}

/**
 *
 * https://github.com/meliorence/react-native-snap-carousel
 * https://github.com/meliorence/react-native-snap-carousel/blob/master/doc/PROPS_METHODS_AND_GETTERS.md
 * @param props
 * @constructor
 */
const WelcomeCarousel: React.FC<IProps> = (props) => {
    const window = useWindowDimensions();
    const [page, setPage] = useState(EStepTracker.START);

    const carouselRef = useRef();

    function navigateToLandingPage() {
        props.navigation.replace("WelcomeLogin");
    }

    const pageData: PageInfo[] = [
        {
            progress: EStepTracker.START,
            image: "https://via.placeholder.com/500",
            body: "We sell Mutual Funds (This is important to mention) Introduction about our Company",
            bodyColor: colors.white,
            trackerActiveColor: colors.orange,
            trackerInactiveColor: colors.gray,
        },
        {
            progress: EStepTracker.MIDDLE,
            image: "https://via.placeholder.com/500",
            body: "Attract users with our attractive reward system. Tell users we will help them achieve their dreams (inspiring way)",
            bodyColor: colors.orange,
            trackerActiveColor: colors.white,
            trackerInactiveColor: colors.yellow,
        },
        {
            progress: EStepTracker.END,
            image: "https://via.placeholder.com/500",
            body: "About us, we make things simple, easy, safe and fun!",
            bodyColor: colors.white,
            trackerActiveColor: colors.orange,
            trackerInactiveColor: colors.gray,
        },
    ];

    function togglePage(page: EStepTracker): void {
        setPage(page);
    }

    const createPage = (data: any) => {
        const item = data.item;

        return (<View style={{ flex: 1, padding: 5, backgroundColor: item.bodyColor }}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Image source={{ uri: item.image }}
                    style={{ width: "100%", height: window.height / 3, resizeMode: "cover" }} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <IndoText style={{ textAlign: "center" }}>{item.body}</IndoText>
            </View>
        </View>);
    }

    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <View style={{ left:23, top:50, position: "absolute", zIndex: 1 }}>
                <TouchableOpacity onPress={navigateToLandingPage} activeOpacity={0.8} style={{ padding: 5 }}>
                    <IndoText style= {{color:colors.gray}}>Skip</IndoText>
                </TouchableOpacity>
            </View>

            <Carousel
                ref={carouselRef as any}
                data={pageData}
                renderItem={createPage}
                sliderWidth={window.width}
                itemWidth={window.width}
                onSnapToItem={e => togglePage(e)}
            />

            <View style={{height:30, left: 20, position: "absolute", zIndex: 1, bottom: 50 }}>
                <StepTracker
                    progress={page}
                    activeColor={pageData[page].trackerActiveColor}
                    inactiveColor={pageData[page].trackerInactiveColor} />
            </View>

            <View style={{ position: "absolute", zIndex: 1, bottom: 50, right: 20 }}>
                {(page === EStepTracker.END) ? (
                    <IndoButton
                        onPress={navigateToLandingPage}
                        color="yellow"
                        size="sm"
                    >Let's go!</IndoButton>
                ) : (
                    <IndoButton
                        color="yellow"
                        size="sm"
                    >T</IndoButton>
                )}
            </View>
        </SafeAreaView>
    );
};

export default WelcomeCarousel;
