import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
apiKey: "AIzaSyAUfJ_1u_Jb4EAJyPXGOmqQSxVMxfgGsOI",
authDomain: "blogwebsite-79757.firebaseapp.com",
projectId: "blogwebsite-79757",
storageBucket: "blogwebsite-79757.appspot.com",
messagingSenderId: "656758101755",
appId: "1:656758101755:web:0043dd41777c55a295425e"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}

