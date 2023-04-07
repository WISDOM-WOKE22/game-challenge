import { Link } from 'react-router-dom'
import '../Signup/signup.css'
import { usePasswordReset } from '../../Hooks/usePasswordReset'
import { useState } from 'react'

export default function PasswordReset() {
    const [ email, setEmail ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const { passwordReset, isLoading } = usePasswordReset()

    const handlePasswordReset = () => {
        console.log('hello there')
        setEmailError(null)
        if(!email){
            setEmailError('Please provide an email address')
            console.log(emailError)
        }
        if(email){
            console.log('hello')
            setEmailError(null)
            passwordReset(email)
        }
    }

  return (
    <div className='auth-container password-reset-page'>
      <div className='auth-wrapper'>
           <div className='image-container'>

           </div>
           <div className='form-container'>
            <div className='auth-form'>
                <h2>Forgot Your Password?</h2>
                <p>We get it, stuff happens. just enter your email address below and we'll send you a link to reset your password!</p>
                <label>
                    <input
                     type='email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Email address...'/>
                    {emailError && <div className='error'>{emailError}</div>}
                </label>
                <div className='form-button'>
                    {isLoading && <button
                     disabled
                    >Loading...</button>}
                    {!isLoading && <button
                     onClick={() => handlePasswordReset()}
                    >Reset Password</button>}
                </div>
                <hr className='line'/>
                <div className='auth-text'>
                    <Link to='/signup'>Create an Account!</Link>
                </div>
                <div className='auth-text'>
                    Already have an account? <Link to='/login'>Login</Link>
                </div>
            </div>
           </div>
      </div>
    </div>
  )
}
