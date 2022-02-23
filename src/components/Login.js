import { Button } from '@mui/material'
import React from 'react'

export const Login = ({
  email,
  password,
  hasAccount,
  emailError,
  passwordError,
  setEmail,
  setPassword,
  handleLogin,
  handleSignUp,
  setHasAccount,
}) => {
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="text"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {!hasAccount ? (
            <>
              <Button id="button" onClick={handleLogin}>
                Sign in
              </Button>
              <p>
                Don't have an account ?{' '}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <Button id="button" onClick={handleSignUp}>
                Sign up
              </Button>
              <p>
                Have an account?{' '}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
