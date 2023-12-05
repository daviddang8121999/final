// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrQwMLy_qE0v861WGwvf9j3cSHKstPXh4",
  authDomain: "squarespace-portal.firebaseapp.com",
  projectId: "squarespace-portal",
  storageBucket: "squarespace-portal.appspot.com",
  messagingSenderId: "468546390972",
  appId: "1:468546390972:web:d0e03c9b7819d43577b9b9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export { firebaseApp, storage }

export default firebaseApp;