import { Text, StyleSheet, View, Pressable } from "react-native";

interface Button {
    title: string
}

export default function Button({ title }: Button) {
    return (
        <View style={ styles.button }>
            <Pressable style={ styles.button }>
                <Text style={ styles.text }>{ title.toUpperCase() }</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000',
        borderRadius: 8,
        padding: 8,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center'
    }
});