import React, { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, collection, doc } from 'firebase/firestore';

function RegisterLogin() {
    const [login, setLogin] = useState(false)
    const history = useNavigate()

    const handleSubmit = (e, type) => {
        e.preventDefault()
        const fName = e.target.fName.value
        //const lName = e.target.lName.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (type === 'signup') {
            createUserWithEmailAndPassword(auth, email, password).then(async data => {
                console.log(data, "authData")
                await setDoc(doc(db, 'users', data.user.uid), {
                    userId: data.user.uid,
                    'name': fName,
                });


                history('/home')
            }).catch(err => {
                alert(err.code)
                setLogin(true)
            })
        } else {
            signInWithEmailAndPassword(auth, email, password).then(data => {
                console.log(data, "authData")
                history('/home')
            }).catch(err => {
                alert(err.code)
            })
        }
    }
    return (
        <div className="App">
            <div className="row">
                <div className={login === false ? 'activeColor' : 'pointer'} onClick={() => setLogin(false)}>Sign Up</div>
                <div className={login === true ? 'activeColor' : 'pointer'} onClick={() => setLogin(true)}>Sign In</div>
            </div>
            <h1>{login ? 'SignIn' : 'SignUp'}</h1>
            <form onSubmit={(e) => handleSubmit(e, login ? 'sigin' : 'signup')}>
                <input name="fName" placeholder="Full Name" /><br />
                <input name="email" placeholder="Email" /><br />
                <input name="password" placeholder="Password" /><br /><br />
                <button>{login ? 'SignIn' : 'SignUp'}</button>

            </form>
        </div>
    )
}
export default RegisterLogin;