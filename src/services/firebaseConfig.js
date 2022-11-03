
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDcY9JMzDeo94MqTIHWXvSkIMQLLd67eho",
  authDomain: "minerales-por-el-mundo.firebaseapp.com",
  projectId: "minerales-por-el-mundo",
  storageBucket: "minerales-por-el-mundo.appspot.com",
  messagingSenderId: "206497375165",
  appId: "1:206497375165:web:3548d617da4abd1a98a8d4"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);