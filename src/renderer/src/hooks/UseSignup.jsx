import { useState } from 'react'
import UseAuthContext from './UseAuthContext'
import url, { queryClient } from '../util/apis/httpUrl'
import { dialogActions } from '../util/slicers/dialogSlicer'
import { useDispatch } from 'react-redux'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = UseAuthContext()
  const reduxDispatch = useDispatch()

  const signup = async (username, password, authority) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${url}/api/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, authority })
    })

    const data = await response.json()
    if (!response.ok) {
      setError(data.error)
      setIsLoading(false)
    }
    if (response.ok) {
      //save the user into local storage
      // localStorage.setItem('user', JSON.stringify(data))

      // //Update the Auth Context
      // dispatch({ type: 'LOGIN', payload: data })

      setError(null)
      setIsLoading(false)
      reduxDispatch(dialogActions.handleAddNewUser(''))
    }
  }
  queryClient.invalidateQueries({ queryKey: ['users'] })
  return { signup, isLoading, error, setError }
}
