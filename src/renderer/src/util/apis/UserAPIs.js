import url from './httpUrl'

export const getAllUsers = async () => {
  const response = await fetch(`${url}/api/user/getAllUsers`)
  if (!response.ok) {
    throw Error('Something went Wrong! Could not fetch users')
  }

  const data = await response.json()
  return data
}

export const deleteUser = async (id) => {
  const response = await fetch(`${url}/api/user/deleteUser?id=${id}`, { method: 'DELETE' })
  if (!response.ok) {
    throw Error('Something went Wrong! Could not delete user')
  }

  const data = await response.json()
  return data
}

export const editUser = async (data) => {
  const response = await fetch(`${url}/api/user/editUser`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw Error('There was an issue while editting user!')
  }

  const newData = response.json()
  return newData
}
