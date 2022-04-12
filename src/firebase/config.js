import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgZ63wew2WcM3bQHpi3H6E4hvp29DMkco",
  authDomain: "lottery-task.firebaseapp.com",
  projectId: "lottery-task",
  storageBucket: "lottery-task.appspot.com",
  messagingSenderId: "426263990512",
  appId: "1:426263990512:web:04ca3511db52e262287235",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

//export
export { projectFirestore };
