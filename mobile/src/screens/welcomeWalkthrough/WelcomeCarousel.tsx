import React, {useRef, useState} from "react";
import IndoText from "../../components/IndoText";
import SafeAreaView from "react-native-safe-area-view";
import globalStyles from "../../theme/globalStyles";
import {Image, TouchableOpacity, useWindowDimensions, View} from "react-native";
import StepTracker, {EStepTracker} from "../../components/elements/StepTracker";
import {StackNavigationProp} from "@react-navigation/stack";
import Carousel from "react-native-snap-carousel";
import IndoButton from "../../components/buttons/IndoButton";

interface IProps {
    navigation: StackNavigationProp<any>;
}

interface PageInfo {
    progress: EStepTracker;
    image: string;
    body: string;
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
        },
        {
            progress: EStepTracker.MIDDLE,
            image: "https://via.placeholder.com/500",
            body: "Attract users with our attractive reward system. Tell users we will help them achieve their dreams (inspiring way)",
        },
        {
            progress: EStepTracker.END,
            image: "https://via.placeholder.com/500",
            body: "About us, we make things simple, easy, safe and fun!",
        },
    ];

    function togglePage(page: EStepTracker): void {
        setPage(page);
    }

    const createPage = (data: any) => {
        const item = data.item;

        return (<View style={{flex: 1, padding: 5}}>
            <View style={{flex: 1, justifyContent: "center"}}>
                <Image source={{uri: item.image}}
                       style={{width: "100%", height: window.height / 3, resizeMode: "cover"}}/>
            </View>
            <View style={{flex: 1, justifyContent: "center"}}>
                <IndoText style={{textAlign: "center"}}>{item.body}</IndoText>
            </View>
        </View>);
    }

    return (
        <SafeAreaView style={globalStyles.safeArea}>

            <View style={{alignItems: "center", paddingVertical: 15}}>
                <StepTracker progress={page}/>
            </View>
            <View style={{alignItems: "flex-end", paddingHorizontal: 15}}>
                <TouchableOpacity onPress={navigateToLandingPage} activeOpacity={0.8} style={{padding: 5}}>
                    <IndoText>Skip</IndoText>
                </TouchableOpacity>
            </View>
            <Carousel
                ref={carouselRef as any}
                data={pageData}
                renderItem={createPage}
                sliderWidth={window.width}
                itemWidth={window.width}
                onBeforeSnapToItem={e => togglePage(e)}
            />

			{(page === EStepTracker.END) ? (
				<View style={{alignItems: "center", paddingHorizontal: 25, height: 50}}>
					<IndoButton onPress={navigateToLandingPage}>Next</IndoButton>
				</View>
			) : (
				<View style={{alignItems: "center", paddingHorizontal: 25, height: 50}}/>
			)}
        </SafeAreaView>
    );
};

export default WelcomeCarousel;
