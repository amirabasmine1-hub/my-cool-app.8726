import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyBb_h4mPDQ5_caR7ea8CnBijtADSE_bpCk",
authDomain: "amir-gamer-b3791.firebaseapp.com",
projectId: "amir-gamer-b3791",
storageBucket: "amir-gamer-b3791.firebasestorage.app",
messagingSenderId: "524643331369",
appId: "1:524643331369:web:898dc91532b62500ed1b38",
measurementId: "G-73TYV9SWP6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
