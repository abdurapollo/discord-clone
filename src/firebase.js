import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCrhtvhTLJ8VxnlB9NwdunHw8LOdpx9dzo",
    authDomain: "discord-clone-dba84.firebaseapp.com",
    databaseURL: "https://discord-clone-dba84.firebaseio.com",
    projectId: "discord-clone-dba84",
    storageBucket: "discord-clone-dba84.appspot.com",
    messagingSenderId: "699907952139",
    appId: "1:699907952139:web:3dd8c1eaf59f140627410e",
    measurementId: "G-HYDM072L59"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;