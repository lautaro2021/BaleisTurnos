import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/client';

export const verifyEmail = () => {
    return auth.currentUser?.emailVerified
};

export const userRegister = async (email:string, password:string) => {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    await sendEmailVerification(user.user);
    return user;
}

export const userLogin = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);

    let user = window.localStorage.getItem("userData");
    if(!user) {
        window.localStorage.setItem(
            "userData",
            JSON.stringify({email, password})
        )
    }
}
