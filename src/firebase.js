import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyAIZCmqoMGcBUAknpLgcVH2eSGEkW1cpvI",
    authDomain: "soccer-react.firebaseapp.com",
    databaseURL: "https://soccer-react.firebaseio.com",
    projectId: "soccer-react",
    storageBucket: "soccer-react.appspot.com",
    messagingSenderId: "211012495215"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers
}