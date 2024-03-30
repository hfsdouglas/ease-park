import { Text, TextInput, StyleSheet, View } from "react-native";

interface Input {
    label: string,
    placeholder?: string,
    type?: any,
    value?: string
}

export default function Input({ type, label, placeholder }: Input) {
    const textType = type ? type : 'none';
    const textEntry = type === 'password' ? true : false;

    return (
        <View style={styles.view}>
            <Text style={styles.text}>{ label }</Text>
            
            <TextInput 
                style={styles.input} 
                placeholder={ placeholder } 
                textContentType={ textType } 
                secureTextEntry={ textEntry }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        marginBottom: 18
    },
    text: {
        marginBottom: 8,
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        padding: 12,
        fontSize: 18,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 8
    }
});