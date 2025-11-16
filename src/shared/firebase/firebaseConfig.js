import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCqHZZrOOQh6iOocRmcdugyFHdOnp1AZvc',
  authDomain: 'codeit-rolling.firebaseapp.com',
  projectId: 'codeit-rolling',
  storageBucket: 'codeit-rolling.firebasestorage.app',
  messagingSenderId: '68920658450',
  appId: '1:68920658450:web:12e691d917719c263166cb',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
