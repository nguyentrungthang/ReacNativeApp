import React, { Component } from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import CommonStyle from '../styles/Common.js';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
  render() {
    return (
        <View style={CommonStyle.container}>
            <Text style={CommonStyle.label_register}>Create a new account</Text>
            <TextInput placeholder='Email' style={CommonStyle.email_text_input}></TextInput>
            <TextInput placeholder='PassWord' style={CommonStyle.password_text_input} secureTextEntry={true} maxLength={10}></TextInput>
            <TextInput placeholder='Confirm PassWord' style={CommonStyle.password_text_input} secureTextEntry={true} maxLength={10}></TextInput>
            <TouchableOpacity onPress={this._onPressButton}>
                <Text style = {CommonStyle.btn_register}>
                    Register
                </Text>
            </TouchableOpacity >
        </View>
    )
  }
}