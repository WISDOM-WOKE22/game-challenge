import { useState } from "react";
import { projectAuth } from "../Firebase/FirebaseConfig"
import firebase from "firebase";

export const useGoogleSignup = () => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    // const [ response, setResponse ] = useState('')

        const googleSignUp = async () => {
            try{
                setIsLoading(true)
                setError(null)
                const provider = await new firebase.auth.GoogleAuthProvider()
                projectAuth.signInWithPopup(provider)
                .then(result => console.log(result))
                .catch(err => console.log(err))
                setIsLoading(false)
                console.log(provider)
            } catch (error){
                setIsLoading(false)
                setError(error)
                console.log(error)
            }
        };
  return { googleSignUp, isLoading, error }
}
