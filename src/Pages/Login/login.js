import React from 'react'
import '../Signup/signup.css'
// ICONS
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLogin } from '../../Hooks/useLogin'
import { useGoogleSignup } from '../../Hooks/useGoogleSignup'
import { useFacebookSignup } from '../../Hooks/useFacebookSignup'

export default function Login() {
    const [ email, setEmail ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')
    const { facebookSignUp } = useFacebookSignup()
    const { googleSignUp } = useGoogleSignup()
    const { error, isLoading, login } = useLogin()

    const handleLogin = () => {
        setEmailError(null)
        setPasswordError(null)
        if(!email){
            setEmailError('Provide Email')
        }
        if(!password){
            setPasswordError('Input password')
        } else if(password.length <= 6){
            setPasswordError('password must container at least 7 characters')
        }
        if( email && password ){
            login(email, password)
        }
    }

  return (
    <div className='auth-container login-page'>
      <div className='auth-wrapper'>
           <div className='image-container'>

           </div>
           <div className='form-container'>
            <div className='auth-form'>
                <h2>Welcome back!</h2>
                
                <label>
                    <input
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                     placeholder='Enter Email address'/>
                     {emailError && <div className='error'>{emailError}</div>}
                </label>
                <label>
                    <input
                    type='password'
                    placeholder='Enter Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}/>
                    {passwordError && <div className='error'>{passwordError}</div>}
                </label>
                <div className='form-button'>
                    {isLoading && <button
                    disabled
                    >Login</button>}
                    {!isLoading && <button
                     onClick={() => handleLogin()}
                    >Login</button>}
                </div>
                <hr className='line'/>
                <div className='form-button'>
                    <button className='google' 
                     onClick={() => googleSignUp()}
                    ><AiOutlineGoogle className='auth-icon google-icon'/> Login with Google</button>
                </div>
                <div className='form-button facebook-btn-container'>
                    <button
                     className='facebook'
                     onClick={() => facebookSignUp()}
                     ><FaFacebookF className='auth-icon'/> Login with Facebook</button>
                </div>
                <hr className='line'/>
                <div className='auth-text'>
                    <Link to='/password_reset'>Forgot Password?</Link>
                </div>
                <div className='auth-text'>
                    Don't have an account? <Link to='/signup'>SignUp</Link>
                </div>
            </div>
           </div>
      </div>
    </div>
  )
}
