// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0pZ9WktkFYKH8gU72qO53WYzdCu6VsyI",
  authDomain: "netflix-gpt-973b1.firebaseapp.com",
  projectId: "netflix-gpt-973b1",
  storageBucket: "netflix-gpt-973b1.appspot.com",
  messagingSenderId: "381122961899",
  appId: "1:381122961899:web:b25377562cc994c7d579ae",
  measurementId: "G-51Q9HDXZ19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
