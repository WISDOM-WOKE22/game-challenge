import { useState } from 'react'
import './signup.css'
// ICONS
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// CONTEXT
import { useSignup } from '../../Hooks/useSignup'
import { useGoogleSignup } from '../../Hooks/useGoogleSignup'
import { useFacebookSignup } from '../../Hooks/useFacebookSignup'

export default function Signup() {

    const [ firstName, setFirstName ] = useState('')
    const [ firstNameError, setFirstNameError ] = useState(null)
    const [ lastName, setLastName ] = useState('')
    const [ lastNameError, setLastNameError ] = useState(null)
    const [ email, setEmail ] = useState('')
    const [ emailError, setEmailError ] = useState(null)
    const [ password, setPassword ] = useState('')
    const [ passwordError, setPasswordError ] = useState(null)
    const [ passwordConfirm, setPasswordConfirm ] = useState('')
    const [ passwordConfirmError, setPasswordConfirmError ] = useState(null)
    const { error, isLoading, signup, response } = useSignup()
    const { googleSignUp } = useGoogleSignup()
    const { facebookSignUp } = useFacebookSignup()

    const handleSignUp =  () => {
        setFirstNameError(null)
        setLastNameError(null)
        setEmailError(null)
        setPasswordError(null)
        setPasswordConfirmError(null)
        

        if(!firstName){
            setFirstNameError('Input Your Name')
        }
        if(!lastName){
            setLastNameError('Input Your Last name')
        }
        if(!email){
            setEmailError('Input Your email')
        }
        if(!password){
            setPasswordError('Input password')
        } else if (password.length <= 6){
          return setPasswordError('password should be at least 7 characters')
         }
        if(!passwordConfirm){
            return setPasswordConfirmError('Confirm password')
        }
        if(passwordConfirm !== password ){
            return setPasswordConfirmError('Does not match password')
         }
         if(firstName && lastName && email && password && passwordConfirm){
            console.log(password.length)
            console.log(email)
            const displayName = `${firstName} ${lastName}`
            signup(
                email,
                password,
                displayName
            )
            console.log(response)
        }
    }

  return (
    <div className='auth-container signup-page'>
      <div className='auth-wrapper'>
           <div className='image-container'>
           </div>
           <div className='form-container'>
            <div className='auth-form'>
                <h2>Create an Account!</h2>
                <div className='mini-form-section'>
                <label>
                    <input
                     placeholder='First Name'
                     type='text'
                     onChange={(e) => setFirstName(e.target.value)}
                     value={firstName} 
                    />
                    {firstNameError && <div className='error'>{firstNameError}</div>}
                </label>
                <label>
                    <input 
                    placeholder='Last Name'
                    type='text'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName} 
                    />
                    {lastNameError && <div className='error'>{lastNameError}</div>}
                </label>
                </div>
                <label>
                    <input
                     placeholder='Email Address'
                     type='email'
                     onChange={(e) => setEmail(e.target.value)}
                     value={email} 
                     />
                     {emailError && <div className='error'>{emailError}</div>}
                </label>
                <div className='mini-form-section'>
                <label>
                    <input
                     placeholder='Password'
                     type='password'
                     onChange={(e) => setPassword(e.target.value)}
                     value={password} 
                     />
                     {passwordError && <div className='error'>{passwordError}</div>}
                </label>
                <label>
                    <input
                     placeholder='Repeat Password'
                     type='password'
                     onChange={(e) => setPasswordConfirm(e.target.value)}
                     value={passwordConfirm} 
                     />
                     {passwordConfirmError && <div className='error'>{passwordConfirmError}</div>}
                </label>
                </div>
                {!isLoading && <div className='form-button'>
                    <button onClick={() => handleSignUp()}>Register Account</button>
                </div>}
                {isLoading && <div className='form-button'>
                    <button disabled>Loading...</button>
                </div>}
                <hr className='line'/>
                <div className='form-button'>
                    <button className='google' 
                     onClick={() => googleSignUp()}
                    ><AiOutlineGoogle className='auth-icon google-icon'/> Register with Google</button>
                </div>
                <div className='form-button facebook-btn-container'>
                    <button 
                    className='facebook'
                    onClick={() => {
                        facebookSignUp()
                        console.log('YOU CLICK')
                    }}
                    ><FaFacebookF className='auth-icon'/> Register with Facebook</button>
                </div>
                <hr className='line'/>
                <div className='auth-text'>
                    <Link to='/password_reset'>Forgot Password?</Link>
                </div>
                <div className='auth-text'>
                  have an account? <Link to='/login'>Login</Link>
                </div>
            </div>
           </div>
      </div>
    </div>
  )
}
