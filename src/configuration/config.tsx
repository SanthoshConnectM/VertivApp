import * as firebase from 'firebase';

const firebaseConfig = { 
  apiKey: "AIzaSyBpW9obnlnwFepLW-zYsLgoHNaLpCEl-OM", 
  authDomain: "vertivapp.firebaseapp.com", 
  projectId: "vertivapp", 
  storageBucket: "vertivapp.appspot.com", 
  messagingSenderId: "930372416295", 
  appId: "1:930372416295:web:d4110f140c24817e3def02", 
  measurementId: "G-J5GVPDPGTQ",
  databaseURL: "https://vertivapp-default-rtdb.firebaseio.com/",
}; 

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export {firebase}