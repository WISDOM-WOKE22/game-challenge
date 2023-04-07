import { useState } from "react";
import { projectAuth } from "../Firebase/FirebaseConfig"
import firebase from "firebase";

export const useFacebookSignup = () => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const facebookSignUp = async () => {
            setIsLoading(true)
            setError(null)
            const provider = await new firebase.auth.FacebookAuthProvider()
            projectAuth.signInWithPopup(provider).then(result => console.log(result) )
            .catch(err => console.log(err))
            setIsLoading(false)
        // } catch(error) {
        //     setIsLoading(false)
        //     console.log(error)
        //     setError(error)
        // }
    }

    return{ facebookSignUp, isLoading, error}
}