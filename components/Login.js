import React from 'react'
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

function Login() {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text variant='displaySmall' style={{ fontWeight: 'bold' }}>Login</Text>
                <Text variant='labelMedium'>Please sign in to continue</Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    label='Email'
                    value={text}
                    left={<TextInput.Icon icon="email" />}
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    label='Password'
                    value={password}
                    secureTextEntry
                    left={<TextInput.Icon icon="eye" />}
                    onChangeText={password => setPassword(password)}
                />
            </View>

            <View>
                <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.btn}>Login</Button>
            </View>

            <View style={[styles.bottomText, styles.txtAlign]}>
                <View>
                    <Text variant='titleSmall'> Don't have and account? </Text>
                </View>
                <View>
                    <Text style={styles.colorTxt}>Sign up</Text>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    textView: {
        marginTop: 200
    },
    inputView: {
        marginTop: 30,
    },
    btn: {
        marginTop: 30,
        backgroundColor: '#e35720',
        width: 120,
        marginLeft: 220,

    },
    bottomText: {
        marginTop: 300,
        marginLeft: 65,
    },
    txtAlign: {
        flexDirection: 'row'
    },
    colorTxt: {
        color: '#e35720',
        fontWeight: 'bold'
    }
});


export default Login;