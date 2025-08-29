import url from './httpUrl'

export const newDeviceSesstion = async ({ date, deviceId }) => {
  const response = await fetch(`${url}/devices/addSession`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ date, deviceId })
  })

  if (!response.ok) {
    throw Error('Something went Wrong!')
  }

  const newData = await response.json()
  return newData
}

export const getDevicesData = async ({ date }) => {
  const response = await fetch(`${url}/devices/getDevices?date=${date}`)

  if (!response.ok) {
    throw Error('Something went wrong!!')
  }

  const data = await response.json()
  return data
}

export const deleteSession = async ({ id }) => {
  const response = await fetch(`${url}/devices/deleteSession`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })

  if (!response.ok) {
    throw Error('Something went Wrong!')
  }

  const newData = await response.json()
  return newData
}

export const editSessionData = async ({ id, property, value }) => {
  const response = await fetch(`${url}/devices/editSession`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, property, value })
  })

  if (!response.ok) {
    throw Error('Something went Wrong!')
  }

  const newData = await response.json()
  return newData
}
