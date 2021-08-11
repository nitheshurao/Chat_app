import React from 'react'
import Chat from './componets/Chat'
import Signin from './componets/Signin'
import './App.css';

import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
    const [user] = useAuthState(auth)
    return (
        <div>
            {/* {/* <Signin /> */}
            {/* <Chat /> */}
            {user ? <Chat /> : <Signin />}
        </div>
    )
}

export default Appa
