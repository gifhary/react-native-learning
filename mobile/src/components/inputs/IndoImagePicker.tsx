import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {CameraOptions, ImagePickerResponse} from "react-native-image-picker";
import {ImageLibraryOptions} from "react-native-image-picker/src/types";
import GenericMessageModal from "../modal/GenericMessageModal";
import IndoText from "../IndoText";
import colors from "../../theme/colors";
import IndoButton from "../buttons/IndoButton";

interface IProps {
    imageValue: ImagePickerResponse | undefined,
    setValue: any,
    placeholder?: string,
}

enum EImageSource {
    CAMERA,
    LIBRARY
}

export const IndoImagePicker: React.FC<IProps> = (props) => {

    const {imageValue, setValue} = props;
    const [optionModal, setOptionModal] = useState(false);
    const [displayText, setDisplayText] = useState<string>();
    const [tempImage, setTempImage] = useState<any>();

    useEffect(() => {
        if (imageValue?.fileName !== undefined && (imageValue?.fileName?.length > 35)) {
            setDisplayText(imageValue?.fileName.slice(0, 34) + "\u2026")
            setTempImage("data:image/png;base64," + imageValue.base64);
        }
    }, [imageValue]);

    function selectImage(choice: EImageSource) {

        if (choice === EImageSource.LIBRARY) {

            let options: ImageLibraryOptions = {
                mediaType: "photo",
                includeBase64: true,
                maxHeight: 200,
                maxWidth: 200,
            };

            ImagePicker.launchImageLibrary(
                options,
                (response) => {
                    toggleOption();
                    if (!response?.errorCode && !response?.didCancel) {
                        setValue(response);
                    }
                },
            )
        }
        if (choice === EImageSource.CAMERA) {
            let options: CameraOptions = {
                mediaType: "photo"
            };

            ImagePicker.launchCamera(
                options,
                (response) => {
                    toggleOption();
                    if (!response?.errorCode) {
                        setValue(response);
                    }
                },
            )
        }
    }

    function selectCamera() {
        selectImage(EImageSource.CAMERA);
    }

    function selectImageLibrary() {
        selectImage(EImageSource.LIBRARY);
    }

    function toggleOption() {
        setOptionModal(!optionModal);
    }

    return (
        <View style={style.view}>
            <TouchableOpacity onPress={toggleOption} activeOpacity={0.8}>
                <View style={style.imageContainer}>
                    {imageValue ? (
                        <>
                            <Image
                                style={style.image}
                                source={{uri: tempImage}}/>
                            <View style={{position: "absolute", opacity: 0.5}}>
                                <IndoText style={style.tempPlusIcon}>Plus Icon</IndoText>
                            </View>
                            <IndoText style={{padding: 10}}>{displayText}</IndoText>
                        </>
                    ) : (
                        <View style={style.tempPlusIconNoImage}><IndoText style={{borderWidth: 1}}>Plus Icon</IndoText></View>
                    )}
                </View>
            </TouchableOpacity>
            <GenericMessageModal
                title={"Photo option"}
                visible={optionModal}
                onClose={toggleOption}
                onDismiss={toggleOption}
                showButton={false}
            >
                <IndoText style={{paddingBottom: 20, textAlign: "center"}}>Please select an option:</IndoText>
                <View style={{alignItems: "center"}}>
                    <IndoButton onPress={selectImageLibrary}>Select from Library</IndoButton>
                    <IndoButton onPress={selectCamera} color="outline-orange">Camera</IndoButton>
                </View>
            </GenericMessageModal>

        </View>
    );
}

IndoImagePicker.defaultProps = {
    placeholder: "Upload Files",
};

const style = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        maxHeight: 250,
        alignItems: "center",
        paddingHorizontal: 10
    },
    text: {
        flex: 7,
        paddingHorizontal: 10,

    },
	imageContainer: {
    	position: "relative",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%"
	},
	tempPlusIconNoImage: {
		width: 250,
		height: 250,
		backgroundColor: colors.gray,
		justifyContent: "center",
		alignItems: "center"
	},
	tempPlusIcon: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: colors.yellow,
		color: colors.yellow,
		backgroundColor: colors.white,
	},

	image: {
		width: 250,
		height: 250,
		resizeMode: "cover",
		borderWidth: 1,
		borderColor: colors.yellow
	},
});

export default IndoImagePicker