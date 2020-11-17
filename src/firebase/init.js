import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALAMd9dXS03hPVimnBNNSFh5AWfyLPJhA",
  authDomain: "ninja-smoothies-75761.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-75761.firebaseio.com",
  projectId: "ninja-smoothies-75761",
  storageBucket: "ninja-smoothies-75761.appspot.com",
  messagingSenderId: "330860302468",
  appId: "1:330860302468:web:d2f3330f0ef7d9a0bdb2d1"
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()
