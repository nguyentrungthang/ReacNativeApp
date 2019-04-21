/**
 * @class Home
 */

import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";

import Button from "apsl-react-native-button";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';

import CommonStyle from "../../../../TodoApp/src/components/styles/common.js";
import Database from "../../../../TodoApp/src/firebase/database.js";
import DismissKeyboard from "react-native-dismiss-keyboard";
import {TextInput} from "react-native-gesture-handler/react-native-gesture-handler";
import firebase from 'firebase/index';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            uid: "",
            mobile: "",
            mobileForm: ""
        };

        this.logout = this.logout.bind(this);
        this.saveMobile = this.saveMobile.bind(this);

    }


    async logout() {
        const {goBack} = this.props.navigation;
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            alert('sign-out successful');
            goBack();
        }).catch(function (error) {
            // An error happened.
        });
        //
        // try {
        //     alert(firebase.auth().signOut());
        //     await firebase.auth().signOut();
        //     // alert('ok signout');
        //     goBack();
        //     // this.props.navigation.goBack();
        //
        // } catch (error) {
        //     console.log(error);
        // }

    }

    //  getListData() {
    //     try {
    //         let user =  firebase.auth().currentUser;
    //         alert(user.uid);
    //         console.log(user);
    //         Database.listenUserMobile(user.uid, (mobileNumber) => {
    //             this.setState({
    //                 mobile: mobileNumber,
    //                 mobileForm: mobileNumber,
    //
    //             });
    //         });
    //         alert(this.setState.mobile);
    //     } catch (e) {
    //     }
    // }

    async componentDidMount() {
        try {

            // Get User Credentials
            let user = await firebase.auth().currentUser;
            console.log(user);
            // Listen for Mobile Changes
            Database.listenUserMobile(user.uid, (mobileNumber) => {
                this.setState({
                    mobile: mobileNumber,
                    mobileForm: mobileNumber,

                });
            });
            this.setState({
                uid: user.uid
            });

        } catch (error) {
            console.log(error);
        }

    }

    saveMobile() {
        // Set Mobile
        // if (this.state.uid && this.state.mobileForm) {
        if (this.state.uid) {
            Database.setUserMobile(this.state.uid, this.state.mobileForm);
            DismissKeyboard();
        }

    }

    render() {
        // const itemId = navigation.getParam('email', 'tnt_test_pass_param');
        return (
            <TouchableWithoutFeedback onPress={() => {
                DismissKeyboard()
            }}>
                <View style={CommonStyle.container}>
                    <Text style={styles.heading}>Hello: {this.state.email}</Text>
                    <Text style={styles.heading}>Mobile Number (From Database): {this.state.mobile}</Text>
                    {/*<Text>itemId: {JSON.stringify(itemId)}</Text>*/}
                    {/*<Text>email: {email}</Text>*/}
                    {/*<Text>uid: {this.state.uid}</Text>*/}
                    <View style={styles.form}>
                        {/* <Hideo
                            iconClass={FontAwesomeIcon}
                            iconName={"mobile"}
                            iconColor={"white"}
                            iconBackgroundColor={"#f2a59d"}
                            // inputStyle={{ color: "#464949"}}
                            inputStyle={{Text}}
                            value={this.state.mobileForm}
                            onChangeText={(mobileForm) => this.setState({mobileForm})}
                        /> */}
                        <TextInput
                            style={{height: 40}}
                            placeholder="Type here to translate!"
                            value={this.state.mobileForm}
                            onChangeText={(mobileForm) => this.setState({mobileForm})}
                        />

                    </View>

                    <View style={styles.form}>
                        {/* <Hideo
                            iconClass={FontAwesomeIcon}
                            iconName={"address-book"}
                            iconColor={"white"}
                            iconBackgroundColor={"#f2a59d"}
                            inputStyle={{ color: "#464949"}}
                            value={this.state.email}
                            // value='6666'
                            onChangeText={(mobileForm) => this.setState({mobileForm})}
                        /> */}
                    </View>
                    <View style={styles.save_buton}>
                        {/*<Button onPress={() => goBack()} style={CommonStyle.buttons} textStyle={{fontSize: 18}}>*/}
                        <Button onPress={() => this.logout()} style={CommonStyle.buttons} textStyle={{fontSize: 18}}>
                            Logout
                        </Button>
                        <Button onPress={this.saveMobile} style={CommonStyle.buttons} textStyle={{fontSize: 18}}>
                            Save
                        </Button>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({

    heading: {
        textAlign: "center"
    },

    logout: {
        padding: 50
    },

    form: {
        paddingTop: 50
    },
    save_buton: {
        paddingTop: 150

    },

});

module.exports = Home;
