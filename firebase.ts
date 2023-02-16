import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI1OCAH5zylXUDoBDO-0qfLmiXuz91dD0",
  authDomain: "chatgpt-clonee.firebaseapp.com",
  projectId: "chatgpt-clonee",
  storageBucket: "chatgpt-clonee.appspot.com",
  messagingSenderId: "365705579646",
  appId: "1:365705579646:web:35a6b981fed7ea7d999c2f"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };