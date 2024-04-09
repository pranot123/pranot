
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrjle79CHJuRc_H88OsbAoDaVpCRU3Pco",
  authDomain: "image-gallery-ad939.firebaseapp.com",
  projectId: "image-gallery-ad939",
  storageBucket: "image-gallery-ad939.appspot.com",
  messagingSenderId: "943765044094",
  appId: "1:943765044094:web:100a75c963e92687cb512f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage,db }