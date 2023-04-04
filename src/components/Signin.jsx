import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'

const style = {
    wrapper:`flex justify-center `
}

const googleSignIn = () => {
const provider = new GoogleAuthProvider() // this is a class that we can use to create a new instance of a google auth provider 
signInWithRedirect(auth, provider) // this is a function that takes in the auth object and the provider object and then signs in the user with the provider  

}

function Signin() {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn}></GoogleButton>

      
    </div>
  )
}

export default Signin
