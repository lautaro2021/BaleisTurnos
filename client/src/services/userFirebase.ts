import {
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase/client';

export const verifyEmail = () => {
    return auth.currentUser.emailVerified
};

