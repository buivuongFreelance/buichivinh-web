import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
    apiKey: "AIzaSyC7zLBdwSjbZXb8zWQddJf5LPCl5aRr40I",
    authDomain: "buichivinh-90968.firebaseapp.com",
    projectId: "buichivinh-90968",
    storageBucket: "buichivinh-90968.appspot.com",
    messagingSenderId: "750362935759",
    appId: "1:750362935759:web:c2225b93b43134d898d2ba",
    measurementId: "G-R9Z9H7X4WY"
};

export const appFirebase = initializeApp(firebaseConfig);
export const analyticsFirebase = getAnalytics(appFirebase);