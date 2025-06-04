// Configuration Firebase pour AM2TECH Dashboard
const firebaseConfig = {
  apiKey: "AIzaSyD3DEpSXS64pvSxOs1sdAZw3Bv81dop00k",
  authDomain: "am2tech-dashboard.firebaseapp.com",
  projectId: "am2tech-dashboard",
  storageBucket: "am2tech-dashboard.appspot.com",
  messagingSenderId: "708110803770",
  appId: "1:708110803770:web:4818d748c2af29846ba603",
  measurementId: "G-3SF6KVG776"
};

// Initialisation sécurisée
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore global
const db = firebase.firestore();
