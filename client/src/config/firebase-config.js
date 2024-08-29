import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA1BIh4tRRr8cV3iIJwqiB0HsMC-ggpEDc",
    authDomain: "portfolio-6d9c6.firebaseapp.com",
    projectId: "portfolio-6d9c6",
    storageBucket: "portfolio-6d9c6.appspot.com",
    messagingSenderId: "1029300904449",
    appId: "1:1029300904449:web:4ade9712d371449c075600",
    measurementId: "G-94JQ27CEQ0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);