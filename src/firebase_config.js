import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// console.log(process)
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    apiKey: "AIzaSyCuiZO5iVecmwx399NVctqIPnFqTX8KfD8",
    authDomain: "cet-hostel-application.firebaseapp.com",
    databaseURL: "https://cet-hostel-application-default-rtdb.firebaseio.com",
    projectId: "cet-hostel-application",
    storageBucket: "cet-hostel-application.appspot.com",
    messagingSenderId: "222559251801",
    appId: "1:222559251801:web:72e43d51793eeb3276b048"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
