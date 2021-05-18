export async function loginUser (email, password) {
    try {
      const response = await window.fetch('/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      })
      const data = await response.json()
  
      if (
        response.status === 401 ||
        response.status === 400
      ) return { user: {}, error: data.error }
      window.localStorage.setItem('occdec_token', data.token)
  
      return data
    } catch (error) {
      return { error: 'server is not responding' }
    }
  }
  
  export async function checkSession () {
    try {
      const token = window.localStorage.getItem('occdec_token')
  
      if (token) {
        const response = await window.fetch('/api/v1/users/verify-token', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
  
        const data = await response.json()
        if (
          response.status === 401 ||
          response.status === 403
        ) return { user: {}, error: data.error }
  
        return { user: data.user, error: null }
      }
    } catch (error) {
      return { error: 'could not check session' }
    }
  }
  
  export async function createUser (body) {
    try {
      const token = window.localStorage.getItem('occdec_token')
  
      if (token) {
        const baseurl = 'http://localhost:3000'
  
        const response = await window.fetch(`${baseurl}/api/v1/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(body)
        })
  
        const data = await response.json()
        return data
      }
    } catch (error) {
      return { error: 'server is not responding' }
    }
  }
  
  export async function createDevice (body) {
    const baseurl = 'http://localhost:3000'
    const response = await window.fetch(`${baseurl}/api/v1/devices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    return data
  }
  