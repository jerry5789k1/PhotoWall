import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyD9YPbz74Ojjtv3t2gT15pAOWZmqHBx4Zc",
    authDomain: "photowall-81af2.firebaseapp.com",
    databaseURL: "https://photowall-81af2.firebaseio.com",
    projectId: "photowall-81af2",
    storageBucket: "photowall-81af2.appspot.com",
    messagingSenderId: "430936286088"
  }

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}