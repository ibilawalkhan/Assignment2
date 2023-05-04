import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { ImageBackground } from 'react-native';

function CreateAccount({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    return (
        <ImageBackground
            style={styles.container}
            // source={{ uri: 'https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            source={require('../assets/images/bg.jpg')}
        >
            <View style={styles.textView}>
                {/* <Text variant='displaySmall' style={{ fontWeight: 'bold' }}>CreateAccount</Text> */}
            </View>

            <View style={styles.inputView}>
                <TextInput
                    label='Full Name'
                    value={name}
                    left={<TextInput.Icon icon="human" />}
                    onChangeText={name => setName(name)}
                />
                <TextInput
                    label='Email'
                    value={email}
                    left={<TextInput.Icon icon="email" />}
                    onChangeText={email => setEmail(email)}
                />

                <TextInput
                    label='Password'
                    value={password}
                    secureTextEntry
                    left={<TextInput.Icon icon="eye" />}
                    onChangeText={password => setPassword(password)}
                />

                <TextInput
                    label='Confirm Password'
                    value={confirmPassword}
                    secureTextEntry
                    left={<TextInput.Icon icon="eye" />}
                    onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                />

            </View>

            <View>
                <Button mode="contained" style={styles.btn}>Sign up</Button>
            </View>

            <View style={[styles.bottomText, styles.txtAlign]}>
                <View>
                    <Text variant='titleSmall'> Already have a account? </Text>
                    <Button mode="text" onPress={() => navigation.navigate('Login')}><Text style={styles.colorTxt}>Login</Text></Button>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    textView: {
        marginTop: 10
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
        marginLeft: 100,
    },
    txtAlign: {
        flexDirection: 'row'
    },
    colorTxt: {
        color: '#e35720',
        fontWeight: 'bold'
    }

})

export default CreateAccount