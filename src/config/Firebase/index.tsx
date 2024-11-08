// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDOb5XXsOb0JlEieSqaqLI-mDolfnbgjns',
  authDomain: 'moneytracker-ando.firebaseapp.com',
  projectId: 'moneytracker-ando',
  storageBucket: 'moneytracker-ando.firebasestorage.app',
  messagingSenderId: '73533984797',
  appId: '1:73533984797:web:c32c3c982b5de757ae76f4',
  measurementId: 'G-LC5F1QQ70X',
  databaseURL: 'https://moneytracker-ando-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
