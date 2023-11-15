import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPmoj0VtBC04kN03E7byK_g1Q5iN_h43s",
    authDomain: "coderreact-34fbd.firebaseapp.com",
    projectId: "coderreact-34fbd",
    storageBucket: "coderreact-34fbd.appspot.com",
    messagingSenderId: "464376110988",
    appId: "1:464376110988:web:7a1703fd7b28f9a24e00a9"
  };

  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
