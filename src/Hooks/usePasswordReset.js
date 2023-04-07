import { useState } from "react"
import { projectAuth } from "../Firebase/FirebaseConfig"

export const usePasswordReset = () => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState('')

    const passwordReset = (email) => {
        setIsLoading(true)
        projectAuth.sendPasswordResetEmail(email)
        .then(() => {
            setIsLoading(false)
            console.log('link has been sent successfull')
        })
        .catch(err => {
            setIsLoading(false)
            console.log(err)
        })  
    }

    return { passwordReset, isLoading }
}