import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD5SVKrwcNBXkFYnXopnSYvWsNGcAxdnQE',
  authDomain: 'login-visma.firebaseapp.com',
  projectId: 'login-visma',
  storageBucket: 'login-visma.appspot.com',
  messagingSenderId: '625727442114',
  appId: '1:625727442114:web:8018e9e43401e4a1c03f5b',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export default app
