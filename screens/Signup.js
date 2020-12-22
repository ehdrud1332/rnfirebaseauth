import React, {Component} from 'react';
import Firebase from "../config/Firebase";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class Signup extends Component {

    handleSignup = () => {
        const {email, password} = this.state
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Profile'))
            .catch(error => console.log(error))
    }

    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.name}
                    onChangeText={name => this.setState({name})}
                    placeholder='Full Name'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})