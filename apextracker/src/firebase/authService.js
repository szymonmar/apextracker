import { auth } from './register';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';

const firebaseErrorMessages = {
  'auth/email-already-in-use': 'This email is already in use. Please use a different one.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/weak-password': 'Password is too weak. Please use at least 6 characters.',
  'auth/user-not-found': 'Didn\'t find an account with that email.',
  'auth/wrong-password': 'Wrong password. Please try again.',
  'auth/too-many-requests': 'Too many failed login attempts. Please try again later.'
};

const mapFirebaseError = (error) => {
  if (!error?.code) {
    return 'An unknown error occurred. Please try again.';
  }

  return firebaseErrorMessages[error.code] || 'An unknown error occurred. Please try again.';
};

export async function registerWithEmail({ email, password, username }) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  if (username) {
    await updateProfile(userCredential.user, { displayName: username });
  }

  const token = await userCredential.user.getIdToken();

  return {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    username: userCredential.user.displayName || username,
    token
  };
}

export async function loginWithEmail({ email, password }) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const token = await userCredential.user.getIdToken();

  return {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    username: userCredential.user.displayName || '',
    token
  };
}

export function parseAuthError(error) {
  return mapFirebaseError(error);
}
