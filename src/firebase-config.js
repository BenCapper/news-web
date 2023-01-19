import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: "news-a3e22",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSENGER_SENDING_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);