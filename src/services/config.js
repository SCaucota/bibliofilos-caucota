import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLOWnalfSDWSK1sv3CW9QpUvtu3GkM1hc",
  authDomain: "bibliofilos-911c4.firebaseapp.com",
  projectId: "bibliofilos-911c4",
  storageBucket: "bibliofilos-911c4.firebasestorage.app",
  messagingSenderId: "266548095410",
  appId: "1:266548095410:web:7d59216e6ec10785eddcab"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);