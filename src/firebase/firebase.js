import firebase from 'firebase/app';
import 'firebase/database';



const config = {
    apiKey:process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID ,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
   
  };


// Initialize Firebase
firebase.initializeApp(config);


const database = firebase.database();
export {firebase, database as default};






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





