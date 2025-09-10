import url from './httpUrl'

export const addNewDepartment = async ({ name }) => {
  const response = await fetch(`${url}/departments/newDepartment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })

  if (!response.ok) {
    throw Error('Something went Wrong!')
  }

  const newData = await response.json()
  return newData
}

export const getAllDepartments = async () => {
  const response = await fetch(`${url}/departments/getDepartments`)

  if (!response.ok) {
    throw Error('Something went Wrong!')
  }

  const data = response.json()
  return data
}

export const getDepartmentDetails = async ({ id }) => {
  const response = await fetch(`${url}/departments/getDepDetes?id=${id}`)
  if (!response.ok) {
    throw Error('Something went Wrong!')
  }

  const data = response.json()
  return data
}
