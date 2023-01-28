import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADQoepfmc1-l1bGwBFv446feWipodnKnY",
  authDomain: "news-a3e22.firebaseapp.com",
  databaseURL: "https://news-a3e22-default-rtdb.firebaseio.com",
  projectId: "news-a3e22",
  storageBucket: "news-a3e22.appspot.com",
  messagingSenderId: "30294384215",
  appId: "1:30294384215:web:9c209cfcfb8eb39537cd12",
  measurementId: "G-HL87VMTXW5"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const au = getAuth(app);