// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEjHz_ijD024ZOX8QdbM8DCvtaUgM7H7g",
    authDomain: "maria-turzynska-portfolio-2023.firebaseapp.com",
    projectId: "maria-turzynska-portfolio-2023",
    storageBucket: "maria-turzynska-portfolio-2023.appspot.com",
    messagingSenderId: "13985880996",
    appId: "1:13985880996:web:569e587ecce4443470bf31",
    measurementId: "G-CJ1KQS9SH0"
};

// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBl7w6VAYLysLFRUnTCIqjfUdKaJ-6gO_4",
//   authDomain: "mt-portfolio-2023-debugging.firebaseapp.com",
//   projectId: "mt-portfolio-2023-debugging",
//   storageBucket: "mt-portfolio-2023-debugging.appspot.com",
//   messagingSenderId: "939769137920",
//   appId: "1:939769137920:web:58a061b775e83d0aaa81e5"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)