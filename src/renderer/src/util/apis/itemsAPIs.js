import url from './httpUrl'

export const addNewItem = async ({ name, departmentId }) => {
  const response = await fetch(`${url}/items/newItem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, departmentId })
  })

  if (!response.ok) {
    throw Error('Something went Wrong!')
  }

  const newData = await response.json()
  return newData
}
