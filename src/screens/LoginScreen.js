import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/actions/loginAction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import LoginButton from '../components/LoginButton';
import Divider from '../components/Devider';

const textLogo = require('../assets/images/text-logo.png');

class LoginScreen extends Component {
   
    state = {
        email: '',
        password: '',

    }

    handleEmailChange = (text) => {
        this.setState({ email: text })
    };
    
    handlePasswordChange = (text) => {
        this.setState({ password: text })
    };

    handleLoginPress = () => {
        this.props.login(this.state.email, this.state.password)
        this.props.navigation.navigate('Main')
    };

    handleFacebookLoginPress = () => {
        alert('Facebook login pressed.')
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={textLogo} style={styles.logo}/>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor= {colors.black}
                        autoCapitalize='none'
                        onChangeText={this.handleEmailChange}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor= {colors.black}
                        secureTextEntry={true}
                        onChangeText={this.handlePasswordChange}
                    />
                    <LoginButton label='Login' onPress={this.handleLoginPress} />
                    <Divider style={styles.divider} label='OR' />
                    <FontAwesome.Button
                        style={styles.facebookButton}
                        name='facebook'
                        onPress={this.handleFacebookLoginPress}
                        backgroundColor={colors.blue}>
                        <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
                    </FontAwesome.Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '80%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    form: {
        height: '30%',
        width: '80%',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        borderColor: colors.black,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    },
    divider: {
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebookButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonTitle: {
        fontSize: 15,
        color: colors.white,
    }
});

const mapStateToProps = (state) => {
    console.log(state)
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(login(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);