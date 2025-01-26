import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import firebase from 'firebase/app';

import styles from './Login.module.css';
// import app from '../../firebase';

function Login() {


    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     try {
    //         await app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    //         await app.auth().signInWithEmailAndPassword(email, password);
    //         history.push('/admin');
    //     } catch (err) {
    //         setError(err.message);
    //     }
    // };

    return (
        <>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.container}>
                <label className={styles.label} htmlFor="email">
                    Email
                </label>
                <input
                    className={styles.input}
                    type="text"
                    name="email"
                    autoComplete="email"
                />
                <label className={styles.label} htmlFor="password">
                    Password
                </label>
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    autoComplete="password"
                />
                <button className={styles.button} type="submit">
                    Log In
                </button>
                <div className={styles.error} role="alert">
                    
                </div>
            </form>
        </>
    );
}

export default Login;
