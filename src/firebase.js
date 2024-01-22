//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr0FlwQTVfpj9HD8T3lBF9QuDUNEK02o8",
  authDomain: "cardrecommend-38df4.firebaseapp.com",
  projectId: "cardrecommend-38df4",
  storageBucket: "cardrecommend-38df4.appspot.com",
  messagingSenderId: "1001636675091",
  appId: "1:1001636675091:web:bfcada407b058d52cfc9e6",
  measurementId: "G-5Z61EQJ221",
};

// firebaseConfig 정보로 firebase 시작
// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firestore = firebase.firestore(firebaseApp);
// export const firestore2 = getFirestore(firebaseApp);

// firebase.initializeApp(firebaseConfig);
// export default firebase;

// export const fireDB = firebase.database();

// export const firebaseDB2 = getDatabase(firebaseApp);

// // 필요한 곳에서 사용할 수 있도록 내보내기

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export const storage = firebase.storage;
export { firestore };
