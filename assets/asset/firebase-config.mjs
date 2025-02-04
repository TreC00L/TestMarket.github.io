// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjdeG3840x6UdjyaEc0HhHO6jPzD0ldo",
  authDomain: "marketproject-8ca0b.firebaseapp.com",
  projectId: "marketproject-8ca0b",
  storageBucket: "marketproject-8ca0b.appspot.com",
  messagingSenderId: "29134617084",
  appId: "1:29134617084:web:46a4e0c4b3b1dc54db1a79",
  measurementId: "G-4YM1LZ253J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
