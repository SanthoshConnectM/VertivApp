import { Firebase } from "react-native-firebase";

export const firebaseConfig = { 
  apiKey: "AIzaSyBpW9obnlnwFepLW-zYsLgoHNaLpCEl-OM", 
  authDomain: "vertivapp.firebaseapp.com", 
  projectId: "vertivapp", 
  storageBucket: "vertivapp.appspot.com", 
  messagingSenderId: "930372416295", 
  appId: "1:930372416295:web:d4110f140c24817e3def02", 
  measurementId: "G-J5GVPDPGTQ" 
}; 

const app = Firebase.initializeApp(firebaseConfig); 
const db = app.database();
export default db;