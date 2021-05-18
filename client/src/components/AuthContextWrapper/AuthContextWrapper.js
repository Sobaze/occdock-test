import React, { useState } from 'react'
import { 
    checkSession as apiCheckSession,
    loginUser as apiLoginUser
  } from '../../apiCalls'
import {
  auth,
  authContext 
} from '../../contexts/authContext'

const AuthContextWrapper = ({ children }) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(auth.isLoggedIn)
  const [ isAdmin, setIsAdmin ] = useState(auth.isAdmin)
  const [ isLoading, setIsLoading ] = useState(auth.isLoading)
  const [ isSessionChecked, setIsSessionChecked ] = useState(auth.isSessionChecked)
  const [ error, setError ] = useState(auth.error)

  /**
   * This function makes it possible to reuse code that otherwise would be duplicated.
   * Provide the function that will be called followed by the arguments for the function.
   *  
   * @param {function} fn - The function to be invoked 
   * @param  {...any} args - Optional arguments sent to the function, number of arguments does not matter
   */
  const _pipeline = async (fn, ...args) => {
    try {
      setIsLoading(true)
      const resp = await fn(...args) 

      if (resp.error) {
        setError(resp.error)        
        setIsLoggedIn(false)
      } else {
        setIsLoggedIn(true)
        setIsAdmin(resp.user.role.toLowerCase?.() === 'admin')
        setError('')
      }
    } catch (error) {
      setIsLoggedIn(false)
      setError('Could not check session')
    } finally {
      setIsSessionChecked(true)
      setIsLoading(false)
    }
  }

  const checkSession = async () => {
    _pipeline(apiCheckSession)
  }  

  const loginUser = async (email, password) => {
    _pipeline(apiLoginUser, email, password)
  }

  return (
    <authContext.Provider
      value={
        { 
          isLoggedIn, 
          isAdmin, 
          isLoading,
          error,
          isSessionChecked,

          checkSession,
          loginUser
        }
      }
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthContextWrapper
