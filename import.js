const firestoreService = require("firestore-export-import");
// const firebaseConfig = require("./src/firebase.js");
const firebaseConfig = require("./firebaseConfig.js");
// const firebaseConfig = require("./config.js");
const serviceAccount = require("./src/firebase/serviceAccount.json");
// const serviceAccount = require("./serviceAccount.json");
var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cardrecommend-38df4-default-rtdb.firebaseio.com",
});

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log("Initialzing Firebase");
    await firestoreService.initializeApp(
      serviceAccount,
      firebaseConfig.databaseURL
    );
    console.log("Firebase Initialized");

    await firestoreService.restore("./data-clean/firebase/cardBenefit.json");
    console.log("Upload Success");
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
