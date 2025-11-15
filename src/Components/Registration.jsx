import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <div className='loginForm'>
        {/* 1. Left Side: Registration/Sign-Up Form */}
        <div className="form">
          {/* Title and prompt clearly indicate SIGN UP */}
          <h1 style={{fontSize:"1.5rem", textAlign:"center",}}>Create Your Green Score Account</h1>
          <p>Enter your details below to join us</p>
          
          <form action="">
            {/* Fields needed for registration */}
            <input type="email" placeholder='Email' required />
            <input type="text" placeholder='Enter Full Name' required />
            <input type="password" placeholder='Create Password' required />
            
            {/* Button clearly indicates account creation */}
            <button className='signup-button' type='submit'>Create Account</button>
            
            {/* Link to go to the Login page */}
            <p className="forgot-password">Already have an account? Sign In</p> 
          </form>
        </div>
        
        {/* 2. Right Side: Login Prompt (for Existing Users) */}
        <div className="formimage">
          <h1>Welcome, Future Hero!</h1>
          <p>
            Enter your details and start your journey with us!
          </p>
          {/* Button to prompt existing users to switch to the Login form */}
          <button className='signin-prompt-button'>
            Existing User? Sign In
          </button>
        </div>
      </div>
    </div>
  )
}