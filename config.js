// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALzrz4DjuZlfKM99kWCo3h4zieih4tnRY",
  authDomain: "rn-mobile-app-photobook.firebaseapp.com",
  databaseURL: "https://rn-mobile-app-photobook-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rn-mobile-app-photobook",
  storageBucket: "rn-mobile-app-photobook.appspot.com",
  messagingSenderId: "508568813147",
  appId: "1:508568813147:web:4aca9fa576dedd00bb497e",
  measurementId: "G-0KQ8W1NXG6"
};

const app = initializeApp(firebaseConfig);

export const FIRBASE_AUTH = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);