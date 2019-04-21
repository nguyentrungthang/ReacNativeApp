import React, { Component } from 'react'
import { View ,Text,TextInput, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';
import CommonStyle from '../styles/Common.js';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            response: ""
        };

        // this.signup = this.signup.bind(this);
        // this.login = this.login.bind(this);
    }
  render() {
    return (
      <View style={CommonStyle.container}>
        <Text style={CommonStyle.login_title}>LOGIN</Text>
        <TextInput placeholder='Email' style={CommonStyle.email_text_input}></TextInput>
        <TextInput placeholder='PassWord' style={CommonStyle.password_text_input} secureTextEntry={true} maxLength={10}></TextInput>
          <View style={CommonStyle.checkbox}>
          <CheckBox
              title="Remember me"
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
          />
          </View>
          <TouchableOpacity onPress={this._onPressButton}>
              <Text style = {CommonStyle.buttons}>
                  Login
              </Text>
          </TouchableOpacity >

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <Text style = {CommonStyle.buttons}>
                  Register
              </Text>
          </TouchableOpacity >
      </View>
    )
  }
}