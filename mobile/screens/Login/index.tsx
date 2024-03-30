import { View, Text, StyleSheet, Pressable } from "react-native";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Login() {
    return(
        <View style={ styles.login }>
            <View>
                <Text>Logo</Text>
            </View>
            
            <View>
                <Input type="emailAdress" label="E-mail" placeholder="email@email.com.br" />
                <Input type="password" label="Senha" />

                <Pressable>
                    <Text style={ styles.esqueci }>Esqueci minha senha</Text>
                </Pressable>

                <View style={ styles.button }>
                    <Button title="Entrar" /> 
                </View>
            </View>

            <Pressable>
                <Text style={ styles.criar }>Criar conta</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    login: {
        height: '100%',
        paddingHorizontal: 32,
        paddingVertical: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', 
    },
    button: {
        marginTop: 42
    },
    esqueci: {
        fontWeight: 'bold',
        fontSize: 16
    },
    criar: {
        fontWeight: 'bold',
        textAlign: 'right',
        fontSize: 16,
        marginBottom: 18,
        marginRight: 6
    }
});

