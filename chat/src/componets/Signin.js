import React from 'react'
import { Button } from '@material-ui/core';
import firebase from 'firebase';
import { auth } from '../firebase.js'

function Signin() {
    const SignInwithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div>
            <Button onClick={SignInwithGoogle} >Sign-In with Google</Button>
        </div>
    )
}

export default Signin
