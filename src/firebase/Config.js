import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBJT2rGwPZuhQEWTjBUrZxGIFbSvO3VwkU",
//   authDomain: "olxclone-23856.firebaseapp.com",
//   projectId: "olxclone-23856",
//   storageBucket: "olxclone-23856.appspot.com",
//   messagingSenderId: "221684490734",
//   appId: "1:221684490734:web:6c2c466a12577543096eff",
//   measurementId: "G-T5EBJ3DGV8"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCyLXi_jlpBymzBpTXUSx8NKjuqCA3wBs0",
//   authDomain: "olxc-92446.firebaseapp.com",
//   projectId: "olxc-92446",
//   storageBucket: "olxc-92446.appspot.com",
//   messagingSenderId: "160386215794",
//   appId: "1:160386215794:web:e073566a746fb7cd6b77eb",
//   measurementId: "G-Q7LEK8EGQT"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyLXi_jlpBymzBpTXUSx8NKjuqCA3wBs0",
  authDomain: "olxc-92446.firebaseapp.com",
  projectId: "olxc-92446",
  storageBucket: "olxc-92446.appspot.com",
  messagingSenderId: "160386215794",
  appId: "1:160386215794:web:d51542a4cd6ff24f6b77eb",
  measurementId: "G-LL377SWF40"
};

export default firebase.initializeApp(firebaseConfig);


