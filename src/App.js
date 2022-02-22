import { useEffect, useState } from 'react'
import app from './fire'
import './App.css'
import { Login } from './components/Login'
import { Welcome } from './components/Welcome'

function App() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  const clearInpust = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = () => {
    clearErrors()
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message)
            break
          case 'auth/wrong-password':
            setPasswordError(err.message)
            break
        }
      })
  }

  const handleSignUp = () => {
    clearErrors()
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message)
            break
          case 'auth/weak-password':
            setPasswordError(err.message)
            break
        }
      })
  }

  const handleLogout = () => {
    app.auth().signOut()
  }

  const authListener = () => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInpust()
        setUser(user)
      } else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className="App">
      {user ? (
        <Welcome handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          password={password}
          hasAccount={hasAccount}
          emailError={emailError}
          passwordError={passwordError}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          setHasAccount={setHasAccount}
        />
      )}
    </div>
  )
}

export default App
