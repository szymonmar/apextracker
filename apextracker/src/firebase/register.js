import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDiJr7eDYgzZsmL_uC3o28jljLP01vN-dk',
    authDomain: 'apextracker-dffd4.firebaseapp.com',
    projectId: 'apextracker-dffd4',
    storageBucket: 'apextracker-dffd4.firebasestorage.app',
    messagingSenderId: '589323777509',
    appId: '1:589323777509:web:07ddb4771ffd0be7d26b0c',
    measurementId: 'G-3YT0Y3BPZ2'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };