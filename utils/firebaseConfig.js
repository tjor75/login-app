import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth } from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const app = initializeApp({
    apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
    //databaseURL: process.env.EXPO_PUBLIC_FB_DATABASE_URL,
    projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
    //storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
    //messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FB_APP_ID,
    //measurementId: process.env.EXPO_PUBLIC_FB_MEASUREMENT_ID,
});
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const auth = getAuth(app);