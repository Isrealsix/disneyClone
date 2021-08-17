import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Mine;
const firebaseConfig = {
	apiKey: 'AIzaSyDzKHrPH5ZaJ2FGcDDLME-dySt6hW8NsvM',
	authDomain: 'disney-28ffe.firebaseapp.com',
	projectId: 'disney-28ffe',
	storageBucket: 'disney-28ffe.appspot.com',
	messagingSenderId: '1036132077742',
	appId: '1:1036132077742:web:270a648bba1b78a1fadd3f',
	measurementId: 'G-LSRWTBJVVJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
