// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAKE4dZoKiV6mK_r52aEvlni7yN3hIpuYc",
	authDomain: "test-fswqyi.firebaseapp.com",
	projectId: "test-fswqyi",
	storageBucket: "test-fswqyi.appspot.com",
	messagingSenderId: "466729673397",
	appId: "1:466729673397:web:3d6159e9acdb1c9abf94fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;