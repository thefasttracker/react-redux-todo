import firebase from 'firebase'

try {
	var config = {
	    apiKey: "AIzaSyD-7Ee7WQL_Vy67NuUEV54ExQPI9oJNB4M",
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