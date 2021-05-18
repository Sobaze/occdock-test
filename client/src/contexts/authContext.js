import { createContext } from "react"

export const auth = {
  isLoggedIn: false,
  isAdmin: false,
  isLoading: false,
  isSessionChecked: false,
  error: ''
}

export const authContext = createContext({
  isLoggedIn: auth.isLoggedIn, 
  isAdmin: auth.isAdmin,
  isLoading: auth.isLoading,
  isSessionChecked: auth.isSessionChecked,
})
