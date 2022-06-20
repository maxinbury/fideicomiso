import {initializeApp} from 'firebase/app';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyA57EF5iA-pVuPSEyFLjQouTraRaoDEYrI",
    authDomain: "legajos-951d9.firebaseapp.com",
    projectId: "legajos-951d9",
    storageBucket: "legajos-951d9.appspot.com",
    messagingSenderId: "557307117250",
    appId: "1:557307117250:web:a62f9b7781b9f57b4d055b"
};

export const firebase = initializeApp(firebaseConfig);
export const storage = getStorage();
