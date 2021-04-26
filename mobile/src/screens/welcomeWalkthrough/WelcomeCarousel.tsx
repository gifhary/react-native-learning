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
import Circle from "../../components/shapes/Circle";

interface IProps {
    navigation: StackNavigationProp<any>;
}

interface PageInfo {
    progress: EStepTracker;
    image: string;
    body: string;
    mainColor: string;
    secondColor: string;
    thirdColor: string;
    leftCircleScale: number;
    rightCircleScale: number;
    leftCirclePos: number;
    rightCirclePos: number;
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
    const [skipColor, setSkipColor] = useState(colors.gray);

    const carouselRef = useRef();

    function navigateToLandingPage() {
        props.navigation.replace("WelcomeLogin");
    }

    const bagasGanteng = "";

    const pageData: PageInfo[] = [
        {
            progress: EStepTracker.START,
            image: bagasGanteng,
            body: "We sell Mutual Funds (This is important to mention) Introduction about our Company",
            mainColor: colors.white,
            secondColor: colors.orange,
            thirdColor: colors.gray,
            leftCircleScale: 4.28,
            rightCircleScale: 2.45,
            leftCirclePos: window.height * 0.48,
            rightCirclePos: window.height * 0.12,
        },
        {
            progress: EStepTracker.MIDDLE,
            image: bagasGanteng,
            body: "Attract users with our attractive reward system. Tell users we will help them achieve their dreams (inspiring way)",
            mainColor: colors.orange,
            secondColor: colors.white,
            thirdColor: colors.yellow,
            leftCircleScale: 4.28,
            rightCircleScale: 1.64,
            leftCirclePos: window.height * 0.2,
            rightCirclePos: window.height * 0.6,
        },
        {
            progress: EStepTracker.END,
            image: bagasGanteng,
            body: "About us, we make things simple, easy, safe and fun!",
            mainColor: colors.white,
            secondColor: colors.orange,
            thirdColor: colors.gray,
            leftCircleScale: 4.28,
            rightCircleScale: 2.45,
            leftCirclePos: window.height * 0.48,
            rightCirclePos: window.height * 0.12,
        },
    ];

    function togglePage(page: EStepTracker): void {
        setPage(page);
    }

    const createPage = (data: any) => {
        const item = data.item;

        return (<View style={{ flex: 1, padding: 5, backgroundColor: item.mainColor, overflow:"hidden" }}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={{ flex: 1, justifyContent: "center", /*zIndex:1*/ }}>
                <Image source={{ uri: item.image }}
                    style={{ width: "100%", height: window.height / 3, resizeMode: "cover" }} />
            </View>
            
            {/* left circle */}
            <View style = {{position: "absolute", left: -75, top: item.leftCirclePos}}>
                <Circle color= {item.secondColor} scale = {item.leftCircleScale}/>
            </View>

            {/* right circle */}
            <View style = {{position: "absolute", right: -25, top: item.rightCirclePos}}>
                <Circle color= {item.secondColor} scale = {item.rightCircleScale}/>
            </View>
           
            <View style={{ flex: 1, justifyContent: "center", /*zIndex:1*/}}>
                <IndoText style={{ textAlign: "center" }}>{item.body}</IndoText>
            </View>
        </View>);
    }

    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <View style={{ left:23, top:50, position: "absolute", zIndex: 1 }}>
                <TouchableOpacity onPress={navigateToLandingPage} activeOpacity={0.8} style={{ padding: 5 }}>
                    <IndoText style= {{color:skipColor}}>Skip</IndoText>
                </TouchableOpacity>
            </View>

            <Carousel
                ref={carouselRef as any}
                data={pageData}
                renderItem={createPage}
                sliderWidth={window.width}
                itemWidth={window.width}
                onSnapToItem={e => {
                    togglePage(e);
                    if(e === EStepTracker.MIDDLE){
                        setSkipColor(pageData[e].secondColor);
                    } else{
                        setSkipColor(pageData[e].thirdColor);
                    }
                }}
            />

            <View style={{height:30, left: 20, position: "absolute", zIndex: 1, bottom: 50 }}>
                <StepTracker
                    progress={page}
                    activeColor={pageData[page].secondColor}
                    inactiveColor={pageData[page].thirdColor} />
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
