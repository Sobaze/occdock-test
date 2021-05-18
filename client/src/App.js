import React, { useContext, useEffect } from 'react'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import Login from './views/Login/Login'
import OCCDECLoader from './components/OCCDECLoader/OCCDECLoader'
import { authContext } from './contexts/authContext'

const App = () => {
  const { isLoading, isLoggedIn, isAdmin, checkSession, isSessionChecked } = useContext(authContext)

  useEffect(() => {
    if (!isLoading && !isSessionChecked) {
      checkSession()
    }
  }, [isLoading, checkSession, isSessionChecked])

  return (
    <div className='App'>
      {
        isLoading ? <OCCDECLoader />
          : (isLoggedIn
            ? <DashboardLayout isAdmin={isAdmin} />
            : <Login />
          )
      }
    </div>
  )
}

export default App