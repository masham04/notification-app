import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyCBXvAO7zqqAQo9PTuC1x7SO0mk3bYmc",
    authDomain: "notificationapp-ed3ca.firebaseapp.com",
    databaseURL: "https://notificationapp-ed3ca.firebaseio.com",
    projectId: "notificationapp-ed3ca",
    storageBucket: "notificationapp-ed3ca.appspot.com",
    messagingSenderId: "341243237176",
    appId: "1:341243237176:web:4dd6e9d925fb6722b667cd"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  export function notificationinit(){
    Notification.requestPermission().then((permission) => {
        console.log(permission);
      if (permission === 'granted') {
        

          messaging.getToken().then((currentToken) => {
              if (currentToken) {
               console.log(currentToken);
              } else {
                console.log('No Instance ID token available. Request permission to generate one.');
               
              }
            }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);

            });


      }
  });
  }
  navigator.serviceWorker.register('/firebase-messaging-sw.js');