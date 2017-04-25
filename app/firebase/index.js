import firebase from 'firebase'
import apiKey from 'app/firebase/apiKey'

try {
	var config = {
	    apiKey,
	    authDomain: "reacttodo-d8b7c.firebaseapp.com",
	    databaseURL: "https://reacttodo-d8b7c.firebaseio.com",
	    projectId: "reacttodo-d8b7c",
	    storageBucket: "reacttodo-d8b7c.appspot.com",
	    messagingSenderId: "191970357173"
	}

	firebase.initializeApp(config);

} catch (e) {

}

export const firebaseRef = firebase.database().ref()
export default firebase