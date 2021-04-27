import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../theme/colors";
import CircleButton from "../buttons/CircleButton";


//props needed for this component e.g
//const [text, setText] = useState("");
//if you want to do action based on text cursor position, provide its position with textCursor props
//if you want to adjust text cursor after write or delete, provide setTextCursor for it

// Example of usage
// const [text, setText] = useState("");
// const [textCursor, setTextCursor] = useState();
//
// function onSelectionChange(e: any) {
//     setTextCursor(e.nativeEvent.selection.start);
// }
//
// <IndoTextInput showSoftInputOnFocus={false}
//     value={text}
//     onChangeText={setText}
//     selection={{ start: textCursor ?? 0 }}
//     onSelectionChange={onSelectionChange} />
//
// <NumberKeyboard text={text}
//     setText={setText}
//     textCursor={textCursor}
//     setTextCursor={setTextCursor} />
interface IProps {
    text: string,
    setText: any,
    textCursor?: number,
    setTextCursor?: any,
}

const ButtonArray = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["000", "0", 'back'],
]

const NumberKeyboard: React.FC<IProps> = (props) => {
    function writeText(item: string) {
        const cur = props.textCursor;

        if (cur === undefined) {
            props.setText(props.text + item);
        } else {
            props.setText(props.text.slice(0, cur) + item + props.text.slice(cur));
            //move the cursor as the text increase
            if (props.setTextCursor != undefined) {
                props.setTextCursor(cur + item.length);
            }
        }
    }

    function backSpace() {
        const cur = props.textCursor;
        console.log("yeeee " + cur);

        if (cur === undefined) {
            props.setText(props.text.slice(0, -1));
        } else if (cur > 0) {
            props.setText(props.text.slice(0, cur - 1) + props.text.slice(cur));
            if (props.setTextCursor != undefined) {
                props.setTextCursor(cur - 1);
            }
        }
    }

    return (
        <View>
            {ButtonArray.map((row, index) =>
                <View key={`custom-keyboard-row-${index}`} style={style.row}>
                    {row.map((item, key) =>
                        <CircleButton key={`custom-keyboard-row-item-${key}`} color={item === undefined
                            ? "transparent"
                            : colors.orange}
                            disabled={item === undefined
                                ? true
                                : false}
                            onPress={() => {
                                if (item === "back") {
                                    backSpace();
                                } else {
                                    writeText(item);
                                }
                            }}
                            scale={1.2}
                        >{item}</CircleButton>
                    )}
                </View>
            )}
        </View>
    );
};

const style = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 20,
    },
});

export default NumberKeyboard;