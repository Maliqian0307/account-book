import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


// const config = {
//     apiKey: "AIzaSyAqHgdA__tVb5g9CLsm6MHL602Xo0BiSbA",
//     authDomain: "account-book-8971f.firebaseapp.com",
//     databaseURL: "https://account-book-8971f-default-rtdb.firebaseio.com",
//     projectId: "account-book-8971f",
//     storageBucket: "account-book-8971f.appspot.com",
//     messagingSenderId: "563388230836",
//     appId: "1:563388230836:web:aa144329e1512962fb7be1",
//     measurementId: "G-EG7BRVZL8X"
// };



const config = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   
  };

// Initialize Firebase
firebase.initializeApp(config);


const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  'prompt': 'select_account'
});


export {firebase, googleAuthProvider, database as default};






//以下是练习

// firebase.database().ref().set({
//     name:'Liqian'
// });
  
// const database=firebase.database()
// database.ref().set({
//    name:'ss',
//    age:2
// });



// database.ref('expenses').push({
//     category:'daily goods',
//     description:'food',
//     amount:3000,
//     createdAt:'2020-01-01'
//  });





// database.ref('expenses')
// .on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses)
// })

// // child_removed:
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.val());
// })

// // child_changed:
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.val());
// })

// //child_added:
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.val());
// })





