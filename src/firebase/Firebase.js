
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyB5T0T6vj_c8uO5hNt7mzVTciySXb0O3Qg",
            authDomain: "chat-app-react-5fd1e.firebaseapp.com",
            databaseURL: "https://chat-app-react-5fd1e.firebaseio.com",
            storageBucket: "chat-app-react-5fd1e.appspot.com"
        });
    }

}

module.exports = Firebase;

