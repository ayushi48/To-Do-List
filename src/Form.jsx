// // 


// import React, { useState } from "react";



// export default function Form() {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>

//       {/* Sign Up */}
//       <div className="form sign-up-form">
//         <form>
//           <h1>Create Account</h1>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button>Sign Up</button>
//         </form>
//       </div>

//       {/* Sign In */}
//       <div className="form sign-in-form">
//         <form>
//           <h1>Sign In</h1>
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button>Sign In</button>
//         </form>
//       </div>

//       {/* Overlay */}
//       <div className="overlay">
//         <div className="panel left">
//           <h1>Welcome Back!</h1>
//           <p>Please login with your personal info</p>
//           <button onClick={() => setIsSignUp(false)}>Sign In</button>
//         </div>
//         <div className="panel right">
//           <h1>Hello!</h1>
//           <p>Enter your details and start your journey with us</p>
//           <button onClick={() => setIsSignUp(true)}>Sign Up</button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useCallback } from 'react';
import './index.css';

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false); // Single toggle state
  const [showLogin, setShowLogin] = useState(false); //login password and eye icon
  const [showPassword, setShowPassword] = useState(false);//password of signup and eye icon
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);//confirm password of sign up and eye icon
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handlePassword = useCallback(() => {
    setShowPassword((prev) => !prev);

  }, []);

  const handleConfirmPassword = useCallback(() => {

    setShowConfirmPassword((prev) => !prev);
  }, []);

  const handleLogin = useCallback(() => {

    setShowLogin((prev) => !prev);
  }, []);


  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      {/* Sign Up Form */}
      <div className="form sign-up-form">
        <form>
          <h1 className='signup-heading'>Create Account</h1>

          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <div className='input-wrapper'>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            {/* <span className="eye-icon" onClick={handlePassword}>
              {showPassword ? "🙈" : "👁️"}
            </span> */}

            <span className="eye-icon" onClick={handleLogin}>
              <i className={`fa-solid ${showLogin ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>

          <div className='input-wrapper'>
            <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
            {/* <span className="eye-icon" onClick={handleConfirmPassword}>
              {showConfirmPassword ? "🙈" : "👁️"}
            </span> */}

            <span className="eye-icon" onClick={handleConfirmPassword}>
              <i className={`fa-solid ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>
          <button>Sign Up</button>
          <p className='signup-para'>or Sign Up using </p>
          <div className="social-icons">
            <a href="#" className='facebook'><i className="fab fa-facebook-f"></i></a>
            <a href="#" className='google'><i className="fab fa-google"></i></a>
            <a href="#" className='twitter'><i className="fab fa-twitter"></i></a>
            <a href="#" className='insta'><i className='fab fa-instagram'></i></a>
          </div>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form sign-in-form">
        <form>
          <h1 className='signin-heading'>Login to Your Account </h1>



          <input type="email" placeholder="Email" />
          {/* <input type="password" placeholder="Password" /> */}
          <div className='input-wrapper'>
            <input type={showLogin ? "text" : "password"} value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Password" />

            {/* <span className="eye-icon" onClick={handleLogin}>
              {showLogin? "🙈" : "👁️"}
            </span> */}

            <span className="eye-icon" onClick={handleLogin}>
              <i className={`fa-solid ${showLogin ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>


          </div>
          <button>Sign In</button>
          <p className='signin-para'> or Login using social networks</p>
          <div className="social-icons">
            <a href="#" className='facebook'><i className="fab fa-facebook-f"></i></a>
            <a href="#" className='google'><i className="fab fa-google"></i></a>
            <a href="#" className='twitter'><i className="fab fa-twitter"></i></a>
            <a href="#" className='insta'><i className='fab fa-instagram'></i></a>
          </div>
        </form>
      </div>

      {/* Overlay with Toggle Buttons */}
      <div className="overlay">
        <div className="panel left">
          <h1 className='overlay-heading'>🚀Ready to tackle your tasks?</h1>
          <p className='overlay-para'>We missed you !<br></br>Already part of the plan? <br></br>Log in to take control of your day and stay connected to our community. </p>
          <button onClick={() => setIsSignUp(false)} className='overlay-button'>Sign In</button>
        </div>
        <div className="panel right">
          <h1 className='overlay-heading'>🚀Ideas? Goals? <br></br>Let’s bring them to life.</h1>
          <p className='overlay-para'>Don't have an account yet? <br></br>Sign up to enjoy exclusive features.</p>
          <button onClick={() => setIsSignUp(true)} className='overlay-button'>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
